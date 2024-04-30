"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import getUserInfo from "../_lib/getUserInfo";

import BackBtn from "../../_component/BackBtn";
import { Navigation } from "./style";

import { User } from "@/model/User";

type Prop = {
  username: string;
};

export default function Nav({ username }: Prop) {
  const queryClient = useQueryClient();
  const { data } = useQuery<User, Object, User, [_1: string, _2: string]>({ queryKey: ["user", username], queryFn: getUserInfo });
  // const data = queryClient.getQueryData<User>(["user", username]);
  // console.log("네비게이션 유저 데이터 : ", data);
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
