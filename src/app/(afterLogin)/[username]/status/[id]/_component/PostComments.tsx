"use client";

import { InfiniteData, useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import getPostComments from "../_lib/getPostComments";
import { Post as IPost } from "@/model/Post";
import Post from "./Post";
// import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "../../../_component/CommentForm";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
type Props = {
  params: { username: string; id: string };
};

export default function PostComments({ params }: Props) {
  const queryClient = useQueryClient();
  const postData = queryClient.getQueryData<IPost>(["post", params.id]);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string, _3: string], number>({
    queryKey: ["posts", "comments", params.id],
    queryFn: getPostComments,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    enabled: !!postData,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (!data) return null;

  if (postData) {
    return (
      <>
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.map((post) => (
              <Post key={post.postId} post={post} />
            ))}
          </Fragment>
        ))}
        <div ref={ref} style={{ height: 50 }} />
      </>
    );
  }
  return null;

  // return (
  //   <>
  //     <CommentForm></CommentForm>
  //     {data?.map((ele) => (
  //       <Post key={ele.postId} post={ele}></Post>
  //     ))}
  //   </>
  // );
}
