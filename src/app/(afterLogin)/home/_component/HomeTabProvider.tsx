"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext({
  selectedMenu: "recommend",
  setSelectedMenu: (value: "recommend" | "following") => {},
});

type Props = { children: ReactNode };
export default function HomeTabProvider({ children }: Props) {
  const [selectedMenu, setSelectedMenu] = useState("recommend");

  return <TabContext.Provider value={{ selectedMenu, setSelectedMenu }}>{children}</TabContext.Provider>;
}
