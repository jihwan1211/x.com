import { ReactNode } from "react";
import type { Metadata } from "next";
import { MessageMain, ChatRoomContainer, Container } from "./style";

export const metadata: Metadata = {
  title: "쪽지 / X",
  description: "다양한 사람들과 대화해보세요!",
};

export default function MessageLayout({ children, chatSelect }: { children: ReactNode; chatSelect: ReactNode }) {
  return (
    <MessageMain>
      <Container>
        {children}
        <ChatRoomContainer>{chatSelect}</ChatRoomContainer>
      </Container>
    </MessageMain>
  );
}
