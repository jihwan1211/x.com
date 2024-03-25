import { ReactNode } from "react";
import PhotoModal from "@/app/(afterLogin)/@modal/(.)[username]/status/[id]/photo/[photoId]/page";

type Props = {
  children: ReactNode;
};
const PhotoLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <PhotoModal></PhotoModal>
    </>
  );
};

export default PhotoLayout;
