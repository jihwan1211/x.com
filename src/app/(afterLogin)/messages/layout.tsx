import { ReactNode } from "react";

import { ChatRoomContainer, Container } from "./page";
export default function MessageLayout({ children, messageList, chatSelect }: { children: ReactNode; messageList: ReactNode; chatSelect: ReactNode }) {
  return (
    <div>
      <Container>
        {/* {children} */}
        {messageList}
        <ChatRoomContainer>{chatSelect}</ChatRoomContainer>
      </Container>
    </div>
  );
}
