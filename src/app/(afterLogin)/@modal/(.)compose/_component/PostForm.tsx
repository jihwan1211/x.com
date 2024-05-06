"use client";
import { ChangeEventHandler, FormEvent, FormEventHandler, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useModalStore from "@/store/modal";
import { Session } from "@auth/core/types";
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";

interface Button {
  $input: string;
  disabled: boolean;
}

type Prop = {
  session: Session | null;
};

// 날짜 안 맞음
export default function PostForm({ session }: Prop) {
  const modal = useModalStore((state) => state.modal);
  const post = useModalStore((state) => state.post);
  const modalStore = useModalStore();
  const [input, setInput] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<Array<{ dataUrl: string; file: File } | null>>([]);
  const createdAt = new Date(post.createdAt);
  const router = useRouter();
  const queryClient = useQueryClient();

  const upload = useMutation({
    mutationFn: (e: FormEvent) => {
      e.preventDefault();
      const formData = new FormData();
      if (preview.length) {
        preview.forEach((ele) => {
          ele && formData.append("images", ele.file);
        });
      }
      formData.append("content", input);
      if (modal === "comment") {
        return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${post.postId}/comments`, {
          method: "post",
          body: formData,
          credentials: "include",
        });
      } else {
        return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
          method: "post",
          body: formData,
          credentials: "include",
        });
      }
    },
    // 개인 페이지에도 넣어줘야함.
    onSuccess: async (response) => {
      const res = await response.json();
      console.log(res);
      const data: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(["posts", "recommends"]);

      if (data && "pages" in data) {
        const shallow = { ...data };
        shallow.pages = [...data.pages];
        shallow.pages[0] = [...data.pages[0]];
        shallow.pages[0].unshift(res);
        console.log("shallow : ", shallow);
        queryClient.setQueryData(["posts", "recommends"], shallow);
        setInput("");
        setPreview([]);
        // 뒷배경 스크롤 원상복구
        document.body.style.overflow = "auto";
        router.back();
      }
    },
    onError: (error) => {
      alert(error);
    },
    onSettled: () => {
      modalStore.reset();
    },
  });

  const onClickImgBtn = () => {
    imageRef.current?.click();
  };

  const onChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setInput(e.target.value);
  };

  const onUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    if (e.target.files) {
      Array.from(e.target.files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview((prevPreview) => {
            const prev = [...prevPreview];
            prev[index] = {
              dataUrl: reader.result as string,
              file,
            };
            return prev;
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <Form onSubmit={upload.mutate}>
      {modal === "comment" && (
        <div style={{ display: "flex" }}>
          <ProfileImage src={post?.User?.image as string} alt="프로필 이미지" width={40} height={40} />
          <div>
            <UserInfo>
              <span>{post.User.nickname}</span>
              <span>@{post.User.id}</span>
              <span>
                {createdAt.getMonth()}월 {createdAt.getDay()}일
              </span>
            </UserInfo>
            <div>{post.content}</div>
            <ForWho>
              <span>@{post.User.id}</span>님에게 보내는 답글
            </ForWho>
          </div>
        </div>
      )}
      <Wrapper>
        <ProfileImage src={session?.user?.image as string} alt="프로필 이미지" width={40} height={40} />
        <FormTextarea placeholder="무슨 일이 일어나고 있나요?" name="inputText" value={input} onChange={onChangeTextarea}></FormTextarea>
      </Wrapper>
      <UploadImgContainer>
        {preview.map((ele, idx) => (
          <img key={idx} src={ele?.dataUrl as string} alt="upload img" />
        ))}
      </UploadImgContainer>
      <SubmitBtnOptionWrapper>
        <ImgBtn type="button" onClick={onClickImgBtn}>
          <input type="file" name="imageFiles" multiple hidden ref={imageRef} onChange={onUpload} />
          <svg viewBox="0 0 24 24" aria-hidden="true" width="20px">
            <g>
              <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
            </g>
          </svg>
        </ImgBtn>
        <SubmitBtn type="submit" $input={input} disabled={input.length === 0}>
          게시하기
        </SubmitBtn>
      </SubmitBtnOptionWrapper>
    </Form>
  );
}

const Form = styled.form`
  box-sizing: border-box;
  flex-grow: 1;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const FormTextarea = styled.textarea`
  flex-grow: 1;
  border: none;
  resize: none;
  background-color: transparent;

  display: flex;
  align-items: center;
`;

const ProfileImage = styled(Image)`
  box-sizing: border-box;
  margin-right: 8px;

  display: flex;
  flex-direction: column;
  justify-content: start;

  border-radius: 50%;

  cursor: pointer;
`;

const SubmitBtnOptionWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 8px;
  height: 56px;
  border-top: 1px solid rgb(239, 243, 244);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgBtn = styled.button`
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;
  border-radius: 9999px;
  transition: 0.2s;
  cursor: pointer;
  & > svg {
    fill: rgb(29, 155, 240);
  }

  &:hover {
    background-color: rgba(29, 155, 240, 0.2);
  }
`;

const SubmitBtn = styled.button<Button>`
  box-sizing: border-box;
  margin-top: 8px;
  margin-left: 12px;
  padding: 0 8px;
  background-color: rgb(29, 155, 240);
  height: 100%;
  width: 100px;
  min-width: 36px;
  min-height: 36px;
  transition: 0.2s;

  opacity: ${(props) => (props.$input.length > 1 ? 1 : 0.5)};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  border: none;
  color: white;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  color: rgb(83, 100, 113);
  & > span:nth-child(1) {
    color: rgb(15, 20, 25);
  }
  & > span:nth-child(2) {
    margin: 0 3px;
  }
`;

const ForWho = styled.div`
  margin: 15px 0;
  & > span {
    color: rgb(29, 155, 240);
  }
`;

const UploadImgContainer = styled.div`
  margin-top: 10px;
  max-height: 300px;
  display: flex;
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
