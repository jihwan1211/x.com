import { QueryFunction } from "@tanstack/query-core";
import { User } from "@/model/User";
import { cookies } from "next/headers";

const getUserInfoServer: QueryFunction<User, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  if (response.ok) return response.json();
};

export default getUserInfoServer;
