import { auth } from "@/auth";
import CloseButton from "../_component/CloseButton";
import PostForm from "../_component/PostForm";
import { ModalBackground, Container } from "../_component/style";

export default async function ComposeTweetModal() {
  const session = await auth();
  return (
    <ModalBackground>
      <Container>
        <CloseButton />
        <PostForm session={session} />
      </Container>
    </ModalBackground>
  );
}
