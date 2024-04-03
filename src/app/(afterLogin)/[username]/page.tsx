import Link from "next/link";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import getUserInfo from "./_lib/getUserInfo";
import getUserPosts from "./_lib/getUserPosts";

import Nav from "./_component/Nav";
import ProfileUserData from "./_component/ProfileUserData";
import UserPosts from "./_component/UserPosts";

import { Container, Userzone, Profile, HeaderPhotoZone } from "./page-style";

type Props = {
  params: { username: string };
};

export default async function Username({ params }: Props) {
  const { username } = params;
  console.log("params", params);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["user", username],
    queryFn: getUserInfo,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "user", username],
    queryFn: getUserPosts,
  });
  // 개인 사용자 데이터 가져오는 것으로 수정해ㅑ함
  // 이거 서버 컴포넌트인데 Nav 같은거는 client란 말이야 그래서 깜박거리는데 어카지;
  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Nav username={username} />
        <Userzone>
          <Profile>
            <HeaderPhotoZone>
              <Link href="/home">{/* <Image src={이미지} alt="header_photo"></Image> */}</Link>
            </HeaderPhotoZone>
            <ProfileUserData username={username} />
          </Profile>
          <UserPosts username={username} />
        </Userzone>
      </HydrationBoundary>
    </Container>
  );
}
