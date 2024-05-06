import { create } from "zustand";
import { Post } from "@/model/Post";

interface State {
  modal: "post" | "comment";
  post: Post;
}

interface Actions {
  setModal: (state: "post" | "comment") => void;
  setPost: (state: Post) => void;
  reset: () => void;
}

const initialState: State = {
  modal: "post",
  post: {} as Post,
};

const useModalStore = create<State & Actions>((set) => ({
  ...initialState,
  setModal: (state: "post" | "comment") => set(() => ({ modal: state })),
  setPost: (post: Post) => set(() => ({ post: post })),
  reset: () => {
    set(initialState);
  },
}));

export default useModalStore;
