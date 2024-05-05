import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";
import { cookies } from "next/headers";

type Props = {
  queryKey: [string, string, string];
  pageParam?: number;
};

const getPostCommentsServer: QueryFunction<IPost[], [_1: string, _2: string, _3: string], number> = async ({ queryKey, pageParam }: Props) => {
  const [_1, _2, postId] = queryKey;
  console.log(pageParam);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/comments?cursor=${pageParam || 0}`, {
    method: "get",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  // const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/comments/${postId}`);

  if (!response.ok) throw new Error();
  return response.json();

  // if (response.data.message === "no_comments") return [];
  // if (response.statusText === "OK") return response.data;
  // return null;
};

export default getPostCommentsServer;
