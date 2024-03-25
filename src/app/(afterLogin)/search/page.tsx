"use client";

import styled from "styled-components";
import SearchBar from "../_component/SearchBar";
import BackBtn from "../_component/BackBtn";
import Tab from "./_component/Tab";

type Props = { searchParams: { q: string; f?: string; pf?: string } };

export default function Search({ searchParams }: Props) {
  return (
    <Container>
      <TabContainer>
        <TabFixedContainer>
          <SearchContainer>
            <BackBtn></BackBtn>
            <SearchWrapper>
              <SearchBar query={searchParams}></SearchBar>
            </SearchWrapper>
          </SearchContainer>
          <Tab></Tab>
        </TabFixedContainer>
      </TabContainer>
    </Container>
  );
}

const Container = styled.main`
  box-sizing: border-box;
  padding-top: 12px;
  display: flex;
  flex-direction: column;

  height: 100dvh;
  width: inherit;
`;

const TabContainer = styled.div`
  box-sizing: border-box;
  border-top: 0px;
  width: 598px;

  display: flex;
`;

const TabFixedContainer = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);

  position: fixed;

  width: 598px;
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
  display: flex;
`;
