"use client";

import Link from "next/link";
import React from "react";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

import { styled } from "styled-components";

import Nav from "./_component/nav";
import FixedSearchBar from "./_component/SearchBar";
import TrendsForYou from "./_component/TrendsForYou";
import WhoToFollow from "./_component/WhoToFollow";
import NavProfile from "./_component/nav-profile";
import SearchFilter from "./search/_component/SearchFilter";

const AfterLoginLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  const segment = useSelectedLayoutSegment();

  const pathname = usePathname();

  return (
    <Container>
      <Header>
        <FixedHeader>
          <Link href="/home">
            <MainLogo>
              <svg viewBox="0 0 24 24" aria-hidden="true" width="20rem" height="2.5rem">
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            </MainLogo>
          </Link>
          <Nav></Nav>
          <NavProfile />
        </FixedHeader>
      </Header>
      {segment === "messages" ? (
        <MessageMain>{children}</MessageMain>
      ) : (
        <RightSection>
          <RightSectionInner>
            <Main>{children}</Main>
            <Right>
              {pathname === "/search" || pathname === "/explore" ? null : (
                <SearchConatiner>
                  <FixedSearchBar></FixedSearchBar>
                </SearchConatiner>
              )}
              <SearchFilter></SearchFilter>
              <TrendsForYou></TrendsForYou>
              <WhoToFollow></WhoToFollow>
            </Right>
          </RightSectionInner>
        </RightSection>
      )}
      {modal}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #fff;
`;

const Header = styled.header`
  box-sizing: border-box;
  width: 275px;
  /* flex-grow: 1; */
  display: flex;
  justify-content: flex-end;

  @media (min-width: 1295px) {
    justify-content: center;
  }
`;

const FixedHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88px;
  position: fixed;
  height: 100%;
  overflow-x: hidden;
  padding: 0 8px;
  background-color: white;

  @media (min-width: 1295px) {
    width: 275px;
    align-items: flex-start;
  }
`;

const MainLogo = styled.div`
  width: 52px;
  height: 52px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(15, 20, 25, 0.1);
    border-radius: 50%;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  width: inherit;
  cursor: pointer;

  &:hover {
    background-color: rgb(15, 20, 25, 0.1);
    border-radius: 9999px;
  }
  & > div {
    height: 40px;
  }

  & > div:nth-child(1) {
    width: 40px;
    border-radius: 50%;
    background-color: red;
  }

  & > div:nth-child(2) {
    display: none;
  }

  svg {
    display: none;
  }

  @media (min-width: 1295px) {
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      max-width: 100%;
      margin: 12px;
      flex-grow: 1;

      div:nth-child(2) {
        color: rgb(83, 100, 113);
      }
    }
    svg {
      display: inline-block;
    }
  }
`;

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

const Main = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 200dvh;
`;

const MessageMain = styled.div`
  box-sizing: border-box;
  width: 1050px;
`;
export default AfterLoginLayout;
