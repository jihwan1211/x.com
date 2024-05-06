"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect } from "react";
import styled from "styled-components";
import useModalStore from "@/store/modal";

export default function CloseButton() {
  const router = useRouter();
  const modalStore = useModalStore();
  const onClickCloseBtn: MouseEventHandler<HTMLButtonElement> = () => {
    // 뒷배경 스크롤 원상복구
    document.body.style.overflow = "auto";
    modalStore.reset();
    router.back();
  };

  // 뒷배경 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <CloseBtnWrapper>
      <button onClick={onClickCloseBtn}>
        <svg viewBox="0 0 24 24" aria-hidden="true" height="20px">
          <g>
            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
          </g>
        </svg>
      </button>
    </CloseBtnWrapper>
  );
}

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
