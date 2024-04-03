"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import getPostComments from "../_lib/getPostComments";
import { IPost } from "@/model/Post";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "../../../_component/CommentForm";
type Prop = {
  id: string;
};

export default function PostComments({ id }: Prop) {
  const queryClient = useQueryClient();
  const postData = queryClient.getQueryData<IPost>(["post", id]);
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({ queryKey: ["post", "comments", id], queryFn: getPostComments, enabled: !!postData });

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
