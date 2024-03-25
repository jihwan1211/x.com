"use client";

import styled from "styled-components";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchTab() {
  const [selectedMenu, setSelectedMenu] = useState("posting");

  const searchParams = useSearchParams();
  const router = useRouter();
  const handleHotClicked = () => {
    setSelectedMenu("posting");
    router.replace(`/profile`);
  };
  const handleRepliesClicked = () => {
    setSelectedMenu("with_replies");
    router.replace(`/profile/with_replies`);
  };
  const handleHighlightsClicked = () => {
    setSelectedMenu("highlights");
    router.replace(`/profile/highlights`);
  };
  const handleArticlesClicked = () => {
    setSelectedMenu("articles");
    router.replace(`/profile/articles`);
  };
  const handleMediaClicked = () => {
    setSelectedMenu("media");
    router.replace(`/profile/media`);
  };
  const handleLikesClicked = () => {
    setSelectedMenu("likes");
    router.replace(`/profile/likes`);
  };

  return (
    <TabContainer>
      <TabContainerInner>
        <TabMenu onClick={handleHotClicked}>
          {selectedMenu === "posting" ? (
            <>
              <BlackSpan>게시물</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>게시물</GreySpan>
          )}
        </TabMenu>
        <TabMenu onClick={handleRepliesClicked}>
          {selectedMenu === "with_replies" ? (
            <>
              <BlackSpan>답글</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>답글</GreySpan>
          )}
        </TabMenu>
        <TabMenu onClick={handleHighlightsClicked}>
          {selectedMenu === "highlights" ? (
            <>
              <BlackSpan>하이라이트</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>하이라이트</GreySpan>
          )}
        </TabMenu>
        <TabMenu onClick={handleArticlesClicked}>
          {selectedMenu === "articles" ? (
            <>
              <BlackSpan>아티클</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>아티클</GreySpan>
          )}
        </TabMenu>
        <TabMenu onClick={handleMediaClicked}>
          {selectedMenu === "media" ? (
            <>
              <BlackSpan>미디어</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>미디어</GreySpan>
          )}
        </TabMenu>
        <TabMenu onClick={handleLikesClicked}>
          {selectedMenu === "likes" ? (
            <>
              <BlackSpan>마음에 들어요</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>마음에 들어요</GreySpan>
          )}
        </TabMenu>
      </TabContainerInner>
    </TabContainer>
  );
}

const TabContainer = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  height: 53px;
  flex-grow: 1;

  display: flex;
`;

const TabContainerInner = styled.div`
  box-sizing: border-box;
  flex-grow: 1;

  display: flex;
  height: inherit;

  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);

  box-sizing: border-box;
  /* border: 1px solid rgb(239, 243, 244); */
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
