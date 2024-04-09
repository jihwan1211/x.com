import axios from "axios";
import { QueryFunction } from "@tanstack/query-core";
import { IPost } from "@/model/Post";

type Prop = {
  pageParam: number;
};

const getRecommendPosts: QueryFunction<IPost[], [_1: string, _2: string], number> = async ({ pageParam }: Prop) => {
  console.log("pageParam:", pageParam);
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends?cursor=${pageParam}`);
  // console.log("postResommends response!", response);
  if (response.statusText === "OK") return response.data;
};

export default getRecommendPosts;
