import SelectedChatRoom from "../../_component/SelectedChatRoom";

type Prop = {
  params: { chatId: string };
};

export default function ChatPage({ params }: Prop) {
  return <SelectedChatRoom params={params} />;
}
