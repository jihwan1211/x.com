"use client";

import { useState } from "react";
import styled from "styled-components";

import BackBtn from "@/app/(afterLogin)/_component/BackBtn";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "../../_component/CommentForm";

export default function StatusPage() {
  return (
    <Container>
      <div>
        <Nav>
          <BackBtn></BackBtn>
          <div>게시하기</div>
        </Nav>
      </div>
      <Main>
        <div>
          <Post></Post>
          <CommentForm></CommentForm>
        </div>
        <ReplyContainer>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </ReplyContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);

  height: 100dvh;

  & > div:nth-child(1) {
    width: 596px;
    height: 53px;
    position: relative;
  }
`;

const Nav = styled.div`
  box-sizing: border-box;
  padding: 0 16px;

  height: inherit;
  width: inherit;
  position: fixed;

  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  & > div:nth-child(2) {
    box-sizing: border-box;
    margin-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: rgb(15, 20, 25);
    max-width: 100%;
    min-width: 0px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  /* & > div:nth-child(1) {
    border-bottom: 1px solid rgb(239, 243, 244);
  } */
`;

const ReplyContainer = styled.div``;
