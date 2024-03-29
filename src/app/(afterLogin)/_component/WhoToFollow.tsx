"use client";

import { useQuery } from "@tanstack/react-query";

import getWhoToFollow from "../_lib/getWhoToFollow";

import styled from "styled-components";
import { ShowMore } from "./TrendsForYou";
import FollowRecommends from "./FollowRecommends";
import { User } from "@/model/User";

export default function WhoToFollow() {
  const { data } = useQuery({ queryKey: ["user", "toFollow"], queryFn: getWhoToFollow });
  return (
    <Container>
      <h1>Who to follow</h1>
      {data?.map((ele: User) => (
        <FollowRecommends key={ele.UId} user={ele}></FollowRecommends>
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
