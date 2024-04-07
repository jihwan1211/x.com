"use client";

import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useRef, useState } from "react";
import Image from "next/image";
import 이미지 from "../../../../../../public/구글2.png";

interface Button {
  $input: string;
  disabled: boolean;
}

export default function ComposeTweetModal() {
  const [input, setInput] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);

  // 뒷배경 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onClickImgBtn = () => {
    imageRef.current?.click();
  };

  const onChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setInput(e.target.value);
  };

  const router = useRouter();
  const onClickCloseBtn: MouseEventHandler<HTMLButtonElement> = () => {
    // 뒷배경 스크롤 원상복구
    document.body.style.overflow = "auto";
    // router.push("/explore");

    router.back();
    // router.refresh();
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // 뒷배경 스크롤 원상복구
    document.body.style.overflow = "auto";
    console.log("fomr!");
  };
  return (
    <ModalBackground>
      <Container>
        <CloseBtnWrapper>
          <button onClick={onClickCloseBtn}>
            <svg viewBox="0 0 24 24" aria-hidden="true" height="20px">
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </CloseBtnWrapper>
        <Main>
          <Form onSubmit={onSubmit}>
            <FormContentsTyping>
              <Profile>
                <div>
                  <Image src={이미지} alt="프로필 이미지"></Image>
                </div>
              </Profile>
              <textarea placeholder="무슨 일이 일어나고 있나요?" value={input} onChange={onChangeTextarea}></textarea>
            </FormContentsTyping>
            <SubmitBtnOptionWrapper>
              <ImgBtn type="button" onClick={onClickImgBtn}>
                <input type="file" name="imageFiles" multiple hidden ref={imageRef} />
                <svg viewBox="0 0 24 24" aria-hidden="true" width="20px">
                  <g>
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </ImgBtn>
              <SubmitBtn type="submit" $input={input} disabled={input.length === 0}>
                게시하기
              </SubmitBtn>
            </SubmitBtnOptionWrapper>
          </Form>
        </Main>
      </Container>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  height: 100dvh;
  left: 0;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;

  max-width: 80vw;
  min-width: 600px;
  height: 278px;
  max-height: 90vh;
  min-height: 400px;

  display: flex;
  flex-direction: column;
`;

const CloseBtnWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 16px;
  height: 53px;

  display: flex;
  align-items: center;
  & > button {
    box-sizing: border-box;
    padding: 0;
    height: 36px;
    width: 36px;
    border-radius: 9999px;

    border: none;
    background-color: transparent;

    transition: 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: rgb(15, 20, 25);
    }

    &:hover {
      background-color: rgba(15, 20, 25, 0.1);
    }
  }
`;

const Main = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  box-sizing: border-box;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

const FormContentsTyping = styled.div`
  flex-grow: 1;
  display: flex;

  & > textarea {
    flex-grow: 1;
    border: none;
    resize: none;
    background-color: transparent;

    display: flex;
    align-items: center;
  }
`;

const Profile = styled.div`
  box-sizing: border-box;
  margin-right: 8px;
  padding-top: 12px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  & > div {
    cursor: pointer;
    /* width: 40px; */
    & > img {
      width: 40px;
      height: 40px;
    }
  }
`;

const SubmitBtnOptionWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 8px;
  height: 56px;
  border-top: 1px solid rgb(239, 243, 244);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgBtn = styled.button`
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;
  border-radius: 9999px;
  transition: 0.2s;
  cursor: pointer;
  & > svg {
    fill: rgb(29, 155, 240);
  }

  &:hover {
    background-color: rgba(29, 155, 240, 0.2);
  }
`;

const SubmitBtn = styled.button<Button>`
  box-sizing: border-box;
  margin-top: 8px;
  margin-left: 12px;
  padding: 0 8px;
  background-color: rgb(29, 155, 240);
  height: 100%;
  width: 100px;
  min-width: 36px;
  min-height: 36px;
  transition: 0.2s;

  opacity: ${(props) => (props.$input.length > 1 ? 1 : 0.5)};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  border: none;
  color: white;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;
