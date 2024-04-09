"use client";

import { useEffect, Fragment } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import getRecommendPosts from "../_lib/getRecommendPosts";

import Post from "../../_component/Post";
import { IPost } from "@/model/Post";

export default function RecommendPosts() {
  const { isFetching, fetchNextPage, hasNextPage, data } = useInfiniteQuery<IPost[], Object, IPost[], [_1: string, _2: string], number>({
    queryKey: ["posts", "recommends"],
    queryFn: getRecommendPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) !isFetching && hasNextPage && fetchNextPage();
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (!data) return null;
  // console.log("try to use infinite scrolling.", data);

  // 이거 에러는...? type error인데..
  return (
    <>
      {data.pages.map((ele: IPost[], idx: number) => (
        <Fragment key={idx}>
          {ele.map((post: IPost) => (
            <Post key={post.postId} post={post}></Post>
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: "50px" }}></div>
    </>
  );
}
