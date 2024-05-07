"use client";
import { Post as IPost } from "@/model/Post";
import Post from "@/app/(afterLogin)/_component/Post";
import useGetPostReply from "@/app/(afterLogin)/_hooks/useGetPostReply";
import Comment from "./Comment";

/*
/[username]/status/[postid]에서 post를 display하는 기준
1. single post는 고려 대상이 아니고
2. 댓글에서 대댓글 확인하는 로직
3. 재게시 댓글은 post해야해?
*/
type Prop = {
  post: IPost;
};

// 여기는 필요 없을듯?
// css 가 달랐던거 같은데

export default function SinglePostCommentsDisplayDecider({ post }: Prop) {
  const comment: IPost | undefined = useGetPostReply(post);

  //   return <Post post={post} comment={comment}></Post>;
  return <Comment post={post} comment={comment}></Comment>;
}
