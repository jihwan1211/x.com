"use client";

import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

import Room from "./_component/Room";
import ChatPage from "./@chatSelect/page";
import SelectChat from "./_component/SelectChat";

export default function Message() {
  return null;
  // <Container>

  // <ChatRoomContainer>
  //   <SelectChat></SelectChat>
  // </ChatRoomContainer>
  //{/* </Container> */}
}

export const Container = styled.div`
  box-sizing: border-box;
  flex: 1;
  width: 990px;
  display: flex;
`;

const MessageListContainer = styled.div`
  box-sizing: border-box;
  width: 390px;
  max-width: 600px;
  height: 100dvh;
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
`;

const MessageHeader = styled.div`
  box-sizing: border-box;
  height: 53px;
  padding: 0 16px;
  display: flex;

  & > h2 {
    flex: 1;
    color: rgb(15, 20, 25);
    max-width: 100%;
    font-size: 20px;
    line-height: 24px;
  }

  & > a {
    cursor: pointer;
    margin-left: auto;
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      & > div {
        background-color: rgba(15, 20, 25, 0.1);
      }
    }

    & > div {
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
`;

export const ChatRoomContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  border-right: 1px solid rgb(239, 243, 244);
`;
