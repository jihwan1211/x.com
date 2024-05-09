"use client";
import Image from "next/image";
import { ChangeEventHandler, useState, useRef } from "react";
import { Session } from "@auth/core/types";
import { useParams } from "next/navigation";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import UploadImgCarousel from "@/app/(afterLogin)/_component/UploadImgCarousel";
import useCommentMutation from "@/app/(afterLogin)/_hooks/useCommentMutation";
import { readImageFiles } from "@/app/(afterLogin)/_lib/readImageFiles";
type Prop = {
  me: Session | null;
};

type FileArr = Array<{ dataUrl: string; file: File } | null>;

export default function CommentForm({ me }: Prop) {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<FileArr>([]);
  const params = useParams();
  const commentMutate = useCommentMutation({ id: params.id as string, content, preview, setContent, setPreview });

  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onClickImgBtn = () => {
    imageRef.current?.click();
  };

  const onUpload: ChangeEventHandler<HTMLInputElement> = async (e) => {
    e.preventDefault();
    const readFiles = await readImageFiles(e.target.files, preview);
    if (readFiles) setPreview(readFiles);
    console.log(preview.length);
  };

  return (
    <Container>
      <form onSubmit={commentMutate.mutate}>
        <Profile>
          <Image src={me?.user?.image!} alt="profile image" width={40} height={40}></Image>
        </Profile>
        <FormRight>
          <TextareaAutosize value={content} onChange={onChangeContent} placeholder="무슨 일이 일어나고 있나요?" />
          <UploadImgCarousel uploadedImg={preview} setPrev={setPreview} />
          <FormRightInnerBottom>
            <button type="button" onClick={onClickImgBtn} disabled={preview.length >= 4}>
              <input type="file" name="imageFiles" multiple hidden ref={imageRef} onChange={onUpload} />
              <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem">
                <g>
                  <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                </g>
              </svg>
            </button>
            <BtnWrapper>
              <button disabled={!content.trim().length}>게시하기</button>
            </BtnWrapper>
          </FormRightInnerBottom>
        </FormRight>
      </form>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 596px;
  min-height: 120px;
  max-height: 875px;
  border-top: 1px solid rgb(239, 243, 244);
  background-color: #ffffff;
  & > form {
    box-sizing: border-box;
    display: flex;
    padding: 4px 16px 0 16px;
    height: inherit;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 12px;
  margin-right: 8px;

  & > img {
    box-sizing: border-box;
    background-color: black;
    border-radius: 50%;
    flex-basis: 40px;
  }
`;

const FormRight = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 16px;
  & > textarea {
    flex-grow: 1;
    border: none;
    resize: none;
    background-color: transparent;

    display: flex;
    align-items: center;
  }

  & > div {
    flex-grow: 1;
  }
`;

const UploadImgContainer = styled.div`
  margin-top: 10px;
  max-height: 300px;
  display: flex;
  position: relative;
  & > img {
    object-fit: contain;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgb(0, 0, 0);
    border-radius: 9999px;
    min-width: 32px;
    min-height: 32px;
    top: 3px;

    right: 3px;

    svg {
      fill: rgb(255, 255, 255);
      width: 18px;
      height: 18px;
    }
  }
`;

const FormRightInnerBottom = styled.div`
  box-sizing: border-box;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgb(239, 243, 244);
  flex-grow: 1;

  display: flex;
  justify-content: space-between;

  & > button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    svg {
      fill: rgb(29, 155, 240);
    }
  }

  & > button:disabled {
    svg {
      fill: rgba(29, 155, 240, 0.5);
    }
  }
`;

const BtnWrapper = styled.div`
  box-sizing: border-box;
  min-height: 36px;
  min-width: 36px;
  width: 100px;

  button {
    background-color: rgb(29, 155, 240);
    width: inherit;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 9999px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
  }
  button:hover {
    background-color: rgb(26, 140, 216);
  }

  button:disabled {
    background-color: rgb(120, 120, 120);
  }
  button:disabled:hover {
    background-color: rgb(120, 120, 120);
    cursor: auto;
  }
`;
