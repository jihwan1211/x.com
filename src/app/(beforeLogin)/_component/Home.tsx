"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import xcom from "../../../../public/xcom.png";

export default function Home() {
  const { data, status } = useSession();

  // redirect를 사용해도 화면이 그려지고 이동
  if (status === "authenticated") redirect("/home");
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
        <LoginBtn href="login">로그인</LoginBtn>
      </RightDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100dvh;
  width: 100dvw;
  background-color: #ffffff;
`;

const RightDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LeftDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 300px;

  text-decoration: none;

  border-radius: 9999px;
  cursor: pointer;
`;

const SignupBtn = styled(Btn)`
  background-color: rgb(29, 155, 240);
  color: white;
  border: 1px solid rgb(255, 255, 255);
  margin-bottom: 8px;

  &:hover {
    background-color: rgb(26, 140, 216);
  }
`;

const LoginBtn = styled(Btn)`
  background-color: rgba(0, 0, 0, 0);
  color: rgb(29, 155, 240);
  border: 1px solid rgb(207, 217, 222);

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;
