"use client";
import { useQuery } from "@tanstack/react-query";

import getUserSinglePost from "../../../_lib/getUserSinglePost";
import { Post as IPost } from "@/model/Post";
import SinglePost from "./SinglePost";
import styled from "styled-components";
import { useParams } from "next/navigation";

// 왜 refetch해야 정상적인 데이터가 나오는 걸까?

export default function UserPost() {
  const params = useParams();
  const { data } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({ queryKey: ["post", params.id as string], queryFn: getUserSinglePost });

  if (data === undefined) return <NoPage>이 페이지는 존재하지 않습니다.</NoPage>;
  return <SinglePost post={data} />;
}

const NoPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 30px;
  font-weight: 700;
`;
