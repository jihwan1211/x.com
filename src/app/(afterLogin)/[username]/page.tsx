import Link from "next/link";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import getUserInfo from "./_lib/getUserInfo";

import BackBtn from "../_component/BackBtn";
import Tab from "./_component/Tab";

import {
  Container,
  Navigation,
  Userzone,
  Profile,
  HeaderPhotoZone,
  ProfileUserdata,
  AboutFollower,
  AbsoluteProfileContainer,
  ProfileUserdataMid,
  ProfileUserdataTop,
  UserName,
  SignupDate,
} from "./page-style";
import UserInfo from "./_component/UserInfo";

type Props = {
  params: any;
};
export default async function Username({ params }: Props) {
  const { username } = params;
  console.log("params", params);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["user", params.username],
    queryFn: getUserInfo,
  });
  // 개인 사용자 데이터 가져오는 것으로 수정해ㅑ함
  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Navigation>
          <BackBtn></BackBtn>
          <div>
            <div>김지환</div>
            <div>0 게시물</div>
          </div>
        </Navigation>
        <Userzone>
          <Profile>
            <HeaderPhotoZone>
              <Link href="/home">{/* <Image src={이미지} alt="header_photo"></Image> */}</Link>
            </HeaderPhotoZone>
            <ProfileUserdata>
              <ProfileUserdataTop>
                <AbsoluteProfileContainer>
                  <div>아 몰랑</div>
                </AbsoluteProfileContainer>
                <Link href="/settings/profile">프로필 수정</Link>
              </ProfileUserdataTop>
              <ProfileUserdataMid>
                <UserName>
                  <div>김지환</div>
                  <div>@surrrfffing</div>
                </UserName>
                <SignupDate>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height="1.25rem">
                    <g>
                      <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                    </g>
                  </svg>
                  <div>가입일 2024년 2월</div>
                </SignupDate>
                <AboutFollower>
                  <Link href="/follow">
                    <span>1</span> 팔로우 중
                  </Link>
                  <Link href="/followers">
                    <span>0</span> 팔로워
                  </Link>
                </AboutFollower>
                <Tab></Tab>
              </ProfileUserdataMid>
            </ProfileUserdata>
          </Profile>
          {/* <PostDisplay /> */}
          {/* <UserPosts username={username} /> */}
        </Userzone>
      </HydrationBoundary>
    </Container>
  );
}
