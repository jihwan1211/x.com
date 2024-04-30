import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";

type Prop = {};

const getUserPosts: QueryFunction<IPost[], [_1: string, _2: string, username: string]> = async ({ queryKey }) => {
  const [_1, _2, username] = queryKey;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts?cursor=0`, {
    credentials: "include",
  });

  if (response.ok) return response.json();
};

export default getUserPosts;
