"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Post as IPost } from "@/model/Post";

type Props = {
  post: IPost;
  comment?: IPost | undefined;
};

export default function PostProfile({ post, comment }: Props) {
  return (
    <Profile>
      <div>
        <Link href={`/${post.User.id}`} style={{ textDecoration: "none" }}>
          <Image src={post.User.image} alt="profile img" width={40} height={40}></Image>
          <div></div>
        </Link>
      </div>
      {comment && (
        <ReplyLine>
          <div></div>
        </ReplyLine>
      )}
    </Profile>
  );
}

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 40px;
  padding-top: 12px;

  & > div:nth-child(1) {
    position: relative;
    box-sizing: border-box;
    background-color: transparent;

    flex-basis: 40px;
    height: 40px;

    &:hover {
      div {
        background-color: rgba(255, 255, 255, 0.09);
      }
    }

    img {
      border-radius: 50%;
    }

    div {
      top: 0;
      position: absolute;
      box-sizing: border-box;
      background-color: transparent;
      border-radius: 50%;

      width: 40px;
      height: 40px;
    }
  }
`;

const ReplyLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 4px;

  & > div {
    width: 2px;
    /* flex-grow: 1; */
    height: 100%;
    background-color: rgb(207, 217, 222);
    /* border: 1px solid black; */
  }
`;
