import { ReactNode } from "react";
import ComposeTweetModal from "../../@modal/(.)compose/tweet/page";

type Props = {
  children: ReactNode;
};
const ComposeTweetLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <ComposeTweetModal></ComposeTweetModal>
    </>
  );
};

export default ComposeTweetLayout;
