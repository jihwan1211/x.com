"use client";

import { useContext } from "react";
import { TabContext } from "./HomeTabProvider";

import styled from "styled-components";

export default function HomeTab() {
  const { selectedMenu, setSelectedMenu } = useContext(TabContext);

  const onClickRecommendClicked = () => {
    setSelectedMenu("recommend");
  };
  const onClickFollowingClicked = () => {
    setSelectedMenu("following");
  };

  return (
    <TabContainer>
      <TabContainerInner>
        <TabMenu onClick={onClickRecommendClicked}>
          {selectedMenu === "recommend" ? (
            <>
              <BlackSpan>추천</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>추천</GreySpan>
          )}
        </TabMenu>
        <TabMenu onClick={onClickFollowingClicked}>
          {selectedMenu === "following" ? (
            <>
              <BlackSpan>팔로잉</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>팔로잉</GreySpan>
          )}
        </TabMenu>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem">
            <g>
              <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
            </g>
          </svg>
        </div>
      </TabContainerInner>
    </TabContainer>
  );
}

const TabContainer = styled.div`
  background-color: #ffffff;
  height: 53px;
  width: 596px;
  box-sizing: border-box;
  /* border: 1px solid rgb(247, 249, 249); */
`;

const TabContainerInner = styled.div`
  position: fixed;
  display: flex;
  width: inherit;
  height: inherit;

  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);

  box-sizing: border-box;
  /* border: 1px solid rgb(239, 243, 244); */

  & > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 16px;
    cursor: pointer;
    svg {
      fill: rgb(15, 20, 25);
    }
  }
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  font-weight: 700;
  font-size: 15px;

  cursor: pointer;
  position: relative;
`;

const BlackSpan = styled.span`
  color: rgb(15, 20, 25);
`;

const GreySpan = styled.span`
  color: rgb(83, 100, 113);
`;

const Underline = styled.div`
  background-color: rgb(29, 155, 240);
  position: absolute;
  height: 4px;
  min-width: 56px;
  width: 56px;
  display: inline-flex;
  bottom: 0;
  border-radius: 9999px;
`;
