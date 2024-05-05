"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect } from "react";
import { Post as IPost } from "@/model/Post";
import PostImages from "./PostImages";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import PostOptions from "./PostOptions";
import useGetPostReply from "../_hooks/useGetPostReply";
import Reply from "./Reply";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import getReplyPost from "../_lib/getReplyPost";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post({ post }: { post: IPost }) {
  const router = useRouter();
  const comment: IPost | undefined = useGetPostReply(post);
  // const comment = undefined;

  const { isFetching, fetchNextPage, hasNextPage, data } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string, _3: number], number>({
    queryKey: ["posts", "reply", post.postId],
    queryFn: getReplyPost,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });

  useEffect(() => {
    if (!isFetching && hasNextPage) fetchNextPage();
  }, [isFetching, hasNextPage, fetchNextPage]);

  const onClickArticle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  // 답글 달자마자에는 위에 나와야하는데?
  // 답글 가지고 오는 것도 내가 답글을 생성한 게시글에 대해서만.
  // 이 부분도 수정해야함.
  if (post.Parent) return null;

  return (
    <>
      <Container>
        <Article onClick={onClickArticle}>
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
      {comment && <Reply post={comment} />}
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
