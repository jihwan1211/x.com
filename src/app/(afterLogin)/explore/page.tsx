import { Suspense } from "react";
import SearchBar from "../_component/SearchBar";
import TrendsForYou from "./_component/TrendsForYou";
import { Container, SearchContainer, ShowMore } from "./page-style";
import Loading from "../_component/LoadingUI";

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
