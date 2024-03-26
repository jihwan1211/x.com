import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { Container, LeftDiv, RightDiv, SignupBtn, LoginBtn } from "./HomeStyled";

import xcom from "../../../../public/xcom.png";

export default async function Home() {
  const session = await auth();

  // redirect를 사용해도 화면이 그려지고 이동
  if (session) redirect("/home");
  else console.log("plz login");
  return (
    <Container>
      <LeftDiv>
        <Image src={xcom} alt="logo"></Image>
      </LeftDiv>
      <RightDiv>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <SignupBtn href="i/flow/signup">계정 만들기</SignupBtn>
        <LoginBtn href="i/flow/login">로그인</LoginBtn>
      </RightDiv>
    </Container>
  );
}
