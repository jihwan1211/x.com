import { QueryFunction } from "@tanstack/query-core";
import axios from "axios";
import { User } from "@/model/User";

const getUserInfo: QueryFunction<User, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`);
  if (response.statusText === "OK") return response.data;
};

export default getUserInfo;
