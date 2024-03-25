"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import styled from "styled-components";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

import Chat from "./Chat";
dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function SelectedChatRoom() {
  faker.seed(11123);
  const dummyData = {
    userId: faker.string.uuid(),
    userName: faker.internet.userName(),
    profileImage: faker.image.avatar(),
    Message: [
      { id: 123, message: "안녕", messageId: 1, createdAt: new Date() },
      { id: 123, message: "안녕", messageId: 2, createdAt: new Date() },
      { id: 123, message: "안녕1", messageId: 3, createdAt: new Date() },
      { id: 123, message: "안녕2", messageId: 24, createdAt: new Date() },
      { id: 123, message: "안녕3", messageId: 7, createdAt: new Date() },
      { id: 123, message: "안녕4", messageId: 5, createdAt: new Date() },
      { id: 345, message: "안녕", messageId: 8, createdAt: new Date() },
      { id: 345, message: "안녕1", messageId: 10, createdAt: new Date() },
      { id: 345, message: "안녕2", messageId: 12, createdAt: new Date() },
      { id: 345, message: "안녕3", messageId: 1232, createdAt: new Date() },
      { id: 345, message: "안녕4", messageId: 32232, createdAt: new Date() },
    ],
    chatId: faker.string.uuid(),
    registeredAt: "2024년 1월",
  };

  const router = useRouter();
  const onClickUser = () => {
    router.push(`/${dummyData.userName}`);
  };

  return (
    <Container>
      <Header>
        <h3>{dummyData.userName}</h3>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true" height="20px" fill="rgb(15, 20, 25)">
            <g>
              <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"></path>
            </g>
          </svg>
        </div>
      </Header>
      <Main>
        <UserInfo onClick={onClickUser}>
          <div>
            <Image src={dummyData.profileImage} alt="profile img" width={64} height={64}></Image>
          </div>
          <h4>{dummyData.userName}</h4>
          <h4>{dummyData.userId}</h4>
          <div>
            <h4>{dummyData.registeredAt}</h4> &nbsp; &nbsp; 1 팔로워
          </div>
        </UserInfo>
        <ChattingBox>
          {dummyData.Message.length > 0
            ? dummyData.Message.map((ele) => {
                if (ele.id === 345) {
                  return <Chat key={ele.messageId} isMe={ele.id === 345} message={ele.message}></Chat>;
                } else {
                  return <Chat key={ele.messageId} isMe={ele.id === 345} message={ele.message}></Chat>;
                }
              })
            : null}
        </ChattingBox>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  height: 100;
`;

const Header = styled.div`
  box-sizing: border-box;
  height: 53px;
  padding: 0 16px;

  display: flex;
  align-items: center;

  h3 {
    flex: 1;
    color: rgb(15, 20, 25);
    max-width: 100%;
    font-size: 20px;
    line-height: 24px;
  }

  & > div:nth-child(2) {
    width: 36px;
    height: 36px;
    margin-right: 0;
    margin-left: auto;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(15, 20, 25, 0.1);
    }
  }
`;

const Main = styled.section`
  box-sizing: border-box;
  padding: 0 16px;
  max-width: 600px;
`;

const UserInfo = styled.div`
    cursor:pointer;
  box-sizing:border-box;
  padding:20px 16px;
  margin-bottom:20px;
  width: 100%;
  height:275px;

  border-bottom: 1px solid rgb(239, 243, 244);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition:0.2s;
  &:hover{
    background-color: rgba(247, 249, 249, 1);
  }

  // 프로필 이미지
  & > div:nth-child(1) {
    cursor: pointer;
    img {
      border-radius: 50%;
    }
  }

  // 유저 닉네임
  & > h4:nth-child(2) {
    margin: 0;
  }

  // 유저 아이디
  & > h4:nth-child(3) {
    margin: 0;
    color: rgb(83, 100, 113);
    font-size:15px;
    font-weight:400;
  }

  // 가입 정보 및 팔로워
  & > div:nth-child(4) {
    display:flex;
    align-items:center;
    color: rgb(83, 100, 113);
    font-size:14px;
    font-weight:400;
    h4{
        font-size:14px;
    font-weight:400;
    }
`;

const ChattingBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyChat = styled.div``;

const YourChat = styled.div`
  box-sizing: border-box;
  padding: 12px 16px;
  margin-bottom: 12px;
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

  display: flex;
  justify-content: flex-start;
`;
