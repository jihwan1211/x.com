"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

export default function BackBtn() {
  const router = useRouter();
  const onClickBackBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    router.back();
  };

  return (
    <Wrapper onClick={onClickBackBtn}>
      <div>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
          </g>
        </svg>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: none;
  background-color: transparent;

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    transition: 0.2s;
    background-color: rgba(15, 20, 25, 0.1);
  }
  & > div {
    width: 34px;
    height: 34px;
    svg {
      fill: rgb(15, 20, 25);
    }
  }
`;
