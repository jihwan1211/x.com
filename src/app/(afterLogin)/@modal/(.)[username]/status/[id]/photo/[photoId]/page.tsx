import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import BackBtn from "../../../../_component/BackBtn";

import { Container } from "./style";
import getUserPost from "@/app/(afterLogin)/[username]/_lib/getUserSinglePost";
import getPostComments from "@/app/(afterLogin)/[username]/status/[id]/_lib/getPostComments";
import PhotoComments from "./_component/PhotoComments";
import PhotoDisplay from "./_component/PhotoDisplay";

type Props = {
  params: { username: string; id: string; photoId: string };
};

export default async function PhotoModal({ params }: Props) {
  // id는 postId
  const { username, id, photoId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post", username, id],
    queryFn: getUserPost,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "comments", id],
    queryFn: getPostComments,
  });

  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BackBtn></BackBtn>
        <PhotoDisplay params={params}></PhotoDisplay>
        <PhotoComments params={params} />
      </HydrationBoundary>
    </Container>
  );
}
