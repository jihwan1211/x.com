"use client";

import { useFormStatus, useFormState } from "react-dom";
import { ChangeEventHandler, useState, MouseEventHandler } from "react";

import styled from "styled-components";

import onSubmit from "@/app/(beforeLogin)/_lib/signup";

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
    case "no_image":
      return "프로필 사진을 등록하세요";
    case "user_exists":
      return "이미 가입한 사용자입니다.";
    case "error":
      return "에러가 발생했습니다. 다시 시도해주세요";
    default:
      return "정상처리되었습니다.";
  }
}

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

export default function SignupForm() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(onSubmit, null);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [alter, setAlter] = useState(false);
  // const [birthday, setBirthday] = useState(0);
  // const [birthMonth, setBirthMonth] = useState(0);
  // const [birthYear, setBirthYear] = useState(0);
  // const [dayList, setDayList] = useState(days);

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  // const onChangePhoneNumber: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setEmail(e.target.value);
  // };

  // const onClickAlterEmailPhone: MouseEventHandler<HTMLDivElement> = (e) => {
  //   setAlter(!alter);
  // };

  // const onChangeMonth: ChangeEventHandler<HTMLSelectElement> = (e) => {
  //   setBirthMonth(parseInt(e.target.value));
  //   const month = parseInt(e.target.value);

  //   if (month !== 0) {
  //     let lastDay = 0;
  //     if (birthYear === 0) {
  //       const date = new Date();
  //       lastDay = new Date(date.getFullYear(), month, 0).getDate();
  //     } else {
  //       lastDay = new Date(birthYear, birthMonth, 0).getDate();
  //     }
  //     const tempDayList = [];
  //     for (let i = 1; i <= lastDay; i++) {
  //       tempDayList.push(i);
  //     }
  //     setDayList(tempDayList);
  //   } else {
  //     setDayList(days);
  //   }
  // };

  // const onChangeDay: ChangeEventHandler<HTMLSelectElement> = (e) => {
  //   setBirthday(parseInt(e.target.value));
  // };

  // const onChangeYear: ChangeEventHandler<HTMLSelectElement> = (e) => {
  //   setBirthYear(parseInt(e.target.value));
  //   const year = parseInt(e.target.value);
  //   if (year !== 0 && birthMonth !== 0) {
  //     const lastDay = new Date(year, birthMonth, 0).getDate();
  //     const tempDayList = [];
  //     for (let i = 1; i <= lastDay; i++) {
  //       tempDayList.push(i);
  //     }
  //     setDayList(tempDayList);
  //   } else {
  //     setDayList(dayList);
  //   }
  // };

  return (
    <form action={formAction}>
      {/* <ModalBody> */}
      <InputWrapper>
        {/* <label></label> */}
        <Input id="nickname" name="nickname" value={name} type="text" onChange={onChangeName} placeholder="이름" required></Input>
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
      {/*
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
        */}
      <input id="image" name="image" type="file" accept="image/*"></input>
      <NextBtn type="submit" disabled={pending}>
        다음
      </NextBtn>
      <FormResult>{ShowFormResultMessage(state?.message)}</FormResult>
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

const AlterPhoneEmailContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: rgb(29, 155, 240);
  cursor: pointer;
`;

const AlterPhoneEmail = styled.div``;
