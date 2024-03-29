"use client";

import { useQuery } from "@tanstack/react-query";

import { getFollowingPosts } from "../_lib/getFollowingPosts";

import Post from "../../_component/Post";
import { IPost } from "@/model/Post";

export default function FollowingPosts() {
  const { data } = useQuery({ queryKey: ["posts", "followings"], queryFn: getFollowingPosts });

  return data?.map((ele: IPost, idx: number) => <Post key={idx} post={ele}></Post>);
}
