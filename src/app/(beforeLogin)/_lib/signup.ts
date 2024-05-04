"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function onSubmit(prevState: any, formData: FormData) {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("nickname") || !(formData.get("nickname") as string)?.trim()) {
    return { message: "no_nickname" };
  }
  if (!formData.get("password") || !(formData.get("password") as string)?.trim()) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }
  // if (!Number(formData.get("day")) && !Number(formData.get("month")) && !Number(formData.get("year"))) {
  //   return { message: "wrong_birthday" };
  // }

  let shouldRedirect = false;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, { method: "POST", credentials: "include", body: formData });

    console.log("회원가입!", response);

    if (response.status === 403) return { message: "user_exists" };

    console.log("json 파싱", await response.json());
    await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
    shouldRedirect = true;
  } catch (err) {
    console.log("err!", err);
    return { message: "error" };
  }

  if (shouldRedirect) {
    redirect("/home");
  }
}
