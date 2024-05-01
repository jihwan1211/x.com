import { QueryFunction } from "@tanstack/query-core";
import { User } from "@/model/User";
import { cookies } from "next/headers";
type Props = {
  queryKey: [string, string];
};

const getUserInfoServer = async ({ queryKey }: Props) => {
  const [_1, username] = queryKey;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  if (response.ok) return response.json();
};

export default getUserInfoServer;
