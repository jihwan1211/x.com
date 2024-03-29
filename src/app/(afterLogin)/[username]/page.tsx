"use client";

import Link from "next/link";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { getRecommendPosts } from "../home/_lib/getRecommendPosts";
import styled from "styled-components";
import BackBtn from "../_component/BackBtn";
import Tab from "./_component/Tab";

import Image from "next/image";
import 이미지 from "../../../../public/구글2.png";
import PostDisplay from "../home/_component/PostDisplay";

export default async function Username() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getRecommendPosts,
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
          <PostDisplay />
        </Userzone>
      </HydrationBoundary>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 100dvh;
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);

  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  box-sizing: border-box;
  padding: 0 16px;
  height: 53px;

  display: flex;
  align-items: center;
  & > div:nth-child(2) {
    cursor: pointer;
    & > div:nth-child(1) {
      box-sizing: border-box;
      color: rgb(15, 20, 25);
      max-width: 100%;
      min-width: 0px;
      font-size: 20px;
      line-height: 24px;
      padding-bottom: 2px;
      font-weight: 700;
    }
    & > div:nth-child(2) {
      color: rgb(83, 100, 113);
      max-width: 100%;
      min-width: 0px;
      font-size: 13px;
      line-height: 16px;

      font-weight: 400;
    }
  }
`;

const Userzone = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
`;

const Profile = styled.div`
  position: relative;
  border-bottom: 1px solid rgb(239, 243, 244);
  /* border-bottom: 1px solid rgb(207, 217, 222); */
`;

const HeaderPhotoZone = styled.div`
  height: 200px;
  background-color: rgb(207, 217, 222);
`;

const AbsoluteProfileContainer = styled.div`
  margin-bottom: 12px;
  height: auto;
  display:block
  background-color: red;
  
  & > div{
  
  }
`;

const ProfileUserdata = styled.div`
  box-sizing: border-box;
  padding: 12px 16px 0 16px;
  /* margin-bottom: 16px; */
`;

const ProfileUserdataTop = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;

  & > a {
    margin-left: auto;
    box-sizing: border-box;
    padding: 0 16px;
    margin-bottom: 12px;

    cursor: pointer;
    min-width: 36px;
    min-height: 36px;
    text-decoration: none;
    color: rgb(15, 20, 25);
    border: 1px solid rgb(207, 217, 222);
    border-radius: 9999px;
    transition: 0.2s;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(15, 20, 25, 0.1);
    }
  }
`;

const ProfileUserdataMid = styled.div`
  box-sizing: border-box;
`;

const UserName = styled.div`
  box-sizing: border-box;
  margin-top: 4px;
  margin-bottom: 12px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 100%;
    color: rgb(15, 20, 25);
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    flex-shrink: 1;
  }

  & > div:nth-child(2) {
    color: rgb(83, 100, 113);
    line-height: 20px;
    max-width: 100%;
    font-size: 15px;
    font-weight: 400;
    line-height: 12px;
  }
`;

const SignupDate = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 4px;
    fill: rgb(83, 100, 113);
  }
  box-sizing: border-box;
  margin-bottom: 12px;
  color: rgb(83, 100, 113);
  font-size: 15px;
  min-width: 0px;
`;

const AboutFollower = styled.div`
  display: flex;
  & > a {
    text-decoration: none;
    color: rgb(83, 100, 113);

    & > span {
      color: rgb(15, 20, 25);
      font-weight: 700;
    }
  }

  & > a:nth-child(1) {
    margin-right: 20px;
  }
`;
