"use client";

import { useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import Home from "@/app/(beforeLogin)/_component/Home";

export default function Login() {
  // redirect("/i/flow/login");
  const router = useRouter();
  useEffect(() => {
    router.replace("i/flow/login");
  }, []);
  return <Home />;
}
