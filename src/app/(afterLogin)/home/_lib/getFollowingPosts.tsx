import axios from "axios";
import { QueryFunction } from "@tanstack/query-core";
import { Post as IPost } from "@/model/Post";

type Prop = {
  pageParam: number;
};
const getFollowingPosts: QueryFunction<IPost[], [_1: string, _2: string], number> = async ({ pageParam }: Prop) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/following?cursor=${pageParam}`);
  // console.log("postResommends response!", response);
  if (response.statusText === "OK") return response.data;
};

export default getFollowingPosts;
