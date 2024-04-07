"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import styled from "styled-components";
import { IPost } from "@/model/Post";
import getUserPost from "../../../../../../../[username]/status/[id]/_lib/getUserPost";
import PostOptions from "./PostOptions";

type Props = {
  params: { username: string; id: string; photoId: string };
};

export default function PhotoDisplay({ params }: Props) {
  const { data } = useQuery<IPost, Object, IPost, [_1: string, _2: string, _3: string]>({ queryKey: ["post", params.username, params.id], queryFn: getUserPost });

  if (data === undefined) return <NoPage>이 페이지는 존재하지 않습니다.</NoPage>;
  return (
    <PhotoContainer>
      <PhotoInnerContainer>
        <Image src={data.images[0].url} width={900} height={900} alt="post image"></Image>
      </PhotoInnerContainer>
      <OptionsWrapper>
        <PostOptions post={data} />
      </OptionsWrapper>
    </PhotoContainer>
  );
}

const NoPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 30px;
  font-weight: 700;
`;

export const PhotoContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
export const PhotoInnerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
  }
`;
