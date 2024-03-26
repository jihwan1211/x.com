import { redirect } from "next/navigation";
import { auth } from "@/auth";

import SignupForm from "./SignupForm";
import CloseButton from "./CloseButton";

import { ModalBackground, Container, ModalHeader, HeaderLeft, HeaderMid, HeaderRight, GoogleLogin, BrandLogo, AppleLogin, BoundaryContainer, Span, Divider } from "./LoginStyled";
import { ModalBody } from "./LoginStyled";
import Image from "next/image";
import xcom from "../../../../public/xcom.png";

export default async function Signup() {
  const session = await auth();
  if (session) redirect("/home");
  else console.log("plz login");

  return (
    <ModalBackground>
      <Container>
        <ModalHeader>
          <HeaderLeft>
            <CloseButton />
          </HeaderLeft>
          <HeaderMid>
            <Image src={xcom} alt="logo" width={53} height={53}></Image>
          </HeaderMid>
          <HeaderRight></HeaderRight>
        </ModalHeader>
        <ModalBody>
          <h1>계정을 생성하세요</h1>
          <SignupForm />
        </ModalBody>
      </Container>
    </ModalBackground>
  );
}
