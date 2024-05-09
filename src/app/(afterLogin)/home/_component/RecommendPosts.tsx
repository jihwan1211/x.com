"use client";
import { useEffect, Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { Post as IPost } from "@/model/Post";
import HomePostDisplayDecider from "./HomePostDisplayDecider";
import useRecommendPostInfinityQuery from "@/app/queries/useRecommendPostInfinityQuery";

export default function RecommendPosts() {
  const { isFetching, fetchNextPage, hasNextPage, data } = useRecommendPostInfinityQuery();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 100,
  });

  useEffect(() => {
    if (inView) !isFetching && hasNextPage && fetchNextPage();
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (!data) return null;

  return (
    <>
      {data.pages.map((ele: IPost[], idx: number) => (
        <Fragment key={idx}>
          {ele.map((post: IPost) => (
            <HomePostDisplayDecider key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: "50px" }}></div>
    </>
  );
}
