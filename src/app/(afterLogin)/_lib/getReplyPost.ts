import { QueryFunction } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";

const getReplyPost: QueryFunction<IPost[], [_1: string, _2: string, _3: number]> = async ({ queryKey }) => {
  const [_1, _2, postId] = queryKey;

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/comments?cursor=0`, {
    method: "get",
    credentials: "include",
  });

  if (response.ok) return response.json();
  else throw new Error();
};

export default getReplyPost;
