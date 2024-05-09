import { useSuspenseInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import getRecommendPosts from "./apis";
import { Post as IPost } from "@/model/Post";

export default function useRecommendPostInfinityQuery() {
  return useSuspenseInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ["posts", "recommends"],
    queryFn: getRecommendPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });
}
