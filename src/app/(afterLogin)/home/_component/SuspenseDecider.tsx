import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import getRecommendPosts from "../_lib/getRecommendPosts";
import getRecommendPostsServer from "../_lib/getRecommendPostsServer";
import PostDisplay from "./PostDisplay";

export default async function SuspenseDecider() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getRecommendPostsServer,
    initialPageParam: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDisplay />
    </HydrationBoundary>
  );
}
