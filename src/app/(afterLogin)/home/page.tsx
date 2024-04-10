import { Suspense } from "react";

import { Container } from "./_component/styled";
import HomeTab from "./_component/HomeTab";
import HomeTabProvider from "./_component/HomeTabProvider";
import PostForm from "./_component/PostForm";

import SuspenseDecider from "./_component/SuspenseDecider";

export default function Home() {
  return (
    <Container>
      <HomeTabProvider>
        <HomeTab></HomeTab>
        <PostForm />
        <Suspense fallback={<p>snkasjndfasnksandfknsadfnassakjnsk</p>}>
          {/* @ts-expect-error Server Component */}
          <SuspenseDecider />
        </Suspense>
      </HomeTabProvider>
    </Container>
  );
}
