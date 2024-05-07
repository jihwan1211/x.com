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
  const [dataFound, setDataFound] = useState(false);
  const { isFetching, fetchNextPage, hasNextPage, data, isFetched } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string, _3: number], number>({
    queryKey: ["posts", "reply", post.postId],
    queryFn: getReplyPost,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  const findUserComment = () => {
    if (!data || !("pages" in data)) return;

    const targetComment = data.pages.flat().find((ele) => ele.User.id === session?.user?.email);
    if (targetComment) {
      setDataFound(true);
      setComment(targetComment);
    }
  };

  useEffect(() => {
    if (dataFound || !session?.user?.email) return;
    if (post.Comments || post.commentCount) findUserComment();
  }, [post, session, isFetched]);

  useEffect(() => {
    if (!dataFound && !isFetching && hasNextPage) fetchNextPage();
  }, [isFetching, hasNextPage, fetchNextPage, dataFound]);

  return comment;
}
