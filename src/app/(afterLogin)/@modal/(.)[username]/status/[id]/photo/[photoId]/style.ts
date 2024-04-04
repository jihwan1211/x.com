"use client";

import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  left: 0;
  top: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
`;

export const CommentsContainer = styled.div`
  width: 550px;
  background-color: white;

  overflow: auto;
`;
