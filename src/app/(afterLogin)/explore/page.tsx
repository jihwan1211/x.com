"use client";

import styled from "styled-components";
import TrendComponent from "../_component/Trend";
import { ChangeEventHandler } from "react";
import SearchBar from "../_component/SearchBar";

export default function Explore() {
  return (
    <Container>
      <SearchContainer>
        <SearchBar></SearchBar>
      </SearchContainer>
      <h1>나를 위한 트렌드</h1>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>
      <TrendComponent></TrendComponent>

      <ShowMore>더 보기</ShowMore>
    </Container>
  );
}

const Container = styled.div`
  /*  경계선 */
  display: flex;
  flex-direction: column;
  /* justify-content: start; */

  /* height: 53px; */
  height: 100dvh;
  width: inherit;

  box-sizing: border-box;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  box-sizing: border-box;
  padding-top: 12px;
  margin-bottom: 20px;

  width: 598px;
  height: 53px;

  display: flex;
  align-items: center;
`;

const ShowMore = styled.div`
  box-sizing: border-box;
  padding: 16px;
  color: rgb(29, 155, 240);
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: rgba(15, 20, 25, 0.1);
  }
`;
