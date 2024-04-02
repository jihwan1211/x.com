"use client";

import styled from "styled-components";

export const Navigation = styled.div`
  box-sizing: border-box;
  padding: 0 16px;
  height: 53px;

  display: flex;
  align-items: center;
  & > div:nth-child(2) {
    cursor: pointer;
    & > div:nth-child(1) {
      box-sizing: border-box;
      color: rgb(15, 20, 25);
      max-width: 100%;
      min-width: 0px;
      font-size: 20px;
      line-height: 24px;
      padding-bottom: 2px;
      font-weight: 700;
    }
    & > div:nth-child(2) {
      color: rgb(83, 100, 113);
      max-width: 100%;
      min-width: 0px;
      font-size: 13px;
      line-height: 16px;

      font-weight: 400;
    }
  }
`;

export const ProfileUserdataMid = styled.div`
  box-sizing: border-box;
`;

export const UserName = styled.div`
  box-sizing: border-box;
  margin-top: 4px;
  margin-bottom: 12px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 100%;
    color: rgb(15, 20, 25);
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    flex-shrink: 1;
  }

  & > div:nth-child(2) {
    color: rgb(83, 100, 113);
    line-height: 20px;
    max-width: 100%;
    font-size: 15px;
    font-weight: 400;
    line-height: 12px;
  }
`;
export const SignupDate = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 4px;
    fill: rgb(83, 100, 113);
  }
  box-sizing: border-box;
  margin-bottom: 12px;
  color: rgb(83, 100, 113);
  font-size: 15px;
  min-width: 0px;
`;

export const AboutFollower = styled.div`
  display: flex;
  & > a {
    text-decoration: none;
    color: rgb(83, 100, 113);

    & > span {
      color: rgb(15, 20, 25);
      font-weight: 700;
    }
  }

  & > a:nth-child(1) {
    margin-right: 20px;
  }
`;

export const ProfileUserdata = styled.div`
  box-sizing: border-box;
  padding: 12px 16px 0 16px;
  /* margin-bottom: 16px; */
`;

export const ProfileUserdataTop = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;

  & > a {
    margin-left: auto;
    box-sizing: border-box;
    padding: 0 16px;
    margin-bottom: 12px;

    cursor: pointer;
    min-width: 36px;
    min-height: 36px;
    text-decoration: none;
    color: rgb(15, 20, 25);
    border: 1px solid rgb(207, 217, 222);
    border-radius: 9999px;
    transition: 0.2s;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(15, 20, 25, 0.1);
    }
  }
`;

export const AbsoluteProfileContainer = styled.div`
  margin-bottom: 12px;
  height: auto;
  display:block
  background-color: red;
  
  & > div{
  
  }
`;

export const NoAccountId = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  font-size: 31px;
  font-weight: 700;
`;

export const NoAccountMsg = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 31px;
  font-weight: 700;
`;
