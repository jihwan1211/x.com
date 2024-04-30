"use client";

import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

import Tab from "./Tab";
import { ProfileUserdataMid, UserName, SignupDate, AboutFollower, ProfileUserdata, NoAccountId, NoAccountMsg, ProfileUserdataTop, AbsoluteProfileContainer } from "./style";

import { User } from "@/model/User";
type Prop = {
  username: string;
};

export default function ProfileUserData({ username }: Prop) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<User>(["user", username]);

  const createdDate = new Date(data?.createdAt!);

  if (data === undefined) {
    return (
      <>
        <NoAccountId>@{username}</NoAccountId>
        <NoAccountMsg>계정이 존재하지 않음</NoAccountMsg>
      </>
    );
  }
  // 팔로우, 팔로잉 데이터 추가 필요
  return (
    <ProfileUserdata>
      <ProfileUserdataTop>
        <AbsoluteProfileContainer>
          <div>아 몰랑</div>
        </AbsoluteProfileContainer>
        <Link href="/settings/profile">프로필 수정</Link>
      </ProfileUserdataTop>
      <ProfileUserdataMid>
        <UserName>
          <div>{data?.nickname}</div>
          <div>@{data?.id}</div>
        </UserName>
        <SignupDate>
          <svg viewBox="0 0 24 24" aria-hidden="true" height="1.25rem">
            <g>
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
            </g>
          </svg>
          <div>{`가입일 ${createdDate.getFullYear()}년 ${createdDate.getMonth() + 1}월`}</div>
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
  );
}
