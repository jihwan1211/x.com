"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { IPost } from "@/model/Post";

import PostOptions from "./PostOptions";
import { createActionURL } from "@auth/core";

export default function PhotoPost({ post }: { post: IPost }) {
  const createdAt = new Date(post.createdAt);
  const hour = createdAt.getHours();
  const minute = createdAt.getMinutes();
  console.log("hour : ", hour);
  console.log("createdAt : ", createdAt);
  const router = useRouter();
  const onClickArticle = () => {
    router.push(`/${post.user.id}/status/${post.postId}`);
  };

  return (
    <Container>
      <Article onClickCapture={onClickArticle}>
        <Profile>
          <ProfileLink href={`/${post.user.id}`} style={{ textDecoration: "none" }}>
            <Image src={post.user.image} alt="profile img" width={40} height={40}></Image>
            <div></div>
          </ProfileLink>

          <PostWriter>
            <Link href={`/${post.user.id}`}>
              <div>{post.user.nickname}</div>
            </Link>

            <div>@{post.user.id}</div>
          </PostWriter>
        </Profile>

        <Main>
          <PostContent>{post.content}</PostContent>
          <PostTime>
            {hour >= 12 ? "오후 " : "오전 "}
            {hour}:{minute} . {createdAt.getFullYear()}년 {createdAt.getMonth()}월 {createdAt.getDay()}일 . 조회수 {post.watched}
          </PostTime>
          <PostOptions post={post} />
        </Main>
      </Article>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 100dvh;
  width: 400px;
  padding: 0 8px;

  border-top: 1px solid rgb(239, 243, 244);

  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: flex-start; */
  align-items: space-between;

  /* width: 40px; */
  padding-top: 12px;
  margin-right: 8px;
`;

const ProfileLink = styled(Link)`
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  background-color: transparent;
  img {
    border-radius: 50%;
  }
  &:hover {
    div {
      background-color: rgba(255, 255, 255, 0.09);
    }
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
`;

const Main = styled.div`
  flex-grow: 1;

  background-color: transparent;

  box-sizing: border-box;
  margin: 12px;

  display: flex;
  flex-direction: column;
`;

export const PostWriter = styled.div`
  box-sizing: border-box;
  height: 20px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  color: rgb(83, 100, 113);
  cursor: pointer;

  a {
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid black;
    }

    div {
      color: rgb(15, 20, 25);
      font-weight: 700;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(15, 20, 25);
  line-height: 20px;
  word-wrap: break-word;
  min-width: 0px;
  font-size: 15px;
  font-weight: 400;
`;

const PostTime = styled.div`
  margin: 16px 0;
  font-size: 14px;
  color: rgb(83, 100, 113);
`;
