"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";
import styled from "styled-components";

type FileArr = Array<{ dataUrl: string; file: File } | null>;

type Prop = {
  uploadedImg: FileArr;
  setPrev: React.Dispatch<React.SetStateAction<FileArr>>;
};

const deleteImg = (imgs: FileArr, id: number): FileArr => {
  const newImgs = imgs.filter((ele, idx) => idx !== id);
  return newImgs;
};

export default function UploadImgCarousel({ uploadedImg, setPrev }: Prop) {
  const onClickCancleBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newImgs: FileArr = deleteImg(uploadedImg, Number(e.currentTarget.id));
    setPrev(newImgs);
  };

  return (
    <UploadImgContainer>
      {uploadedImg.map((ele, idx) => (
        <Wrapper key={idx}>
          <Image src={ele?.dataUrl as string} width={250} height={290} alt="upload img" />
          <button id={idx.toString()} onClick={onClickCancleBtn}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </Wrapper>
      ))}
    </UploadImgContainer>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;

  & > img {
    object-fit: contain;
  }
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgb(0, 0, 0);
    border-radius: 9999px;
    min-width: 32px;
    min-height: 32px;
    top: 5px;
    right: 12px;

    svg {
      fill: rgb(255, 255, 255);
      width: 18px;
      height: 18px;
    }
  }
`;

const UploadImgContainer = styled.div`
  margin-top: 10px;
  max-height: 300px;
  display: flex;
`;
