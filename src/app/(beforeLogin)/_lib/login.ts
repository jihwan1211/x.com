"use server";

import { signIn } from "@/auth";
// import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function onSubmitLogin(prevState: any, formData: FormData) {
  let shouldRedirect = false;
  if (!(formData.get("id") as string)?.trim()) return { message: "no_id" };
  if (!(formData.get("password") as string)?.trim()) return { message: "no_password" };
  try {
    const response = await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
    shouldRedirect = true;
  } catch (err) {
    console.log("adbd");
    console.log(err);
  }
  if (shouldRedirect) redirect("/home");
}
