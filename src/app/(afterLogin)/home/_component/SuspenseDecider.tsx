import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import getRecommendPosts from "../_lib/getRecommendPosts";
import PostDisplay from "./PostDisplay";

export default async function SuspenseDecider() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getRecommendPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.at(-1)?.postId,
    pages: 3,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDisplay />
    </HydrationBoundary>
  );
}
