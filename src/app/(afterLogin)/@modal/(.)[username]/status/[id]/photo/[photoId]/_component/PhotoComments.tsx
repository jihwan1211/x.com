"use client";
import { useEffect } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import getPostComments from "@/app/(afterLogin)/[username]/status/[id]/_lib/getPostComments";
import { IPost } from "@/model/Post";
import CommentForm from "../../../../../_component/CommentForm";
import PhotoPost from "./PhotoPost";
import CommentsPost from "./CommentsPost";

type Props = {
  params: { username: string; id: string };
};

export default function PhotoComments({ params }: Props) {
  const queryClient = useQueryClient();
  const postData = queryClient.getQueryData(["post", params.username, params.id]);
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({ queryKey: ["posts", "comments", params.id], queryFn: getPostComments, enabled: !!postData });

  useEffect(() => {
    // 뒷배경 스크롤 방지
    // 뒤로가기 버튼 누르면 auto로 설정함
    document.body.style.overflow = "auto";
  }, []);

  if (!data || !postData) return null;
  return (
    <CommentsContainer>
      <PhotoPost post={postData as IPost} />
      <CommentForm></CommentForm>
      {data?.map((ele) => (
        <CommentsPost key={ele.postId} post={ele}></CommentsPost>
      ))}
    </CommentsContainer>
  );
}

const CommentsContainer = styled.div`
  width: 400px;
  height: 100dvh;
  padding: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
