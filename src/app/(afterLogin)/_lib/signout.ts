"use server";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function logout() {
  console.log("try loging out!");
  await signOut({ redirect: true });
  // redirect("/");
}
