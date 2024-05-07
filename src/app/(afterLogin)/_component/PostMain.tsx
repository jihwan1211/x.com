"use client";
import Link from "next/link";
import styled from "styled-components";
import PostImages from "./PostImages";
import PostOptions from "./PostOptions";
import { Post as IPost } from "@/model/Post";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Prop = {
  post: IPost;
};

export default function PostMain({ post }: Prop) {
  return (
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
        {post.Parent && (
          <ForWho>
            <span>@{post.User.id}</span>님에게 보내는 답글
          </ForWho>
        )}
        <div>{post.content}</div>
        <PostImages post={post}></PostImages>
      </PostContent>

      <PostOptions post={post} />
    </Main>
  );
}

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

const ForWho = styled.div`
  & > span {
    color: rgb(29, 155, 240);
  }
`;
