import Home from "@/app/(afterLogin)/home/page";

export default function PhotoDetail() {
  return;
  <>
    {/* @ts-expect-error Server Component */}
    <Home></Home>;
  </>;
}
