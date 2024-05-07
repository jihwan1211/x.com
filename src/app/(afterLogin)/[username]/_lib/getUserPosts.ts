import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";

type Props = {
  queryKey: [string, string, string];
  pageParam?: number;
};

const getUserPosts: QueryFunction<IPost[], [_1: string, _2: string, _3: string], number> = async ({ queryKey, pageParam }: Props) => {
  const [_1, _2, username] = queryKey;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts?cursor=${pageParam}`, {
    method: "get",
    credentials: "include",
  });

  if (!response.ok) throw new Error();
  return response.json();
};

export default getUserPosts;
