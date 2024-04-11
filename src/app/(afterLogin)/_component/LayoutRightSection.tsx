"use client";

import { ReactNode } from "react";
import { Session } from "@auth/core/types";
import styled from "styled-components";

import TrendsForYou from "./TrendsForYou";
import WhoToFollow from "./WhoToFollow";
import SearchFilter from "../search/_component/SearchFilter";
import MainSearchBar from "./MainSearchBar";

type Props = {
  children: ReactNode;
  me: Session | null;
};

export default function LayoutRightSection({ children, me }: Props) {
  return (
    <RightSection>
      <RightSectionInner>
        <Main>{children}</Main>
        <Right>
          <MainSearchBar />
          <SearchFilter />
          {/* suspense 사용해야 하는 곳 */}
          <TrendsForYou me={me} />
        </Right>
      </RightSectionInner>
    </RightSection>
  );
}

const RightSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: 100dvh;

  @media (min-width: 1024px) {
    width: 1050px;
  }
`;

const RightSectionInner = styled.div`
  height: 100%;
  width: 600px;

  display: flex;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: 990px;
  }
`;

const Main = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 200dvh;
`;

const Right = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 350px;
    height: 100dvh;
    box-sizing: border-box;
    margin-right: 10px;
    /* position: relative; */

    flex-direction: column;
  }
`;

const MessageMain = styled.div`
  box-sizing: border-box;
  width: 1050px;
`;
