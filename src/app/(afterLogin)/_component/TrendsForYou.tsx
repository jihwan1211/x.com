"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TrendComponent from "./Trend";

export default function TrendsForYou() {
  const pathname = usePathname();
  if (pathname === "/explore") {
    return null;
  }

  return (
    <Container>
      <h1>Trends for you</h1>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <ShowMore>show more</ShowMore>
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
