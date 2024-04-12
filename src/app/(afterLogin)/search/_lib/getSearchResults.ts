import axios from "axios";
import { QueryFunction } from "@tanstack/query-core";

import { IPost } from "@/model/Post";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

// queryKey type?
const getSearchResult: QueryFunction<IPost[], [_1: string, _2: string, searchParams: { q: string; pf?: string; f?: string }], number> = async ({ queryKey, pageParam }) => {
  //   console.log("queryKey", queryKey);
  const [_1, _2, searchParams] = queryKey;
  //   console.log("q?", searchParams.q);

  const params = new URLSearchParams(searchParams);
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?${params.toString()}&cursor=${pageParam}`);

  if (response.statusText === "OK") return response.data;
};

export default getSearchResult;
