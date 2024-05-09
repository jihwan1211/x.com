"use client";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useFollowingPostInfinityQuery from "@/app/queries/useFollowingPostInfinityQuery";
import { Post as IPost } from "@/model/Post";
import HomePostDisplayDecider from "./HomePostDisplayDecider";

export default function FollowingPosts() {
  const { isFetching, fetchNextPage, hasNextPage, data } = useFollowingPostInfinityQuery();

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
          {ele.map((post) => (
            <HomePostDisplayDecider key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: "100px" }}></div>
    </>
  );
}
