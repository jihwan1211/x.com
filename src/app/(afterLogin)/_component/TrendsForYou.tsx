"use client";

import styled from "styled-components";
import { Session } from "@auth/core/types";

import TrendComponent from "./Trend";

type Props = {
  me: Session | null;
};

export default function TrendsForYou({ me }: Props) {
  return (
    <Container>
      <h1>{me?.user ? "Trends for you" : "트렌드를 볼 수 없습니다."}</h1>
      {me?.user ? (
        <>
          <TrendComponent></TrendComponent>
          <TrendComponent></TrendComponent>
          <TrendComponent></TrendComponent>
          <TrendComponent></TrendComponent>
          <TrendComponent></TrendComponent>
          <TrendComponent></TrendComponent>
          <TrendComponent></TrendComponent>
          <TrendComponent></TrendComponent>
          <ShowMore>show more</ShowMore>
        </>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgb(247, 249, 249);
  border-radius: 21px;

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
