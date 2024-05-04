import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";
import { cookies } from "next/headers";
type Prop = {
  pageParam: number;
};

const getRecommendPostsServer: QueryFunction<IPost[], [_1: string, _2: string], number> = async ({ pageParam }: Prop) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recommends?cursor=${pageParam}`, {
    method: "get",
    credentials: "include",
    headers: {
      Cookie: cookies().toString(),
    },
  });

  if (response.ok) return response.json();
  else throw new Error();
};

export default getRecommendPostsServer;
