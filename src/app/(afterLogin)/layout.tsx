import Link from "next/link";
import React from "react";
import { auth } from "@/auth";

import RQProvider from "./_component/RQProvider";

import Nav from "./_component/nav";
import NavProfile from "./_component/nav-profile";
import LayoutRightSection from "./_component/right-seciton";
import { Container, Header, FixedHeader, MainLogo } from "./layout-css";

const AfterLoginLayout = async ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  const session = await auth();
  console.log("ajskndkjand", session);
  const path = {};
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
        <LayoutRightSection me={session}>{children}</LayoutRightSection>
        {modal}
      </RQProvider>
    </Container>
  );
};

export default AfterLoginLayout;
