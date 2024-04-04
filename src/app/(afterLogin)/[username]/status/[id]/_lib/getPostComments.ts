import axios from "axios";
import { QueryFunction } from "@tanstack/query-core";
import { IPost } from "@/model/Post";

const getPostComments: QueryFunction<IPost[], [_1: string, _2: string, _3: string]> = async ({ queryKey }) => {
  const [_1, _2, postId] = queryKey;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/comments/${postId}`);

  if (response.data.message === "no_comments") return [];
  if (response.statusText === "OK") return response.data;
  return null;
};

export default getPostComments;
