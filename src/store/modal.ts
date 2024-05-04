import { create } from "zustand";
import { Post } from "@/model/Post";

interface state {
  modal: "post" | "comment";
  post: Post;
  setModal: (state: "post" | "comment") => void;
  setPost: (state: Post) => void;
}

const useModalStore = create<state>((set) => ({
  modal: "post",
  post: {} as Post,
  setModal: (state: "post" | "comment") => set(() => ({ modal: state })),
  setPost: (post: Post) => set(() => ({ post: post })),
}));

export default useModalStore;
