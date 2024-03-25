"use client";

import styled from "styled-components";
import { ChangeEventHandler, useState, MouseEventHandler } from "react";
import { useRouter, redirect } from "next/navigation";
import { useFormStatus, useFormState } from "react-dom";
import { useSession } from "next-auth/react";

import onSubmit from "@/app/(beforeLogin)/_lib/signup";

import Image from "next/image";
import xcom from "../../../../public/xcom.png";
import 닫기버튼 from "../../../../public/닫기버튼.png";

const years: number[] = [];
for (let i = 2024; i >= 1940; i--) {
  years.push(i);
}

const month: number[] = [];
for (let i = 1; i <= 12; i++) {
  month.push(i);
}

const days: number[] = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

export function ShowFormResultMessage(message: string | null | undefined) {
  if (!message) return "";
  switch (message) {
    case "no_id":
      return "아이디를 다시 입력하세요";
    case "no_name":
      return "이름을 다시 입력하세요";
    case "no_password":
      return "비밀번호를 다시 입력하세요";
    case "wrong_birthday":
      return "생년월일을 다시 입력하세요";
    case "user_exists":
      return "이미 가입한 사용자입니다.";
    case "error":
      return "에러가 발생했습니다. 다시 시도해주세요";
    default:
      return "정상처리되었습니다.";
  }
}

export default function Signup() {
  const router = useRouter();
  const { data, status } = useSession();
  if (status === "authenticated") redirect("/home");
  else console.log("plz login");

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [alter, setAlter] = useState(false);
  const [birthday, setBirthday] = useState(0);
  const [birthMonth, setBirthMonth] = useState(0);
  const [birthYear, setBirthYear] = useState(0);
  const [dayList, setDayList] = useState(days);

  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(onSubmit, null);

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  const onChangePhoneNumber: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const onClickAlterEmailPhone: MouseEventHandler<HTMLDivElement> = (e) => {
    setAlter(!alter);
  };

  const onChangeMonth: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setBirthMonth(parseInt(e.target.value));
    const month = parseInt(e.target.value);

    if (month !== 0) {
      let lastDay = 0;
      if (birthYear === 0) {
        const date = new Date();
        lastDay = new Date(date.getFullYear(), month, 0).getDate();
      } else {
        lastDay = new Date(birthYear, birthMonth, 0).getDate();
      }
      const tempDayList = [];
      for (let i = 1; i <= lastDay; i++) {
        tempDayList.push(i);
      }
      setDayList(tempDayList);
    } else {
      setDayList(days);
    }
  };

  const onChangeDay: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setBirthday(parseInt(e.target.value));
  };

  const onChangeYear: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setBirthYear(parseInt(e.target.value));
    const year = parseInt(e.target.value);
    if (year !== 0 && birthMonth !== 0) {
      const lastDay = new Date(year, birthMonth, 0).getDate();
      const tempDayList = [];
      for (let i = 1; i <= lastDay; i++) {
        tempDayList.push(i);
      }
      setDayList(tempDayList);
    } else {
      setDayList(dayList);
    }
  };

  const onClickCloseBtn: MouseEventHandler<HTMLDivElement> = (e) => {
    router.back();
  };

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
          <h1>계정을 생성하세요</h1>
          <form action={formAction}>
            {/* <ModalBody> */}
            <InputWrapper>
              {/* <label></label> */}
              <Input id="name" name="name" value={name} type="text" onChange={onChangeName} placeholder="이름" required></Input>
            </InputWrapper>
            <InputWrapper>
              <Input id="id" name="id" value={id} type="text" onChange={onChangeId} placeholder="아이디" required></Input>
            </InputWrapper>
            <InputWrapper>
              <Input id="password" value={password} name="password" type="password" onChange={onChangePassword} placeholder="비밀번호" required></Input>
            </InputWrapper>
            {/* <InputWrapper>
               <label></label> 
              {!alter ? (
                <Input id="phoneNumber" type="text" onChange={onChangePhoneNumber} placeholder="휴대폰"></Input>
              ) : (
                <Input id="email" type="email" onChange={onChangeEmail} placeholder="이메일"></Input>
              )}
            </InputWrapper>
            <AlterPhoneEmailContainer onClick={onClickAlterEmailPhone}>대신 {alter ? "휴대폰" : "이메일"} 사용하기</AlterPhoneEmailContainer> */}

            <div>
              <div>생년월일</div>
              <Info>이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관없이 나의 연령을 확인하세요.</Info>
            </div>
            <SelectContainer>
              <BirthMonthSelect name="month" onChange={onChangeMonth} required>
                <option value={0}>월</option>
                {month.map((e: number) => {
                  return <option key={e}>{e}</option>;
                })}
              </BirthMonthSelect>
              <BirthDaySelect name="day" onChange={onChangeDay} required>
                <option value={0}>일</option>
                {dayList.map((e) => {
                  return <option key={e}>{e}</option>;
                })}
              </BirthDaySelect>
              <BirthYearSelect name="year" onChange={onChangeYear} required>
                <option value={0}>년</option>
                {years.map((e: number) => {
                  return <option key={e}>{e}</option>;
                })}
              </BirthYearSelect>
            </SelectContainer>

            <NextBtn type="submit" disabled={pending}>
              다음
            </NextBtn>
          </form>
          <FormResult>{ShowFormResultMessage(state?.message)}</FormResult>
        </ModalBody>
      </Container>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
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

const Container = styled.div`
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
  width: 100%;
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* justify-content: space-between; */
  /* align-items:space-between */

  padding: 0 80px;
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

const AlterPhoneEmailContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: rgb(29, 155, 240);
  cursor: pointer;
`;

const AlterPhoneEmail = styled.div``;

const Info = styled.div`
  color: rgb(83, 100, 113);
  word-wrap: break-word;
  font-size: 14px;
  font-weight: 400;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 16px 0;
`;

const Select = styled.select`
  /* width: 100%; */
  height: 56px;
  border-radius: 4px;
  border: 1px solid rgb(207, 217, 222);
`;

const BirthMonthSelect = styled(Select)`
  flex-grow: 2;
`;

const BirthDaySelect = styled(Select)`
  flex-grow: 1;
  margin: 0 12px;
`;

const BirthYearSelect = styled(Select)`
  flex-grow: 1;
`;

const NextBtn = styled.button`
  width: 100%;
  color: white;
  background-color: black;
  border-radius: 24px;
  height: 56px;
  margin-top: 15px;
  cursor: pointer;
`;

export const FormResult = styled.div`
  color: red;
  font-size: 15px;
  font-weight: 600;
  margin-top: 15px;
`;
