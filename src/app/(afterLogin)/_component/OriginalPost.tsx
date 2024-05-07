"use client";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { Post as IPost } from "@/model/Post";
import PostProfile from "./PostProfile";
import PostMain from "./PostMain";

type Prop = {
  post: IPost;
  comment: IPost | undefined;
};

export default function OriginalPost({ post, comment }: Prop) {
  const router = useRouter();
  const onClickArticle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  return (
    <Container>
      <RepostMessage>
        <svg viewBox="0 0 24 24" aria-hidden="true" height="16px">
          <g>
            <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"></path>
          </g>
        </svg>
        <span>재게시했습니다.</span>
      </RepostMessage>
      <Article onClick={onClickArticle}>
        <PostProfile post={post} comment={comment}></PostProfile>
        <PostMain post={post} />
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

const RepostMessage = styled.div`
  color: rgb(83, 100, 113);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  & > svg {
    margin-left: 15px;
    margin-right: 4px;
    fill: rgb(83, 100, 113);
  }
`;
