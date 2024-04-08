"use client";

import styled from "styled-components";

export const Container = styled.main`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  width: inherit;
`;

export const TabContainer = styled.div`
  box-sizing: border-box;
  border-top: 0px;
  width: 598px;
  height: 115px;
  /* height: auto; */

  /* display: flex; */
`;

export const TabFixedContainer = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 243, 244);

  position: fixed;

  width: inherit;
  height: inherit;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
`;

export const SearchContainer = styled.div`
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  width: inherit;
  height: 60px;
`;

export const SearchWrapper = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 510px;
  width: 510px;
  height: 53px;
  display: flex;
`;
