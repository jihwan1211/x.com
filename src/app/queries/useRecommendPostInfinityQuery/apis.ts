import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";

type Prop = {
  pageParam: number;
};

const getRecommendPosts: QueryFunction<IPost[], [_1: string, _2: string], number> = async ({ pageParam }: Prop) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recommends?cursor=${pageParam}`, {
    method: "get",
    credentials: "include",
  });

  if (response.ok) return response.json();
  else throw new Error();
};

export default getRecommendPosts;
