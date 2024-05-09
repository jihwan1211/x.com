import { useSuspenseInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import getFollowingPosts from "./apis";
import { Post as IPost } from "@/model/Post";

export default function useFollowingPostInfinityQuery() {
  return useSuspenseInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });
}
