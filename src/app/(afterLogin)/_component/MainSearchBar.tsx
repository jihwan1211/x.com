"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import styled from "styled-components";

import FixedSearchBar from "./SearchBar";

export default function MainSearchBar() {
  const segment = useSelectedLayoutSegment();
  console.log("segment : ", segment);

  if (segment === ("messages" || "explore" || "search")) return null;

  return (
    <SearchConatiner>
      <FixedSearchBar></FixedSearchBar>
    </SearchConatiner>
  );
}

const SearchConatiner = styled.div`
  display: flex;

  justify-content: start;
  width: 350px;
  height: 53px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;
