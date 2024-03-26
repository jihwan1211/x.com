"use client";
import { MouseEventHandler } from "react";
import { useRouter, redirect } from "next/navigation";
import Image from "next/image";

import styled from "styled-components";

import 닫기버튼 from "../../../../public/닫기버튼.png";

export default function CloseButton() {
  const router = useRouter();
  // 닫기 버튼
  const onClickCloseBtn: MouseEventHandler<HTMLDivElement> = (e) => {
    router.back();
  };
  return (
    <CloseBtn onClick={onClickCloseBtn}>
      <Image src={닫기버튼} alt="close-btn" width={17} height={17}></Image>
    </CloseBtn>
  );
}

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
