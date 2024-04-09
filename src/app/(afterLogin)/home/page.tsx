import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { Container } from "./_component/styled";
import HomeTab from "./_component/HomeTab";
import HomeTabProvider from "./_component/HomeTabProvider";

import PostForm from "./_component/PostForm";
import getRecommendPosts from "./_lib/getRecommendPosts";
import PostDisplay from "./_component/PostDisplay";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getRecommendPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.at(-1)?.postId,
    pages: 1,
  });

  return (
    <Container>
      <HomeTabProvider>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HomeTab></HomeTab>
          <PostForm></PostForm>
          <PostDisplay />
        </HydrationBoundary>
      </HomeTabProvider>
    </Container>
  );
}
