import Login from "@/app/(beforeLogin)/_component/Login";

export default function LoginPage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Login />
    </>
  );
}
