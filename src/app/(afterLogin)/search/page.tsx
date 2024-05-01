import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import type { Metadata, ResolvingMetadata } from "next";

import SearchBar from "../_component/SearchBar";
import BackBtn from "../_component/BackBtn";
import Tab from "./_component/Tab";
import SearchPostDisplay from "./_component/SearchPostDisplay";
import { Container, TabContainer, SearchContainer, SearchWrapper, TabFixedContainer } from "./style";
import getSearchResult from "./_lib/getSearchResults";

type Props = { searchParams: { q: string; f?: string; pf?: string } };

export async function generateMetadata({ searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: `${searchParams.q} - 검색 / X`,
    description: `${searchParams.q}에 대한 검색 결과`,
  };
}

// 이거 왜 매개변수 이름이 searchParams?
// 서버 컴포넌트에서 제공하는 기능.
// client component에서는 useSearchParams등의 훅을 사용해야함.
export default function Search({ searchParams }: Props) {
  const queryClient = new QueryClient();
  queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    pages: 3,
  });
  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TabContainer>
          <TabFixedContainer>
            <SearchContainer>
              <BackBtn></BackBtn>
              <SearchWrapper>
                <SearchBar></SearchBar>
              </SearchWrapper>
            </SearchContainer>
            <Tab />
          </TabFixedContainer>
        </TabContainer>

        <SearchPostDisplay searchParams={searchParams} />
      </HydrationBoundary>
    </Container>
  );
}
