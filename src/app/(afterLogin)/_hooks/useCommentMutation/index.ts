"use client";

import { useMutation, useQueryClient, InfiniteData } from "@tanstack/react-query";
import { FormEvent } from "react";
import { fetchComment } from "./apis";
import { Post as IPost } from "@/model/Post";

type FileArr = Array<{ dataUrl: string; file: File } | null>;

type Props = {
  id: string;
  content: string;
  preview: FileArr;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setPreview: React.Dispatch<React.SetStateAction<FileArr>>;
};

export default function useCommentMutation({ id, content, preview, setContent, setPreview }: Props) {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: async (e: FormEvent) => {
      e.preventDefault();
      const formData = new FormData();

      formData.append("content", content);
      if (preview.length) {
        preview.forEach((ele) => {
          ele && formData.append("images", ele.file);
        });
      }
      return fetchComment(id, formData);
    },
    onSuccess: async (data) => {
      const newPost = await data.json();
      setContent("");
      setPreview([]);

      const targetData: InfiniteData<IPost[]> | undefined = queryClient.getQueryData(["posts", "comments", id]);
      if (targetData && "pages" in targetData) {
        const shallow = {
          ...targetData,
          pages: [...targetData.pages],
        };
        shallow.pages[0] = [...targetData.pages[0]];
        shallow.pages[0].unshift(newPost);
        queryClient.setQueryData(["posts", "comments", id], shallow);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });

  return mutate;
}
