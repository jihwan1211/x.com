"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import getPostComments from "../_lib/getPostComments";
import { IPost } from "@/model/Post";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "../../../_component/CommentForm";
type Props = {
  params: { username: string; id: string };
};

export default function PostComments({ params }: Props) {
  const queryClient = useQueryClient();
  const postData = queryClient.getQueryData<IPost>(["post", params.username, params.id]);
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({ queryKey: ["post", "comments", params.id], queryFn: getPostComments, enabled: !!postData });
  console.log("에에에ㅔㅂㅂ");
  console.log("포포폿", postData);
  if (!data || data?.length === 0) return null;

  return (
    <>
      <CommentForm></CommentForm>
      {data?.map((ele) => (
        <Post key={ele.postId} post={ele}></Post>
      ))}
    </>
  );
}
