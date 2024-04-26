"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useSelectedLayoutSegment } from "next/navigation";
import { Session } from "@auth/core/types";

import getWhoToFollow from "../_lib/getWhoToFollow";

import styled from "styled-components";
import { ShowMore } from "./TrendsForYou";
import FollowRecommends from "./FollowRecommends";
import { User } from "@/model/User";

type Prop = {
  me: Session | null;
};
export default function WhoToFollow({ me }: Prop) {
  const { data } = useSuspenseQuery({ queryKey: ["user", "toFollow"], queryFn: getWhoToFollow });

  const segment = useSelectedLayoutSegment();
  if (segment === "messages") return null;
  return (
    <Container>
      <h1>{me?.user ? "팔로우 추천" : "내가 좋아할 만한 컨텐츠"}</h1>
      {data?.map((ele: User, idx: number) => (
        <FollowRecommends key={idx} user={ele}></FollowRecommends>
      ))}
      <ShowMore>Show more</ShowMore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgb(247, 249, 249);
  border-radius: 21px;

  & > h1 {
    padding: 12px 16px;
  }
`;
