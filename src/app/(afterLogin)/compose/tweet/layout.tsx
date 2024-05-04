import { ReactNode } from "react";
import ComposeTweetModal from "../../@modal/(.)compose/tweet/page";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};
// hard navigation일 때 나오는 화면
const ComposeTweetLayout = ({ children, modal }: Props) => {
  return (
    <>
      <div>compose/tweet/layout</div>
      {/* {children} */}
      <ComposeTweetModal></ComposeTweetModal>
    </>
  );
};

export default ComposeTweetLayout;
