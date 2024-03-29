"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import styled from "styled-components";

import getSearchResults from "../search/_lib/getSearchResults";

import { useSearchParams } from "next/navigation";

import SearchBar from "../_component/SearchBar";
import BackBtn from "../_component/BackBtn";
import Tab from "./_component/Tab";
import SearchPostDisplay from "./_component/SearchPostDisplay";

type Props = { searchParams: { q: string; f?: string; pf?: string } };

// 이거 왜 매개변수 이름이 searchParams?
export default function Search({ searchParams }: Props) {
  console.log("searchParams", searchParams);
  // const q = searchParams.get("q");
  // console.log("qqqqqq", q);

  return (
    <Container>
      <TabContainer>
        <TabFixedContainer>
          <SearchContainer>
            <BackBtn></BackBtn>
            <SearchWrapper>
              <SearchBar></SearchBar>
            </SearchWrapper>
          </SearchContainer>
          <Tab />
        </TabFixedContainer>
      </TabContainer>

      <SearchPostDisplay searchParams={searchParams} />
    </Container>
  );
}

const Container = styled.main`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  height: 1000dvh;
  width: inherit;
`;

const TabContainer = styled.div`
  box-sizing: border-box;
  border-top: 0px;
  width: 598px;
  height: 115px;
  /* height: auto; */

  /* display: flex; */
`;

const TabFixedContainer = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);

  position: fixed;

  width: inherit;
  height: inherit;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
`;

const SearchContainer = styled.div`
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  width: inherit;
  height: 60px;
`;

const SearchWrapper = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 510px;
  width: 510px;
  height: 53px;
  display: flex;
`;
