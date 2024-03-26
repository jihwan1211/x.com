"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  height: 100dvh;
  width: 100dvw;
  background-color: #ffffff;
`;

export const RightDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LeftDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 300px;

  text-decoration: none;

  border-radius: 9999px;
  cursor: pointer;
`;

export const SignupBtn = styled(Btn)`
  background-color: rgb(29, 155, 240);
  color: white;
  border: 1px solid rgb(255, 255, 255);
  margin-bottom: 8px;

  &:hover {
    background-color: rgb(26, 140, 216);
  }
`;

export const LoginBtn = styled(Btn)`
  background-color: rgba(0, 0, 0, 0);
  color: rgb(29, 155, 240);
  border: 1px solid rgb(207, 217, 222);

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;
