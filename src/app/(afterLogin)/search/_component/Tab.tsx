"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchTab() {
  const [selectedMenu, setSelectedMenu] = useState("hot");

  const searchParams = useSearchParams();

  const router = useRouter();

  const checkSearchParams = () => {
    let params = new URLSearchParams(searchParams);
    params.delete("f");
    if (selectedMenu === "hot") router.replace(`/search?${params.toString()}`);
    else router.replace(`/search?${params.toString()}&f=${selectedMenu}`);
  };

  useEffect(() => {
    const tabMenu = localStorage.getItem("searchTabMenu");
    setSelectedMenu(tabMenu!);
  }, [searchParams.values()]);

  useEffect(() => {
    checkSearchParams();
  }, [selectedMenu]);

  const handleHotClicked = () => {
    setSelectedMenu("hot");
    localStorage.setItem("searchTabMenu", "hot");
  };
  const handleNewClicked = () => {
    setSelectedMenu("new");
    localStorage.setItem("searchTabMenu", "new");
  };
  const handleUserClicked = () => {
    setSelectedMenu("user");
    localStorage.setItem("searchTabMenu", "user");
  };
  const handleMediaClicked = () => {
    setSelectedMenu("media");
    localStorage.setItem("searchTabMenu", "media");
  };
  const handleListClicked = () => {
    setSelectedMenu("list");
    localStorage.setItem("searchTabMenu", "list");
  };

  return (
    <TabContainer>
      <TabContainerInner>
        <TabMenu onClick={handleHotClicked}>
          {selectedMenu === "hot" ? (
            <>
              <BlackSpan>인기</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>인기</GreySpan>
          )}
        </TabMenu>
        <TabMenu onClick={handleNewClicked}>
          {selectedMenu === "new" ? (
            <>
              <BlackSpan>최신</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>최신</GreySpan>
          )}
        </TabMenu>
        <TabMenu onClick={handleUserClicked}>
          {selectedMenu === "user" ? (
            <>
              <BlackSpan>사용자</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>사용자</GreySpan>
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
        <TabMenu onClick={handleListClicked}>
          {selectedMenu === "list" ? (
            <>
              <BlackSpan>리스트</BlackSpan>
              <Underline></Underline>
            </>
          ) : (
            <GreySpan>리스트</GreySpan>
          )}
        </TabMenu>
      </TabContainerInner>
    </TabContainer>
  );
}

const TabContainer = styled.div`
  box-sizing: border-box;

  height: 53px;
  flex-grow: 1;

  display: flex;
`;

const TabContainerInner = styled.div`
  box-sizing: border-box;
  flex-grow: 1;

  display: flex;
  height: inherit;

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
