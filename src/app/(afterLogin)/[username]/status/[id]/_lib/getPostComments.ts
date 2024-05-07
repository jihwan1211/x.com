import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";

type Props = {
  queryKey: [string, string, number];
  pageParam?: number;
};

const getPostComments: QueryFunction<IPost[], [_1: string, _2: string, _3: number], number> = async ({ queryKey, pageParam }: Props) => {
  const [_1, _2, postId] = queryKey;
  console.log(pageParam);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/comments?cursor=${pageParam || 0}`, {
    method: "get",
    credentials: "include",
  });

  if (!response.ok) throw new Error();
  return response.json();

  // if (response.data.message === "no_comments") return [];
  // if (response.statusText === "OK") return response.data;
  // return null;
};

export default getPostComments;
