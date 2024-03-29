import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { Container } from "./_component/styled";
import HomeTab from "./_component/HomeTab";
import HomeTabProvider from "./_component/HomeTabProvider";
import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import { getRecommendPosts } from "./_lib/getRecommendPosts";
import PostDisplay from "./_component/PostDisplay";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getRecommendPosts,
  });

  return (
    <Container>
      <HomeTabProvider>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HomeTab></HomeTab>
          <PostForm></PostForm>
          {/* <div></div> */}
          <PostDisplay />
          {/* <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post> */}
        </HydrationBoundary>
      </HomeTabProvider>
    </Container>
  );
}
