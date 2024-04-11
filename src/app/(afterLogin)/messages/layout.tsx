import { ReactNode } from "react";

import { MessageMain, ChatRoomContainer, Container } from "./style";

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
