"use client";

import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 100dvh;
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);

  display: flex;
  flex-direction: column;
`;

export const Userzone = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
`;

export const Profile = styled.div`
  position: relative;
  border-bottom: 1px solid rgb(239, 243, 244);
  /* border-bottom: 1px solid rgb(207, 217, 222); */
`;

export const HeaderPhotoZone = styled.div`
  height: 200px;
  background-color: rgb(207, 217, 222);
`;
