"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Post as IPost } from "@/model/Post";
import getReplyPost from "../_lib/getReplyPost";

type Prop = {
  post: IPost;
};

export default function useGetPostReply(post: IPost) {
  const { data: session } = useSession();
  const [comment, setComment] = useState<IPost>();
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: number]>({ queryKey: ["posts", "reply", post.postId], queryFn: getReplyPost });

  useEffect(() => {
    const isComment = post.Comments.find((ele) => ele.userId === session?.user?.email);
    if (isComment && data) {
      setComment(data[0]);
    }
  }, [post]);
  return comment;
}
