"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Post as IPost } from "@/model/Post";
import PostImages from "./PostImages";

import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import PostOptions from "./PostOptions";
import { MouseEventHandler } from "react";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post({ post }: { post: IPost }) {
  const router = useRouter();
  const onClickArticle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  // return null;
  return (
    <Container>
      <Article onClick={onClickArticle}>
        <Profile>
          <div>
            <Link href={`/${post.User.id}`} style={{ textDecoration: "none" }}>
              <Image src={post.User.image} alt="profile img" width={40} height={40}></Image>
              <div></div>
            </Link>
          </div>
        </Profile>

        <Main>
          <PostWriter>
            <Link href={`/${post.User.id}`}>
              <div>{post.User.nickname}</div>
            </Link>
            <div>@${post.User.id}</div>
            <div>.</div>
            <div>{dayjs(post.createdAt).fromNow(true)}</div>
          </PostWriter>
          <PostContent>
            <div>{post.content}</div>
            <PostImages post={post}></PostImages>
          </PostContent>

          <PostOptions post={post} />
        </Main>
      </Article>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  /* height: 100dvh; */
  padding: 0 16px;

  border-top: 1px solid rgb(239, 243, 244);

  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Article = styled.article`
  display: flex;
  box-sizing: border-box;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 40px;
  padding-top: 12px;

  & > div {
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

const Main = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  /* width: 528px; */
  background-color: transparent;

  margin: 12px;

  display: flex;
  flex-direction: column;
`;

export const PostWriter = styled.div`
  height: 20px;

  display: flex;
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

  & > div:nth-child(2) {
    padding: 0 4px;
  }
`;

const PostContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    color: rgb(15, 20, 25);
    line-height: 20px;
    word-wrap: break-word;
    min-width: 0px;
    font-size: 15px;
    font-weight: 400;
  }
`;
