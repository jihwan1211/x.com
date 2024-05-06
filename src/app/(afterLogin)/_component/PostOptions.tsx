"use client";
import { useQueryClient, useMutation, InfiniteData } from "@tanstack/react-query";
import { useState, MouseEventHandler } from "react";
import { useSession } from "next-auth/react";
import useModalStore from "@/store/modal";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Post as IPost } from "@/model/Post";

type Props = {
  post: IPost;
};

export default function PostOptions({ post }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const modalStore = useModalStore();
  const calculateInitialLike = (): boolean => {
    return !!post.Hearts?.find((ele) => ele.userId === session?.user?.email);
  };

  const [like, setLike] = useState(calculateInitialLike);
  const [bookmark, setBookmark] = useState(false);
  const calculateInitialRetweet = (): boolean => {
    return !!post.repostCount;
  };
  const [isRetweeted, setIsRetweeted] = useState(calculateInitialRetweet);
  const queryClient = useQueryClient();

  const heart = useMutation({
    mutationFn: () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${post.postId}/heart`, {
        method: "post",
        credentials: "include",
      });
    },
    onMutate() {
      const queryCache = queryClient.getQueryCache();
      const postQueryCache = queryCache.findAll().find((ele) => ele.queryKey[0] === "posts");
      if (postQueryCache) {
        const postQueryKey = postQueryCache.queryKey;
        const postQueryData: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(postQueryKey);

        if (postQueryData && "pages" in postQueryData) {
          const targetPost = postQueryData.pages.flat().find((ele) => ele.postId === post.postId);
          if (targetPost) {
            const targetIndex = postQueryData.pages.findIndex((ele) => ele.includes(targetPost));
            const targetPostIndex = postQueryData.pages[targetIndex].findIndex((ele) => ele.postId === post.postId);

            const shallow = { ...postQueryData };
            shallow.pages = [...postQueryData.pages];
            shallow.pages[targetIndex] = [...postQueryData.pages[targetIndex]];
            shallow.pages[targetIndex][targetPostIndex] = {
              ...postQueryData.pages[targetIndex][targetPostIndex],
            };
            shallow.pages[targetIndex][targetPostIndex].Hearts.push({ userId: session?.user?.email as string });
            shallow.pages[targetIndex][targetPostIndex]._count.Hearts += 1;

            queryClient.setQueryData(postQueryKey, shallow);
          }
          // 특정 유저 게시글 조회의 경우는 나중에 구현
        }
      }
    },
    onError() {
      const queryCache = queryClient.getQueryCache();
      const postQueryCache = queryCache.findAll().find((ele) => ele.queryKey[0] === "posts");
      if (postQueryCache) {
        const postQueryKey = postQueryCache.queryKey;
        const postQueryData: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(postQueryKey);

        if (postQueryData && "pages" in postQueryData) {
          const targetPost = postQueryData.pages.flat().find((ele) => ele.postId === post.postId);
          if (targetPost) {
            const targetIndex = postQueryData.pages.findIndex((ele) => ele.includes(targetPost));
            const targetPostIndex = postQueryData.pages[targetIndex].findIndex((ele) => ele.postId === post.postId);
            const targetUserIndex = postQueryData.pages[targetIndex][targetPostIndex].Hearts.findIndex((ele) => ele.userId === session?.user?.email);

            const shallow = { ...postQueryData };
            shallow.pages = [...postQueryData.pages];
            shallow.pages[targetIndex] = [...postQueryData.pages[targetIndex]];
            shallow.pages[targetIndex][targetPostIndex] = {
              ...postQueryData.pages[targetIndex][targetPostIndex],
            };
            const newArr = postQueryData.pages[targetIndex][targetPostIndex].Hearts.splice(targetUserIndex, 1);
            shallow.pages[targetIndex][targetPostIndex].Hearts = [...newArr];
            shallow.pages[targetIndex][targetPostIndex]._count.Hearts -= 1;

            queryClient.setQueryData(postQueryKey, shallow);
          }
          // 특정 유저 게시글 조회의 경우는 나중에 구현
        }
      }
    },
    onSettled() {},
  });

  const unHeart = useMutation({
    mutationFn: () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${post.postId}/heart`, {
        method: "delete",
        credentials: "include",
      });
    },
    onMutate() {
      const queryCache = queryClient.getQueryCache();
      const postQueryCache = queryCache.findAll().find((ele) => ele.queryKey[0] === "posts");
      if (postQueryCache) {
        const postQueryKey = postQueryCache.queryKey;
        const postQueryData: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(postQueryKey);

        if (postQueryData && "pages" in postQueryData) {
          const targetPost = postQueryData.pages.flat().find((ele) => ele.postId === post.postId);
          if (targetPost) {
            const targetIndex = postQueryData.pages.findIndex((ele) => ele.includes(targetPost));
            const targetPostIndex = postQueryData.pages[targetIndex].findIndex((ele) => ele.postId === post.postId);
            const targetUserIndex = postQueryData.pages[targetIndex][targetPostIndex].Hearts.findIndex((ele) => ele.userId === session?.user?.email);

            const shallow = { ...postQueryData };
            shallow.pages = [...postQueryData.pages];
            shallow.pages[targetIndex] = [...postQueryData.pages[targetIndex]];
            shallow.pages[targetIndex][targetPostIndex] = {
              ...postQueryData.pages[targetIndex][targetPostIndex],
            };
            const newArr = postQueryData.pages[targetIndex][targetPostIndex].Hearts.splice(targetUserIndex, 1);
            shallow.pages[targetIndex][targetPostIndex].Hearts = [...newArr];
            shallow.pages[targetIndex][targetPostIndex]._count.Hearts -= 1;

            queryClient.setQueryData(postQueryKey, shallow);
          }
          // 특정 유저 게시글 조회의 경우는 나중에 구현
        }
      }
    },
    onError() {
      const queryCache = queryClient.getQueryCache();
      const postQueryCache = queryCache.findAll().find((ele) => ele.queryKey[0] === "posts");
      if (postQueryCache) {
        const postQueryKey = postQueryCache.queryKey;
        const postQueryData: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(postQueryKey);

        if (postQueryData && "pages" in postQueryData) {
          const targetPost = postQueryData.pages.flat().find((ele) => ele.postId === post.postId);
          if (targetPost) {
            const targetIndex = postQueryData.pages.findIndex((ele) => ele.includes(targetPost));
            const targetPostIndex = postQueryData.pages[targetIndex].findIndex((ele) => ele.postId === post.postId);

            const shallow = { ...postQueryData };
            shallow.pages = [...postQueryData.pages];
            shallow.pages[targetIndex] = [...postQueryData.pages[targetIndex]];
            shallow.pages[targetIndex][targetPostIndex] = {
              ...postQueryData.pages[targetIndex][targetPostIndex],
            };
            shallow.pages[targetIndex][targetPostIndex].Hearts.push({ userId: session?.user?.email as string });
            shallow.pages[targetIndex][targetPostIndex]._count.Hearts += 1;

            queryClient.setQueryData(postQueryKey, shallow);
          }
          // 특정 유저 게시글 조회의 경우는 나중에 구현
        }
      }
    },
    onSettled() {},
  });

  const retweet = useMutation({
    mutationFn: async () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${post.postId}/reposts`, {
        method: "post",
        credentials: "include",
      });
    },
    onMutate: () => {
      const queryCache = queryClient.getQueryCache();
      const candidateQueryKey = queryCache.findAll().filter((ele) => ele.queryKey[0] === "posts" && ele.queryKey[1] === "recommends");
      console.log(candidateQueryKey);
      if (candidateQueryKey) {
        const recommendQueryKey = candidateQueryKey[0].queryKey;
        const recommendData: InfiniteData<IPost[]> | undefined = queryClient.getQueryData(recommendQueryKey);
        console.log(recommendData);
        if (recommendData && "pages" in recommendData) {
          const index = recommendData.pages.flat().findIndex((ele) => ele.postId === post.postId);
          const targetIndex = recommendData.pages[index].findIndex((ele) => ele.postId === post.postId);
          const shallow = { ...recommendData };
          shallow.pages = [...recommendData.pages];
          shallow.pages[index] = [...recommendData.pages[index]];
          shallow.pages[index][targetIndex] = {
            ...recommendData.pages[index][targetIndex],
            repostCount: recommendData.pages[index][targetIndex].repostCount + 1,
            _count: {
              ...recommendData.pages[index][targetIndex]._count,
              Reposts: recommendData.pages[index][targetIndex]._count.Reposts + 1,
            },
          };
          console.log(shallow);
          queryClient.setQueryData(recommendQueryKey, shallow);
        }
      }
    },
    onError: () => {
      const queryCache = queryClient.getQueryCache();
      const candidateQueryKey = queryCache.findAll().filter((ele) => ele.queryKey[0] === "posts" && ele.queryKey[1] === "recommends");
      console.log(candidateQueryKey);
      if (candidateQueryKey) {
        const recommendQueryKey = candidateQueryKey[0].queryKey;
        const recommendData: InfiniteData<IPost[]> | undefined = queryClient.getQueryData(recommendQueryKey);
        console.log(recommendData);
        if (recommendData && "pages" in recommendData) {
          const index = recommendData.pages.flat().findIndex((ele) => ele.postId === post.postId);
          const targetIndex = recommendData.pages[index].findIndex((ele) => ele.postId === post.postId);
          const shallow = { ...recommendData };
          shallow.pages = [...recommendData.pages];
          shallow.pages[index] = [...recommendData.pages[index]];
          shallow.pages[index][targetIndex] = {
            ...recommendData.pages[index][targetIndex],
            repostCount: recommendData.pages[index][targetIndex].repostCount - 1,
            _count: {
              ...recommendData.pages[index][targetIndex]._count,
              Reposts: recommendData.pages[index][targetIndex]._count.Reposts - 1,
            },
          };
          console.log(shallow);
          queryClient.setQueryData(recommendQueryKey, shallow);
        }
      }
    },
  });

  const cancleRetweet = useMutation({
    mutationFn: async () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${post.postId}/reposts`, {
        method: "delete",
        credentials: "include",
      });
    },
    onMutate: () => {
      const queryCache = queryClient.getQueryCache();
      const candidateQueryKey = queryCache.findAll().filter((ele) => ele.queryKey[0] === "posts" && ele.queryKey[1] === "recommends");
      console.log(candidateQueryKey);
      if (candidateQueryKey) {
        const recommendQueryKey = candidateQueryKey[0].queryKey;
        const recommendData: InfiniteData<IPost[]> | undefined = queryClient.getQueryData(recommendQueryKey);
        console.log(recommendData);
        if (recommendData && "pages" in recommendData) {
          const index = recommendData.pages.flat().findIndex((ele) => ele.postId === post.postId);
          const targetIndex = recommendData.pages[index].findIndex((ele) => ele.postId === post.postId);
          const shallow = { ...recommendData };
          shallow.pages = [...recommendData.pages];
          shallow.pages[index] = [...recommendData.pages[index]];
          shallow.pages[index][targetIndex] = {
            ...recommendData.pages[index][targetIndex],
            repostCount: recommendData.pages[index][targetIndex].repostCount - 1,
            _count: {
              ...recommendData.pages[index][targetIndex]._count,
              Reposts: recommendData.pages[index][targetIndex]._count.Reposts - 1,
            },
          };
          console.log(shallow);
          queryClient.setQueryData(recommendQueryKey, shallow);
        }
      }
    },
    onError: () => {
      const queryCache = queryClient.getQueryCache();
      const candidateQueryKey = queryCache.findAll().filter((ele) => ele.queryKey[0] === "posts" && ele.queryKey[1] === "recommends");
      console.log(candidateQueryKey);
      if (candidateQueryKey) {
        const recommendQueryKey = candidateQueryKey[0].queryKey;
        const recommendData: InfiniteData<IPost[]> | undefined = queryClient.getQueryData(recommendQueryKey);
        console.log(recommendData);
        if (recommendData && "pages" in recommendData) {
          const index = recommendData.pages.flat().findIndex((ele) => ele.postId === post.postId);
          const targetIndex = recommendData.pages[index].findIndex((ele) => ele.postId === post.postId);
          const shallow = { ...recommendData };
          shallow.pages = [...recommendData.pages];
          shallow.pages[index] = [...recommendData.pages[index]];
          shallow.pages[index][targetIndex] = {
            ...recommendData.pages[index][targetIndex],
            repostCount: recommendData.pages[index][targetIndex].repostCount + 1,
            _count: {
              ...recommendData.pages[index][targetIndex]._count,
              Reposts: recommendData.pages[index][targetIndex]._count.Reposts + 1,
            },
          };
          console.log(shallow);
          queryClient.setQueryData(recommendQueryKey, shallow);
        }
      }
    },
  });

  const onClickLikeBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (like) {
      unHeart.mutate();
      setLike(false);
    } else {
      heart.mutate();
      setLike(true);
    }
  };

  const onClickBookmarkBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    console.log("bookmark!");
    setBookmark(!bookmark);
  };

  const onClickComment: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    router.push("/compose/tweet", { scroll: false });
    modalStore.setModal("comment");
    modalStore.setPost(post);
  };

  const onClickRetweet: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (isRetweeted) {
      cancleRetweet.mutate();
    } else {
      console.log("hah");
      retweet.mutate();
    }
  };
  return (
    <PostOptionsContainer>
      <CommentBtn onClick={onClickComment}>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
            <g>
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
            </g>
          </svg>
        </div>
        <div>{post.commentCount}</div>
      </CommentBtn>
      <RetweetBtn onClick={onClickRetweet}>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
            <g>
              <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
            </g>
          </svg>
        </div>
        <div>{post.repostCount}</div>
      </RetweetBtn>
      <LikeBtn onClick={onClickLikeBtn}>
        <div>
          {like ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
              <g>
                <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
              <g>
                <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
              </g>
            </svg>
          )}
        </div>
        <div>{post.heartCount}</div>
      </LikeBtn>
      <HitsBtn href="/">
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true" width="1.25em">
            <g>
              <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
            </g>
          </svg>
        </div>
        <div>13만</div>
      </HitsBtn>
      <EtcBtn onClick={onClickBookmarkBtn}>
        <div>
          {bookmark ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" height="1.25em">
              <g>
                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z" style={{ fill: "rgb(29, 155, 240)" }}></path>
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" height="1.25em">
              <g>
                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
              </g>
            </svg>
          )}
        </div>
      </EtcBtn>
      <EtcBtn>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true" height="1.25em">
            <g>
              <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
            </g>
          </svg>
        </div>
      </EtcBtn>
    </PostOptionsContainer>
  );
}

export const PostOptionsContainer = styled.div`
  box-sizing: border-box;
  height: 32px;
  margin-top: 4px;

  display: flex;

  & > a,
  & > button {
    text-decoration: none;

    display: flex;
    justify-content: start;
    align-items: center;
    color: rgb(83, 100, 113);
    cursor: pointer;
    background-color: transparent;

    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34.75px;
      height: 34.75px;
      background-color: transparent;
      border-radius: 9999px;
      transition: 0.2s;
    }

    svg {
      fill: rgb(83, 100, 113);
    }
  }
`;

export const CommentBtn = styled.button`
  border: 0;
  color: rgba(29, 155, 240);
  flex-grow: 1;
  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(29, 155, 240, 0.2);
      svg {
        fill: rgba(29, 155, 240, 1);
      }
    }
  }

  &:hover {
    div:nth-child(2) {
      color: rgba(29, 155, 240, 1);
    }
  }
`;

export const RetweetBtn = styled.button`
  border: 0;
  color: rgba(0, 186, 124);
  flex-grow: 1;
  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(0, 186, 124, 0.2);
      svg {
        fill: rgba(0, 186, 124);
      }
    }
  }

  &:hover {
    div:nth-child(2) {
      color: rgba(0, 186, 124);
    }
  }
`;

export const LikeBtn = styled.button`
  border: 0;
  flex-grow: 1;
  color: rgba(249, 24, 128);

  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(249, 24, 128, 0.2);
      svg {
        fill: rgba(249, 24, 128);
      }
    }
  }

  &:hover {
    div:nth-child(2) {
      color: rgba(249, 24, 128);
    }
  }
`;

export const HitsBtn = styled(Link)`
  color: rgba(29, 155, 240);
  flex-grow: 1;
  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(29, 155, 240, 0.2);
      svg {
        fill: rgba(29, 155, 240, 1);
      }
    }
  }

  &:hover {
    div:nth-child(2) {
      color: rgba(29, 155, 240, 1);
    }
  }
`;

const EtcBtn = styled.button`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  /* width: 34.75px; */
  /* height: 34.75px; */

  & > div:nth-child(1) {
    &:hover {
      background-color: rgba(29, 155, 240, 0.2);
      svg {
        fill: rgba(29, 155, 240, 1);
      }
    }
  }
`;
