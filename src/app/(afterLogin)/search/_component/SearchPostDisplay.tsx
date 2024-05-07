"use client";

import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import SearchPostDisplayDecider from "./SearchPostDisplayDecider";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";
import { Post as IPost } from "@/model/Post";
import getSearchResults from "../_lib/getSearchResults";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function SearchPostDisplay({ searchParams }: Props) {
  const { fetchNextPage, hasNextPage, isFetching, data } = useInfiniteQuery<
    IPost[],
    Object,
    InfiniteData<IPost[]>,
    [_1: string, _2: string, searchParams: { q: string; pf?: string; f?: string }],
    number
  >({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResults,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });

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
            <SearchPostDisplayDecider key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: "50px" }}></div>
    </>
  );
}
