"use client";

import { use } from "react";
import { TabContext } from "./HomeTabProvider";
import RecommendPosts from "./RecommendPosts";
import FollowingPosts from "@/app/(afterLogin)/home/_component/FollowingPosts";

export default function PostDisplay() {
  const { selectedMenu } = use(TabContext);
  console.log(selectedMenu);
  if (selectedMenu === "recommend") {
    return <RecommendPosts />;
  }
  return <FollowingPosts />;
}
