"use client";

import axios from "axios";
import { QueryFunction } from "@tanstack/query-core";

import { IPost } from "@/model/Post";

type Prop = {};

const getUserPosts: QueryFunction<IPost[], [_1: string, _2: string, username: string]> = async ({ queryKey }) => {
  const [_1, _2, username] = queryKey;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts`);
  if (response.statusText === "OK") return response.data;
};

export default getUserPosts;
