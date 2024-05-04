import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";

const getUserPost: QueryFunction<IPost, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [_1, id] = queryKey;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error();
  if (response.ok) return response.json();

  return null;
};

export default getUserPost;
