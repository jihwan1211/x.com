"use client";

import Link from "next/link";

import styled from "styled-components";

export default function SelectChat() {
  return (
    <Container>
      <h2>쪽지 선택하기</h2>
      <h4>기존 대화에서 선택하거나 새로운 대화를 만들거나 계속 탐색합니다.</h4>
      <Link href={"/messages/compose"}>
        <div>새 쪽지</div>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  h2 {
    color: rgb(15, 20, 25);
    line-height: 36px;
    font-size: 31px;
    font-weight: 800;
  }
  h4 {
    color: rgb(83, 100, 113);
    line-height: 20px;
    font-size: 15px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    background-color: rgb(29, 155, 240);
    min-width: 52px;
    min-height: 52px;
    padding: 0 32px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: rgb(255, 255, 255);
  }
`;
