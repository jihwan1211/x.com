"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "../../_component/Post";

import { IPost } from "@/model/Post";

import getSearchResults from "../_lib/getSearchResults";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function SearchPostDisplay({ searchParams }: Props) {
  //   console.log(searchParams);

  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, searchParams: { q: string; pf?: string; f?: string }]>({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResults,
  });
  console.log("in searchbar", data);
  //   return null;

  return (
    <>
      {data?.map((ele: IPost, idx: number) => (
        <Post key={idx} post={ele}></Post>
      ))}
    </>
  );
}
