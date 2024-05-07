"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { Post as IPost } from "@/model/Post";
import PostImages from "@/app/(afterLogin)/_component/PostImages";
import PostOptions from "@/app/(afterLogin)/_component/PostOptions";
import PostProfile from "@/app/(afterLogin)/_component/PostProfile";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function SinglePost({ post }: { post: IPost }) {
  const router = useRouter();
  const date = dayjs(post.createdAt);

  const onClickArticle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  // 답글 달자마자에는 위에 나와야하는데?

  return (
    <>
      <Container>
        <Article onClick={onClickArticle}>
          <PostProfile post={post} />

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
            <PostInfo>
              <span>
                {date.format("A") === "AM" ? "오전" : "오후"}
                &nbsp;
                {date.hour() % 12}:{date.minute()}.
              </span>
              <span>
                {date.month()}월 {date.date()}일. &nbsp;
              </span>
              <span>조회수</span>
            </PostInfo>
            <PostOptions post={post} />
          </Main>
        </Article>
      </Container>
    </>
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

const PostInfo = styled.div`
  margin: 16px 0;
  color: rgb(83, 100, 113);
  font-size: 15px;
`;
