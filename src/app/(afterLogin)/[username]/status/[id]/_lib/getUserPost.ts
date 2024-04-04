import axios from "axios";
import { QueryFunction } from "@tanstack/query-core";
import { IPost } from "@/model/Post";

const getUserPost: QueryFunction<IPost, [_1: string, _2: string, _3: string]> = async ({ queryKey }) => {
  const [_1, username, id] = queryKey;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${username}/${id}`);

  if (response.statusText === "OK") return response.data;
  return null;
};

export default getUserPost;
