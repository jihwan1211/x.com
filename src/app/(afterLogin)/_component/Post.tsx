"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import styled from "styled-components";
import Comments from "./Comments";
import PostProfile from "./PostProfile";
import PostMain from "./PostMain";
import { Post as IPost } from "@/model/Post";

type Props = {
  post: IPost;
  comment?: IPost | undefined;
};

export default function Post({ post, comment }: Props) {
  const router = useRouter();

  const onClickArticle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <>
      <Container>
        <Article onClick={onClickArticle}>
          <PostProfile post={post} comment={comment}></PostProfile>
          <PostMain post={post} />
        </Article>
      </Container>
      {comment && <Comments post={comment} />}
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
