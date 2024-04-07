import Signup from "@/app/(beforeLogin)/_component/Signup";

export default function SignupPage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Signup />
    </>
  );
}
