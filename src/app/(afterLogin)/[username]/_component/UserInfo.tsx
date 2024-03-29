"use client";

import { useQuery } from "@tanstack/react-query";
import getUserInfo from "../_lib/getUserInfo";

import { User } from "@/model/User";

type Props = {
  username: string;
};

export default function UserInfo({ username }: Props) {
  console.log("params", username);
  const { data } = useQuery<User, Object, User, [_1: string, _2: string]>({ queryKey: ["users", username], queryFn: getUserInfo });
  return null;
}
