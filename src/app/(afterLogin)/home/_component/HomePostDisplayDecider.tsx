"use client";
import { Post as IPost } from "@/model/Post";
import Post from "../../_component/Post";
import useGetPostReply from "../../_hooks/useGetPostReply";

type Prop = {
  post: IPost;
};

// home에서 post를 display하는 기준
// 1. 답글은 post하지 않음
// 2. 재게시글은 post하지 않음
// 3. 어떤 게시글의 답글 찾는 로직은 필요

export default function HomePostDisplayDecider({ post }: Prop) {
  // 1. 답글은 post하지 않음
  if (post.Parent) return null;
  // 2. 재게시글은 post하지 않음
  if (post.Original) return null;
  const comment: IPost | undefined = useGetPostReply(post);

  return <Post post={post} comment={comment}></Post>;
}
