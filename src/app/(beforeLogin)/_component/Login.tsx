"use client";

import styled from "styled-components";
import { ChangeEventHandler, useState, MouseEventHandler } from "react";
import { useRouter, redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { useSession } from "next-auth/react";

import onSubmitLogin from "../_lib/login";
import { FormResult } from "./Signup";
import { ShowFormResultMessage } from "./Signup";

import Image from "next/image";
import xcom from "../../../../public/xcom.png";
import 닫기버튼 from "../../../../public/닫기버튼.png";
import 애플 from "../../../../public/애플2.png";

export default function Login() {
  const router = useRouter();

  const { data, status } = useSession();
  if (status === "authenticated") redirect("/home");
  else console.log("plz login");

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [state, formAction] = useFormState(onSubmitLogin, null);

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  // 닫기 버튼

  const onClickCloseBtn: MouseEventHandler<HTMLDivElement> = (e) => {
    router.back();
  };

  // 다음 버튼 disabled
  // let isNextDisabled: boolean = id.length !== 0 && (phoneNumber.length !== 0 || email.length !== 0) && birthday !== 0 && birthMonth !== 0 && birthYear !== 0;

  return (
    <ModalBackground>
      <Container>
        <ModalHeader>
          <HeaderLeft>
            <CloseBtn onClick={onClickCloseBtn}>
              <Image src={닫기버튼} alt="close-btn" width={17} height={17}></Image>
            </CloseBtn>
          </HeaderLeft>
          <HeaderMid>
            <Image src={xcom} alt="logo" width={53} height={53}></Image>
          </HeaderMid>
          <HeaderRight></HeaderRight>
        </ModalHeader>
        <ModalBody>
          <h1>X 가입하기</h1>
          <GoogleLogin>
            <BrandLogo>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
            </BrandLogo>
            {/* <BrandLogo src={구글} alt="google logo" width={20} height={20}></BrandLogo> */}
            <span>Google 계정으로 로그인</span>
          </GoogleLogin>
          <AppleLogin>
            <Image src={애플} alt="apple logo" width={33} height={30}></Image>
            <span>Apple로 로그인하기</span>
          </AppleLogin>
          <BoundaryContainer>
            <Divider> </Divider>
            <Span>또는</Span>
            <Divider></Divider>
          </BoundaryContainer>
          <form action={formAction}>
            <InputWrapper>
              {/* <label></label> */}
              <Input id="id" name="id" type="text" onChange={onChangeId} placeholder="휴대폰 번호,이메일 주소 또는 사용자 아이디"></Input>
            </InputWrapper>
            <InputWrapper>
              {/* <label></label> */}
              <Input id="password" name="password" type="password" onChange={onChangePassword} placeholder="휴대폰 번호,이메일 주소 또는 사용자 아이디"></Input>
            </InputWrapper>
            <NextBtn>로그인하기</NextBtn>
            <FormResult>{ShowFormResultMessage(state?.message)}</FormResult>
            <Button type="submit">비밀번호를 잊으셨나요?</Button>
            <Signup>
              계정이 없으신가요? <span>가입하기</span>
            </Signup>
          </form>
        </ModalBody>
      </Container>
    </ModalBackground>
  );
}

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;

  max-width: 80vw;
  min-width: 600px;
  height: 650px;
  max-height: 90vh;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  /* flex-shrink: 1; */
`;

const ModalHeader = styled.div`
  height: 53px;

  display: flex;
  justify-content: center;
  padding: 0 16px;
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-shrink: 1;
  flex-basis: 50%;
  flex-grow: 1;
`;

const HeaderMid = styled.div`
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const HeaderRight = styled.div`
  flex-shrink: 1;
  flex-basis: 50%;
  align-self: stretch;
  align-items: flex-end;
  flex-grow: 1;
`;

const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: rgba(207, 217, 222, 0.4);
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* justify-content: space-between; */
  /* align-items:space-between */

  margin: 0 118px;
  padding: 0 32px 48px 32px;
`;

const Button = styled.button`
  border: 1px solid rgb(207, 217, 222);
  border-radius: 24px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 12px;
  margin: 12px 0;

  /* width: 300px; */
  width: 100%;
  max-width: 400px;

  height: 36px;

  cursor: pointer;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;

const BrandLogo = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const GoogleLogin = styled(Button)`
  font-size: 14px;

  &:hover {
    background-color: rgba(185, 202, 211, 0.5);
  }
`;

const AppleLogin = styled(Button)`
  font-size: 14px;
  font-weight: 700;
`;

const BoundaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  white-space: nowrap;
  flex-basis: auto;

  margin: 0 4px;
`;

const Divider = styled.div`
  /* display: flex; */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;

  height: 1px;

  background-color: rgb(207, 217, 222);
  margin: 8px 0;
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 12px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  margin: 0;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 4px;
  font-size: 15px;
`;

const NextBtn = styled(Button)`
  color: white;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: rgba(39, 44, 48, 1);
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const Signup = styled.div`
  color: rgb(83, 100, 113);
  cursor: pointer;
  margin-top: 40px;
  & > span {
    color: rgb(29, 155, 240);
  }
`;
