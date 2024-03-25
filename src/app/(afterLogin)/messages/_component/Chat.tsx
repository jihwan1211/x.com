"use client";

import styled from "styled-components";

type ContainerType = { $isMe: boolean };

export default function Chat({ isMe, message }: { isMe: boolean; message: string }) {
  //   return <ChatContainer isMe={isMe}>{isMe ? <ChatBoxStyle>{message}</ChatBoxStyle> : <ChatBoxStyle>{message}</ChatBoxStyle>}</ChatContainer>;
  return (
    <ChatContainer $isMe={isMe}>
      <ChatBoxStyle>{message}</ChatBoxStyle>
    </ChatContainer>
  );
}

const ChatContainer = styled.div<ContainerType>`
  box-sizing: border-box;
  padding-bottom: 12px;
  display: flex;
  justify-content: ${(props) => (props.$isMe ? `flex-end` : `flex-start`)};

  & > div {
    color: ${(props) => (props.$isMe ? "rgb(255, 255, 255)" : "rgb(15, 20, 25)")};
    background-color: ${(props) => (props.$isMe ? "rgba(29, 155, 240, 1)" : "rgba(247, 249, 249, 1)")};
    border-bottom-right-radius: ${(props) => (props.$isMe ? "4px" : null)};
    border-bottom-left-radius: ${(props) => (props.$isMe ? null : "4px")};
  }
`;

const ChatBoxStyle = styled.div`
  box-sizing: border-box;
  padding: 12px 16px;
  max-width: 100%;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  word-wrap: break-word;
  word-break: break-word;
  border-radius: 24px;
  border-color: rgb(207, 217, 222);

  transition: 0.2s;
`;

const MyChat = styled.div`
  box-sizing: border-box;
  padding: 12px 16px;
  max-width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgba(29, 155, 240, 1);
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  word-wrap: break-word;
  word-break: break-word;
  border-radius: 24px;
  border-color: rgb(207, 217, 222);

  transition: 0.2s;
  border-bottom-right-radius: 4px;
`;

const YourChat = styled.div`
  box-sizing: border-box;
  padding: 12px 16px;
  max-width: 100%;
  color: rgb(15, 20, 25);
  background-color: rgba(247, 249, 249, 1);
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  word-wrap: break-word;
  word-break: break-word;
  border-radius: 24px;
  border-color: rgb(207, 217, 222);

  transition: 0.2s;
  border-bottom-left-radius: 4px;
`;
