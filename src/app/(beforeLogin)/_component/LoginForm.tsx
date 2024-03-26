"use client";

import { useFormState } from "react-dom";
import styled from "styled-components";

import onSubmitLogin from "../_lib/login";

import { FormResult, ShowFormResultMessage } from "./SignupForm";

export default function LoginForm() {
  const [state, formAction] = useFormState(onSubmitLogin, null);
  return (
    <form action={formAction}>
      <InputWrapper>
        {/* <label></label> */}
        <Input id="id" name="id" type="text" placeholder="휴대폰 번호,이메일 주소 또는 사용자 아이디" autoComplete="off"></Input>
      </InputWrapper>
      <InputWrapper>
        {/* <label></label> */}
        <Input id="password" name="password" type="password" placeholder="휴대폰 번호,이메일 주소 또는 사용자 아이디" autoComplete="off"></Input>
      </InputWrapper>
      <NextBtn>로그인하기</NextBtn>
      <FormResult>{ShowFormResultMessage(state?.message)}</FormResult>
      <Button type="submit">비밀번호를 잊으셨나요?</Button>
      <Signup>
        계정이 없으신가요? <span>가입하기</span>
      </Signup>
    </form>
  );
}

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
