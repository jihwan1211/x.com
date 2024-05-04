"use client";

import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100dvh;
  left: 0;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;

  max-width: 80vw;
  min-width: 600px;
  height: 278px;
  max-height: 90vh;
  min-height: 400px;

  display: flex;
  flex-direction: column;
`;
