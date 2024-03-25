"use client";

import { MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import 이미지 from "../../../../public/구글2.png";
import PostImages from "./PostImages";

import styled from "styled-components";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const onClickLikeBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    setLike(!like);
  };

  const onClickBookmarkBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    setBookmark(!bookmark);
  };

  const router = useRouter();
  const onClickArticle = () => {
    router.push(`/${DummyData.writer}/status/${1234}`);
  };

  faker.seed(111123223);
  const DummyData = {
    userId: faker.number.int({ min: 10, max: 10000000000 }),
    writer: "jihwan",
    writerId: "surrrrrffffing",
    content: "sanasfkandfkjnasdfkjnakjfnkjan",
    profileImage: "",
    contentImages: [
      {
        id: faker.number.int({ min: 10, max: 10000000000 }),
        url: faker.image.urlLoremFlickr(),
      },
      {
        id: faker.number.int({ min: 10, max: 10000000000 }),
        url: faker.image.urlLoremFlickr(),
      },
      {
        id: faker.number.int({ min: 10, max: 10000000000 }),
        url: faker.image.urlLoremFlickr(),
      },
      {
        id: faker.number.int({ min: 10, max: 10000000000 }),
        url: faker.image.urlLoremFlickr(),
      },
    ],
    comments: ["abc", "너무 좋아요~"],
    retweet: "3.3만",
    likes: "2.6만",
    watched: "86만",
  };

  return (
    <Container>
      <Article onClickCapture={onClickArticle}>
        <Profile>
          <div>
            <Link href={`/${DummyData.writerId}`} style={{ textDecoration: "none" }}>
              <Image src={이미지} alt="profile img"></Image>
              <div></div>
            </Link>
          </div>
        </Profile>

        <Main>
          <PostWriter>
            <Link href={`/${DummyData.writerId}`}>
              <div>{DummyData.writer}</div>
              {/* <div>{DummyData.writerId}</div> */}
            </Link>
            <div>@surrrrffffing</div>
            <div>.</div>
            <div>{dayjs(new Date()).fromNow(true)}</div>
          </PostWriter>
          <PostContent>
            <div>{DummyData.content}</div>
            <PostImages post={DummyData}></PostImages>
          </PostContent>

          <PostOptions>
            <CommentBtn href="/">
              <div>
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
                  <g>
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </g>
                </svg>
              </div>
              <div>{DummyData.comments.length}</div>
            </CommentBtn>
            <RetweetBtn href="/">
              <div>
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
                  <g>
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </g>
                </svg>
              </div>
              <div>{DummyData.retweet}</div>
            </RetweetBtn>
            <LikeBtn onClick={onClickLikeBtn}>
              <div>
                {like ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
                    <g>
                      <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
                    <g>
                      <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                    </g>
                  </svg>
                )}
              </div>
              <div>{DummyData.likes}</div>
            </LikeBtn>
            <HitsBtn href="/">
              <div>
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
                  <g>
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </g>
                </svg>
              </div>
              <div>{DummyData.watched}</div>
            </HitsBtn>
            <EtcBtn onClick={onClickBookmarkBtn}>
              <div>
                {bookmark ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true" height="1.25em">
                    <g>
                      <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z" style={{ fill: "rgb(29, 155, 240)" }}></path>
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true" height="1.25em">
                    <g>
                      <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                    </g>
                  </svg>
                )}
              </div>
            </EtcBtn>
            <EtcBtn>
              <div>
                <svg viewBox="0 0 24 24" aria-hidden="true" height="1.25em">
                  <g>
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                  </g>
                </svg>
              </div>
            </EtcBtn>
          </PostOptions>
        </Main>
      </Article>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  /* height: 100dvh; */
  padding: 0 16px;

  border-top: 1px solid rgb(239, 243, 244);

  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Article = styled.article`
  display: flex;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 40px;
  padding-top: 12px;
  margin-right: 8px;

  & > div {
    position: relative;
    box-sizing: border-box;
    background-color: transparent;

    flex-basis: 40px;
    height: 40px;

    &:hover {
      div {
        background-color: rgba(255, 255, 255, 0.09);
      }
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    div {
      top: 0;
      position: absolute;
      box-sizing: border-box;
      background-color: transparent;
      border-radius: 50%;

      width: 40px;
      height: 40px;
    }
  }
`;

const Main = styled.div`
  flex-grow: 1;

  background-color: transparent;

  box-sizing: border-box;
  margin: 12px;

  display: flex;
  flex-direction: column;
`;

export const PostWriter = styled.div`
  height: 20px;

  display: flex;
  color: rgb(83, 100, 113);
  cursor: pointer;
  a {
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid black;
    }

    div {
      color: rgb(15, 20, 25);
      font-weight: 700;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
  }

  & > div:nth-child(2) {
    padding: 0 4px;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    color: rgb(15, 20, 25);
    line-height: 20px;
    word-wrap: break-word;
    min-width: 0px;
    font-size: 15px;
    font-weight: 400;
  }

  /* & > div:nth-child(2) {
    margin-top: 12px;
    flex-grow: 1;
    border: 1px solid rgb(239, 243, 244);
    border-radius: 24px;
    a {
      img {
        border-radius: 24px;
        width: 100%;
        height: 100%;
      }
    }
  } */
`;

export const PostOptions = styled.div`
  box-sizing: border-box;
  height: 32px;
  margin-top: 4px;

  display: flex;

  & > a,
  & > button {
    text-decoration: none;

    display: flex;
    justify-content: start;
    align-items: center;
    color: rgb(83, 100, 113);
    cursor: pointer;
    background-color: transparent;

    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34.75px;
      height: 34.75px;
      background-color: transparent;
      border-radius: 9999px;
      transition: 0.2s;
    }

    svg {
      fill: rgb(83, 100, 113);
    }
  }
`;

export const CommentBtn = styled(Link)`
  color: rgba(29, 155, 240);
  flex-grow: 1;
  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(29, 155, 240, 0.2);
      svg {
        fill: rgba(29, 155, 240, 1);
      }
    }
  }

  &:hover {
    div:nth-child(2) {
      color: rgba(29, 155, 240, 1);
    }
  }
`;

export const RetweetBtn = styled(Link)`
  color: rgba(0, 186, 124);
  flex-grow: 1;
  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(0, 186, 124, 0.2);
      svg {
        fill: rgba(0, 186, 124);
      }
    }
  }

  &:hover {
    div:nth-child(2) {
      color: rgba(0, 186, 124);
    }
  }
`;

export const LikeBtn = styled.button`
  border: 0;
  flex-grow: 1;
  color: rgba(249, 24, 128);

  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(249, 24, 128, 0.2);
      svg {
        fill: rgba(249, 24, 128);
      }
    }
  }

  &:hover {
    div:nth-child(2) {
      color: rgba(249, 24, 128);
    }
  }
`;

export const HitsBtn = styled(Link)`
  color: rgba(29, 155, 240);
  flex-grow: 1;
  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(29, 155, 240, 0.2);
      svg {
        fill: rgba(29, 155, 240, 1);
      }
    }
  }

  &:hover {
    div:nth-child(2) {
      color: rgba(29, 155, 240, 1);
    }
  }
`;

const EtcBtn = styled.button`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  /* width: 34.75px; */
  /* height: 34.75px; */

  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(29, 155, 240, 0.2);
      svg {
        fill: rgba(29, 155, 240, 1);
      }
    }
  }
`;
