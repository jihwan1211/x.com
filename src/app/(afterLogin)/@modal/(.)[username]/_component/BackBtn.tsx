"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  const onClickBackBtn = () => {
    document.body.style.overflow = "auto";
    router.back();
  };
  return (
    <Container onClick={onClickBackBtn}>
      <svg viewBox="0 0 24 24" aria-hidden="true" height="20px">
        <g>
          <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
        </g>
      </svg>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border: none;
  background-color: transparent;
  top: 30px;
  left: 30px;
  position: absolute;
  border-radius: 9999px;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.75);
  &:hover {
    background-color: rgba(26, 26, 26, 0.75);
  }
  & > svg {
    fill: rgb(255, 255, 255);
  }
`;
