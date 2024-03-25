"use server";

import axios from "axios";
import { redirect } from "next/navigation";

export default async function onSubmit(prevState: any, formData: FormData) {
  // console.log(Number(formData.get("day")));
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (!formData.get("password") || !(formData.get("password") as string)?.trim()) {
    return { message: "no_password" };
  }
  if (!Number(formData.get("day")) && !Number(formData.get("month")) && !Number(formData.get("year"))) {
    return { message: "wrong_birthday" };
  }

  let shouldRedirect = false;
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, formData, {
      withCredentials: true,
    });
    if (response.status === 403) return { message: "user_exists" };
    shouldRedirect = true;
  } catch (err) {
    console.log("err!", err);
    return { message: "error" };
  }

  if (shouldRedirect) {
    redirect("/home");
  }
}
