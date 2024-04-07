import Home from "../../home/page";

export default function ComposeTweet() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Home />
    </>
  );
}
