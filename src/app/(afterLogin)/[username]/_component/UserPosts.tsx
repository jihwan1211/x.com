"use client";
import { Fragment, useEffect } from "react";
import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import getUserPosts from "../_lib/getUserPosts";
import { useInView } from "react-intersection-observer";
import { Post as IPost } from "@/model/Post";
import UserzonePostDisplayDecider from "./UserzonePostDisplayDecider";

type Prop = {
  username: string;
};

export default function UserPosts({ username }: Prop) {
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string, _3: string], number>({
    queryKey: ["posts", "user", username],
    queryFn: getUserPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
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
  // <Post key={ele.postId} post={ele}></Post>
  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((ele) => (
            <UserzonePostDisplayDecider key={ele.postId} post={ele} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
