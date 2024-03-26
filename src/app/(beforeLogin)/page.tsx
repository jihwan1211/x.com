import Home from "@/app/(beforeLogin)/_component/Home";

export default function HomePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Home />
    </>
  );
}
