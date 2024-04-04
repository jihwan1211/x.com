"use client";

import { useQuery } from "@tanstack/react-query";
import getUserPost from "../_lib/getUserPost";
import { IPost } from "@/model/Post";
import Post from "./Post";
import styled from "styled-components";
type Props = {
  params: { id: string; username: string };
};

export default function UserPost({ params }: Props) {
  const { data } = useQuery<IPost, Object, IPost, [_1: string, _2: string, _3: string]>({ queryKey: ["post", params.username, params.id], queryFn: getUserPost });

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
