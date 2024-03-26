// "use client";

import { useEffect } from "react";
import { auth } from "@/auth";
import { useRouter, redirect } from "next/navigation";
import Home from "@/app/(beforeLogin)/_component/Home";

export default async function Login() {
  const session = await auth();
  if (session) redirect("/home");
  else redirect("/i/flow/login");

  // const router = useRouter();
  // useEffect(() => {
  //   console.log("real Login!!!!! did you call me?");
  //   router.replace("i/flow/login");
  // }, []);
  // router.replace("i/flow/login");
  // 아 이게 또 클라이언트 컴포넌트냐..
  // return <Home />;
  return null;
}
