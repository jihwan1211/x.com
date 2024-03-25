"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext({
  tab: "recommend",
  setTab: (value: "recommend" | "following") => {},
});

type Props = { children: ReactNode };
export default function HomeTabProvider({ children }: Props) {
  const [tab, setTab] = useState("recommend");

  return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
