"use client";

import { useQuery } from "@tanstack/react-query";

import Post from "../../_component/Post";

import getUserPosts from "../_lib/getUserPosts";

import { Post as IPost } from "@/model/Post";

type Prop = {
  username: string;
};

export default function UserPosts({ username }: Prop) {
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, username: string]>({ queryKey: ["posts", "user", username], queryFn: getUserPosts });

  if (!data) return null;
  return (
    <>
      {data?.map((ele: IPost) => (
        <Post key={ele.postId} post={ele}></Post>
      ))}
    </>
  );
}
