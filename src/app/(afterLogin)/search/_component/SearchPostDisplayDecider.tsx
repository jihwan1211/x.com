"use client";
import { Post as IPost } from "@/model/Post";
import Post from "../../_component/Post";

type Prop = {
  post: IPost;
};

// search에서 post를 display하는 기준
// 1. 답글은 post하지 않음
// 2. 재게시글은 post하지 않음
// 3. 어떤 게시글의 답글 찾는 로직도 필요 없음

export default function PostDisplayDecider({ post }: Prop) {
  // 1. 답글은 post하지 않음
  if (post.Parent) return null;
  // 2. 재게시글은 post하지 않음
  if (post.Original) return null;

  return <Post post={post}></Post>;
}
