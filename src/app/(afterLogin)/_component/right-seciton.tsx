"use client";

import { ReactNode } from "react";
import { Session } from "@auth/core/types";
import styled from "styled-components";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

import FixedSearchBar from "./SearchBar";
import TrendsForYou from "./TrendsForYou";
import WhoToFollow from "./WhoToFollow";
import SearchFilter from "../search/_component/SearchFilter";

type Props = {
  children: ReactNode;
  me: Session | null;
};

export default function LayoutRightSection({ children, me }: Props) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  if (segment === "messages") return <MessageMain>{children}</MessageMain>;
  else
    return (
      <RightSection>
        <RightSectionInner>
          <Main>{children}</Main>
          <Right>
            {pathname === "/search" || pathname === "/explore" ? null : (
              <SearchConatiner>
                <FixedSearchBar></FixedSearchBar>
              </SearchConatiner>
            )}
            <SearchFilter />
            {pathname === "/explore" ? null : <TrendsForYou me={me}></TrendsForYou>}
            <WhoToFollow></WhoToFollow>
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

const SearchConatiner = styled.div`
  display: flex;

  justify-content: start;
  width: 350px;
  height: 53px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const MessageMain = styled.div`
  box-sizing: border-box;
  width: 1050px;
`;
