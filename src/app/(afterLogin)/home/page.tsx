import { auth } from "@/auth";
import { useEffect } from "react";

import { Container } from "./_component/styled";
import HomeTab from "./_component/HomeTab";
import HomeTabProvider from "./_component/HomeTabProvider";
import Post from "../_component/Post";
import PostForm from "./_component/PostForm";

export default async function Home() {
  const user = await auth();
  // console.log("user : ", user);
  return (
    <Container>
      <HomeTabProvider>
        <HomeTab></HomeTab>
        <PostForm></PostForm>
        <div></div>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </HomeTabProvider>
    </Container>
  );
}
