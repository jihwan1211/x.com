"use client";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteData } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Post as IPost } from "@/model/Post";
import getReplyPost from "../_lib/getReplyPost";

export default function useGetPostReply(post: IPost) {
  const { data: session } = useSession();
  const [comment, setComment] = useState<IPost>();
  const [foo, setFoo] = useState(false);
  const { isFetching, fetchNextPage, hasNextPage, data } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string, _3: number], number>({
    queryKey: ["posts", "reply", post.postId],
    queryFn: getReplyPost,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  useEffect(() => {
    if (!foo && post.Comments) {
      const isComment = post.Comments?.find((ele) => ele.userId === session?.user?.email);
      if (isComment && data && "pages" in data) {
        // console.log(data);
        const sessionUserReply: IPost | undefined = data.pages.flat().find((ele) => ele.User.id === session?.user?.email);

        if (sessionUserReply) {
          setFoo(true);
          setComment(sessionUserReply);
        }
      }
    } else {
      // 댓글의 댓글이 있을 때 찾는 경우 response에 Comment가 없네 이 경우에는
      if (post.commentCount && data && "pages" in data) {
        // console.log(data);
        const sessionUserReply: IPost | undefined = data.pages.flat().find((ele) => ele.User.id === session?.user?.email);

        if (sessionUserReply) {
          setFoo(true);
          setComment(sessionUserReply);
        }
      }
    }
  }, [post, session, data]);

  useEffect(() => {
    if (!foo && !isFetching && hasNextPage) fetchNextPage();
  }, [isFetching, hasNextPage, fetchNextPage, foo]);

  return comment;
}
