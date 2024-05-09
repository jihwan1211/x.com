"use client";
import { useQueryClient } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SinglePostCommentsDisplayDecider from "./SinglePostCommentsDisplayDecider";
import { useParams } from "next/navigation";
import useCommentInfinityQuery from "@/app/queries/useCommentsInfinityQuery";

export default function PostComments() {
  const queryClient = useQueryClient();
  const params = useParams();
  const postData = queryClient.getQueryData<IPost>(["post", params.id]);

  const { data, fetchNextPage, hasNextPage, isFetching } = useCommentInfinityQuery(params.id as string);

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
              <SinglePostCommentsDisplayDecider post={post} />
            ))}
          </Fragment>
        ))}
        <div ref={ref} style={{ height: 50 }} />
      </>
    );
  }
  return null;
}
