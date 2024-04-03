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

export const PhotoContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const CommentsContainer = styled.div`
  width: 550px;
  background-color: white;

  overflow: auto;
`;

export const PhotoInnerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 1000px;

  /* & > img {
    width: 100%;
    height: 100%;
  } */
`;

export const OptionsWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
  }
`;
