import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import { Suspense } from "react";

import RQProvider from "./_component/RQProvider";

import Nav from "./_component/nav";
import NavProfile from "./_component/nav-profile";
import { Container, Header, FixedHeader, MainLogo, RightSection, RightSectionInner, Main, Right } from "./layout-css";
import MainSearchBar from "./_component/MainSearchBar";
import SearchFilter from "./search/_component/SearchFilter";
import TrendsForYou from "./_component/TrendsForYou";
import WhoToFollow from "./_component/WhoToFollow";
import Loading from "./_component/LoadingUI";

const AfterLoginLayout = async ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <Container>
      <RQProvider>
        <Header>
          <FixedHeader>
            <Link href={session?.user ? "/home" : "/"}>
              <MainLogo>
                <svg viewBox="0 0 24 24" aria-hidden="true" width="20rem" height="2.5rem">
                  <g>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </g>
                </svg>
              </MainLogo>
            </Link>
            <Nav me={session} />
            <NavProfile me={session} />
          </FixedHeader>
        </Header>
        <RightSection>
          <RightSectionInner>
            <Main>{children}</Main>
            <Right>
              <MainSearchBar />
              <SearchFilter />
              <Suspense fallback={<Loading />}>
                <TrendsForYou me={session} />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <WhoToFollow me={session} />
              </Suspense>
            </Right>
          </RightSectionInner>
        </RightSection>
        {modal}
      </RQProvider>
    </Container>
  );
};

export default AfterLoginLayout;
