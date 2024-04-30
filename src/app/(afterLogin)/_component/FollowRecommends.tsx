"use client";

import Image from "next/image";
import { Session } from "@auth/core/types";
import styled from "styled-components";
import { User } from "@/model/User";
import Link from "next/link";
import FollowButton from "./FollowButton";

type Prop = {
  user: User;
  session: Session | null;
};

export default function FollowRecommends({ user, session }: Prop) {
  return (
    <Profile>
      <Image src={user.image!} alt="profile image" width={40} height={40}></Image>
      <Link href={`/${user.id}`}>
        <div>{user.nickname}</div>
        <div>{user.id}</div>
      </Link>
      <FollowButton user={user} session={session} />
    </Profile>
  );
}

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;

  cursor: pointer;
  background-color: inherit;

  &:hover {
    background-color: rgb(15, 20, 25, 0.1);
  }
  & > div {
    height: 40px;
  }

  & > img {
    border-radius: 50%;
  }

  a:link {
    text-decoration: none;
  }
  a:visited,
  a:active {
    color: rgb(15, 20, 25);
  }

  & > a:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 100%;
    margin: 12px;
    flex-grow: 1;

    div:nth-child(2) {
      color: rgb(83, 100, 113);
    }
  }
`;
