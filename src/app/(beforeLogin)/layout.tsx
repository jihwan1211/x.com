import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "X. 무슨 일이 벌어지고 있나요?",
  description: "뉴스 속보와 엔터테인먼트부터 스포츠와 정치까지, 실시간 코멘터리와 함께 이야기의 전말을 확인해 보세요.",
};

export default function Layout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
