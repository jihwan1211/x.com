import axios from "axios";
import { QueryFunction } from "@tanstack/query-core";
import { IPost } from "@/model/Post";

type Prop = {
  id: string;
};

const getUserPost: QueryFunction<IPost, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [_1, id] = queryKey;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`);

  if (response.statusText === "OK") return response.data;
  return null;
};

export default getUserPost;
