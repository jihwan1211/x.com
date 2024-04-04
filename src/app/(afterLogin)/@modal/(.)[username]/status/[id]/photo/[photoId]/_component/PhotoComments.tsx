"use client";
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

export const CommentsContainer = styled.div`
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
