import { ReactNode } from "react";
import ComposeTweetModal from "../../@modal/(.)compose/tweet/page";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};
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
