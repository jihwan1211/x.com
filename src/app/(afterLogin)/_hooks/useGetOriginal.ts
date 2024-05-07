import { useQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import getUserSinglePost from "../[username]/_lib/getUserSinglePost";

export default function useGetOriginal(postId: number) {
  const { data } = useQuery<IPost, Object, IPost, [_1: string, _2: number]>({ queryKey: ["post", postId], queryFn: getUserSinglePost });

  if (!data) return null;
  // 너무 많이 리렌더 되는건 일단 미해결 상태
  // console.log("repost data : ", data);

  return data;
}
