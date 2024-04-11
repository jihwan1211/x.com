"use client";

import { useState, useEffect } from "react";
import { useRouter, useSelectedLayoutSegments, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

import { PostWriter } from "../../_component/Post";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type isSelectedChat = {
  $isSelected: boolean;
};

type Prop = {
  seed: number;
};
export default function Room({ seed }: Prop) {
  faker.seed(seed);
  const dummyData = {
    userId: faker.string.uuid(),
    userName: faker.internet.userName(),
    profileImage: faker.image.avatar(),
    Message: [],
    chatId: faker.string.uuid(),
  };

  // 채팅방 클릭 시 배경색과 오른쪽 경계선 스타일링 하기 위해서
  const [isSelected, setIsSelected] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const pathnameArr: string[] = pathname.split("/");
    if (pathnameArr[2] === dummyData.chatId) setIsSelected(true);
    else setIsSelected(false);
  }, [pathname]);

  const router = useRouter();
  const onClickMessage = () => {
    router.push(`/messages/${seed}`);
  };
  return (
    <Container $isSelected={isSelected} onClickCapture={onClickMessage}>
      <Image src={dummyData.profileImage} alt="profile image" width={40} height={40}></Image>
      <RightContainer>
        <PostWriter>
          <Link href={`/${dummyData.userId}`}>
            <div>{dummyData.userName}</div>
            {/* <div>{DummyData.writerId}</div> */}
          </Link>
          <div>@surrrrffffing</div>
          <div>.</div>
          <div>{dayjs(new Date()).fromNow(true)}</div>
        </PostWriter>
        <MessageContainer>messagessjdkn</MessageContainer>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div<isSelectedChat>`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 74px;
  padding: 16px;

  display: flex;
  transition: 0.2s;

  border-right: ${(props) => (props.$isSelected ? `3px solid rgb(29, 155, 240);` : null)};
  background-color: ${(props) => (props.$isSelected ? "rgb(247, 249, 249)" : null)};

  &:hover {
    background-color: rgba(247, 249, 249, 1);
  }
  & > img {
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  /* display: flex; */
`;

const MessageContainer = styled.div`
  color: rgb(83, 100, 113);
`;
