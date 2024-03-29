"use client";

import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";

import getTrends from "../../_lib/getTrends";

import { trend as ITrend } from "@/model/Trend";

import Trend from "./Trend";

export default function TrendsForYou() {
  const { data } = useQuery({ queryKey: ["trends"], queryFn: getTrends });

  return (
    <Container>
      {data?.map((ele: ITrend) => (
        <Trend key={ele.tagId} trend={ele}></Trend>
      ))}
      <ShowMore>show more</ShowMore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;

  & > h1 {
    padding: 12px 16px;
  }
`;

export const ShowMore = styled.div`
  box-sizing: border-box;
  padding: 16px;
  color: rgb(29, 155, 240);
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 0 0 15px 15px;

  &:hover {
    transition: 0.2s;
    background-color: rgba(15, 20, 25, 0.1);
  }
`;
