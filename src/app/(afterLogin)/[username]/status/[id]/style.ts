"use client";

import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  /* & > div:nth-child(1) {
    border-bottom: 1px solid rgb(239, 243, 244);
  } */
`;

export const Container = styled.div`
  box-sizing: border-box;
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);

  height: 100dvh;

  & > div:nth-child(1) {
    width: 596px;
    height: 53px;
    position: relative;
  }
`;

export const Nav = styled.div`
  box-sizing: border-box;
  padding: 0 16px;

  height: inherit;
  width: inherit;
  position: fixed;

  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  z-index: 1;
  & > div:nth-child(2) {
    box-sizing: border-box;
    margin-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: rgb(15, 20, 25);
    max-width: 100%;
    min-width: 0px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
`;
