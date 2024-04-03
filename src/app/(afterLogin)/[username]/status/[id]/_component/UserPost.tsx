"use client";

import { useQuery } from "@tanstack/react-query";
import getUserPost from "../_lib/getUserPost";
import { IPost } from "@/model/Post";
import Post from "./Post";
import styled from "styled-components";
type Prop = {
  id: string;
};

export default function UserPost({ id }: Prop) {
  const { data } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({ queryKey: ["post", id], queryFn: getUserPost });
  console.log(data);
  if (data === undefined) return <NoPage>이 페이지는 존재하지 않습니다.</NoPage>;
  return <Post post={data}></Post>;
}

const NoPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 30px;
  font-weight: 700;
`;
