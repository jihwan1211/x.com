import { Post as IPost } from "@/model/Post";
import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import getComments from "./apis";

export default function useCommentInfinityQuery(id: string) {
  return useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string, _3: string], number>({
    queryKey: ["posts", "comments", id],
    queryFn: getComments,
    initialPageParam: 0,
    // getNextPageParam: (lastPage) => lastPage.at(0)?.postId,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    // enabled: !!postData,
  });
}
