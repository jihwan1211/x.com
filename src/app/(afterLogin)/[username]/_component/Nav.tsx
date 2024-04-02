"use client";

import { useQuery } from "@tanstack/react-query";

import getUserInfo from "../_lib/getUserInfo";

import BackBtn from "../../_component/BackBtn";
import { Navigation } from "./style";

import { User } from "@/model/User";

type Prop = {
  username: any;
};

export default function Nav({ username }: Prop) {
  const { data } = useQuery<User, Object, User, [_1: string, _2: string]>({ queryKey: ["users", username], queryFn: getUserInfo });

  console.log("data :", data);
  return (
    <Navigation>
      <BackBtn></BackBtn>
      {data === undefined ? (
        <div>프로필</div>
      ) : (
        <div>
          <div>{data?.nickname}</div>
          <div>0 게시물</div>
        </div>
      )}
    </Navigation>
  );
}
