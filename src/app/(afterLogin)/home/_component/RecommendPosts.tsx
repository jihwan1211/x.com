"use client";

import { useQuery } from "@tanstack/react-query";

import { getRecommendPosts } from "../_lib/getRecommendPosts";

import Post from "../../_component/Post";
import { IPost } from "@/model/Post";

export default function RecommendPosts() {
  const { data } = useQuery({ queryKey: ["posts", "recommends"], queryFn: getRecommendPosts });

  return data?.map((ele: IPost, idx: number) => <Post key={idx} post={ele}></Post>);
}
