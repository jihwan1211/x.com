import { Suspense } from "react";
import { auth } from "@/auth";
import { Container } from "./_component/styled";
import HomeTab from "./_component/HomeTab";
import HomeTabProvider from "./_component/HomeTabProvider";
import PostForm from "./_component/PostForm";
import SuspenseDecider from "./_component/SuspenseDecider";
import Loading from "../_component/LoadingUI";

export default async function Home() {
  const session = await auth();
  return (
    <Container>
      <HomeTabProvider>
        <HomeTab></HomeTab>
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Server Component */}
          <SuspenseDecider />
        </Suspense>
      </HomeTabProvider>
    </Container>
  );
}
