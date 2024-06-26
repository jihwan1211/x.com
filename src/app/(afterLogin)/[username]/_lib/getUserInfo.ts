import { QueryFunction } from "@tanstack/query-core";
import { User } from "@/model/User";

const getUserInfo: QueryFunction<User, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`, {
    credentials: "include",
  });

  if (response.ok) return response.json();
};

export default getUserInfo;
