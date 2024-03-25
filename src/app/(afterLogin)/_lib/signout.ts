"use server";
import { signOut } from "@/auth";
// import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function logout() {
  console.log("try loging out!");
  await signOut({ redirect: false });
  redirect("/");
}
