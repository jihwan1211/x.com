"use client";
import { Fragment, useEffect } from "react";
import { useSuspenseInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import getFollowingPosts from "../_lib/getFollowingPosts";

import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";

export default function FollowingPosts() {
  const { isFetching, fetchNextPage, hasNextPage, data } = useSuspenseInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => lastPage.at(-1)?.postId,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 100,
  });

  useEffect(() => {
    if (inView) !isFetching && hasNextPage && fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage, isFetching]);

  if (!data) return null;
  return (
    <>
      {data.pages.map((ele: IPost[], idx: number) => (
        <Fragment key={idx}>
          {ele.map((ele) => (
            <Post key={ele.postId} post={ele}></Post>
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: "100px" }}></div>
    </>
  );
}
