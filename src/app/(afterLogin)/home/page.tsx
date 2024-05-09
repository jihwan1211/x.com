import { Suspense } from "react";
import { auth } from "@/auth";
import { Container } from "./_component/styled";
import HomeTab from "./_component/HomeTab";
import HomeTabProvider from "./_component/HomeTabProvider";
import PostForm from "./_component/PostForm";
import Loading from "../_component/LoadingUI";
import PostDisplay from "./_component/PostDisplay";

export default async function Home() {
  const session = await auth();
  return (
    <Container>
      <HomeTabProvider>
        <HomeTab></HomeTab>
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <PostDisplay />
        </Suspense>
      </HomeTabProvider>
    </Container>
  );
}
