import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import BackBtn from "@/app/(afterLogin)/_component/BackBtn";
import UserPost from "./_component/UserPost";
import PostComments from "./_component/PostComments";

import { Main, Nav, Container } from "./style";
import { Post as IPost } from "@/model/Post";
import getUserPostServer from "./_lib/getUserPostServer";
import getPostCommentsServer from "./_lib/getPostCommentsServer";

type Prop = {
  params: { id: string; username: string };
};

export default async function StatusPage({ params }: Prop) {
  const { id, username } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post", id],
    queryFn: getUserPostServer,
  });
  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["posts", "comments", id],
  //   queryFn: getPostCommentsServer,
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage: IPost[]) => lastPage.at(-1)?.postId,
  // });
  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div>
          <Nav>
            <BackBtn></BackBtn>
            <div>게시하기</div>
          </Nav>
        </div>
        <Main>
          <div>
            <UserPost params={params} />
          </div>
          <div>
            <PostComments params={params} />
          </div>
        </Main>
      </HydrationBoundary>
    </Container>
  );
}
