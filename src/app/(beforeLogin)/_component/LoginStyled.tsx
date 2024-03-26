"use client";
import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;

  max-width: 80vw;
  min-width: 600px;
  height: 650px;
  max-height: 90vh;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  /* flex-shrink: 1; */
`;

export const ModalHeader = styled.div`
  height: 53px;

  display: flex;
  justify-content: center;
  padding: 0 16px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-shrink: 1;
  flex-basis: 50%;
  flex-grow: 1;
`;

export const HeaderMid = styled.div`
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const HeaderRight = styled.div`
  flex-shrink: 1;
  flex-basis: 50%;
  align-self: stretch;
  align-items: flex-end;
  flex-grow: 1;
`;

export const ModalBody = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* justify-content: space-between; */
  /* align-items:space-between */

  margin: 0 118px;
  padding: 0 32px 48px 32px;
`;

export const Button = styled.button`
  border: 1px solid rgb(207, 217, 222);
  border-radius: 24px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 12px;
  margin: 12px 0;

  /* width: 300px; */
  width: 100%;
  max-width: 400px;

  height: 36px;

  cursor: pointer;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;

export const BrandLogo = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const GoogleLogin = styled(Button)`
  font-size: 14px;

  &:hover {
    background-color: rgba(185, 202, 211, 0.5);
  }
`;

export const AppleLogin = styled(Button)`
  font-size: 14px;
  font-weight: 700;
`;

export const BoundaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  white-space: nowrap;
  flex-basis: auto;

  margin: 0 4px;
`;

export const Divider = styled.div`
  /* display: flex; */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;

  height: 1px;

  background-color: rgb(207, 217, 222);
  margin: 8px 0;
`;
