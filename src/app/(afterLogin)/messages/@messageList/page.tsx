"use client";
import Link from "next/link";

import styled from "styled-components";

import Room from "../_component/Room";

export default function MessageList() {
  return (
    <MessageListContainer>
      <MessageHeader>
        <h3>쪽지</h3>
        <Link href={"/messages/settings"}>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true" height="20px" fill="rgb(15, 20, 25)">
              <g>
                <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
              </g>
            </svg>
          </div>
        </Link>
      </MessageHeader>
      <div>
        <Room></Room>
        <Room></Room>
        <Room></Room>
        <Room></Room>
      </div>
    </MessageListContainer>
  );
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

  & > h3 {
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
