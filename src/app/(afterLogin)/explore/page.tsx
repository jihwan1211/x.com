import { Suspense } from "react";
import type { Metadata } from "next";

import SearchBar from "../_component/SearchBar";
import TrendsForYou from "./_component/TrendsForYou";
import { Container, SearchContainer, ShowMore } from "./page-style";
import Loading from "../_component/LoadingUI";

export const metadata: Metadata = {
  title: "(1) 탐색하기 / X",
  description: "검색을 통해 실시간으로 일어나는 일들을 확인해보세요.",
};

export default function Explore() {
  return (
    <Container>
      <SearchContainer>
        <SearchBar></SearchBar>
      </SearchContainer>
      <h1>나를 위한 트렌드</h1>
      <Suspense fallback={<Loading />}>
        <TrendsForYou />
      </Suspense>

      <ShowMore>더 보기</ShowMore>
    </Container>
  );
}
