"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #fff;
`;

export const Header = styled.header`
  box-sizing: border-box;
  width: 275px;
  /* flex-grow: 1; */
  display: flex;
  justify-content: flex-end;

  @media (min-width: 1295px) {
    justify-content: center;
  }
`;

export const FixedHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88px;
  position: fixed;
  height: 100%;
  overflow-x: hidden;
  padding: 0 8px;
  background-color: white;

  @media (min-width: 1295px) {
    width: 275px;
    align-items: flex-start;
  }
`;

export const MainLogo = styled.div`
  width: 52px;
  height: 52px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(15, 20, 25, 0.1);
    border-radius: 50%;
  }
`;

export const RightSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: 100dvh;

  @media (min-width: 1024px) {
    width: 1050px;
  }
`;

export const RightSectionInner = styled.div`
  height: 100%;
  width: 600px;

  display: flex;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: 990px;
  }
`;

export const Main = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 200dvh;
`;

export const Right = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 350px;
    height: 100dvh;
    box-sizing: border-box;
    margin-right: 10px;
    /* position: relative; */

    flex-direction: column;
  }
`;
