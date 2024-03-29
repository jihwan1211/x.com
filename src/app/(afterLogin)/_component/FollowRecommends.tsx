"use client";
import Image from "next/image";
import styled from "styled-components";
import { User } from "@/model/User";

type Prop = {
  user: User;
};

export default function FollowRecommends({ user }: Prop) {
  return (
    <Profile>
      <Image src={user.image!} alt="profile image" width={40} height={40}></Image>
      <div>
        <div>{user.nickname}</div>
        <div>{user.id}</div>
      </div>
      <div>
        <button>Follow</button>
      </div>
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

  & > div:nth-child(2) {
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

  & > div:nth-child(3) {
    display: flex;
    background-color: rgb(15, 20, 25);
    min-width: 32px;
    min-height: 32px;
    border-radius: 9999px;

    button {
      background-color: rgb(15, 20, 25);
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-size: 15px;
      border-radius: 9999px;
      cursor: pointer;
      padding: 0 16px;
    }
  }
`;
