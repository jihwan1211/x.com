"use client";
import { Post as IPost } from "@/model/Post";
import useGetPostReply from "../../_hooks/useGetPostReply";
import useGetOriginal from "../../_hooks/useGetOriginal";
import Post from "@/app/(afterLogin)/_component/Post";
import OriginalPost from "../../_component/OriginalPost";

/*
/[username] 에서 post를 display하는 기준
1. 답글 post한다. <- post 형식이 살짝 다름
2. 재게시글 post한다.
3. 어떤 게시글의 답글 찾는 로직도 필요.
*/

type Prop = {
  post: IPost;
};
export default function UserzonePostDisplayDecider({ post }: Prop) {
  const comment: IPost | undefined = useGetPostReply(post);

  // 답글 post
  // if(post.Parent){
  //   return <ReplyPost />
  // }

  // 재게시글 post
  if (post.Original) {
    const originalPost = useGetOriginal(post.Original.postId);
    if (originalPost) return <OriginalPost post={originalPost!} comment={comment} />;
  }

  return <Post post={post} comment={comment}></Post>;
}
