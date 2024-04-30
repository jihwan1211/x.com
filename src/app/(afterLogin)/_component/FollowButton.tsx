"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, MouseEventHandler, useEffect } from "react";
import { User } from "@/model/User";
import { Session } from "@auth/core/types";
import styled from "styled-components";

type Prop = {
  user: User;
  session: Session | null;
};

export default function FollowButton({ user, session }: Prop) {
  const queryClient = useQueryClient();
  const calculateInitialFollowing = (): boolean => {
    return !!user.Followers.find((ele) => ele.id === session?.user?.email);
  };

  const calculateInitialButtonText = (): string => {
    if (!!user.Followers.find((ele) => ele.id === session?.user?.email)) return "팔로잉";
    else return "팔로우";
  };

  const [isFollowing, setIsFollowing] = useState(calculateInitialFollowing);
  const [buttonText, setButtonText] = useState(calculateInitialButtonText);

  useEffect(() => {
    setIsFollowing(calculateInitialFollowing);
  }, [user]);

  const follow = useMutation({
    mutationFn: () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user.id}/follow`, {
        method: "post",
        credentials: "include",
      });
    },
    onMutate() {
      const queryData: User[] | undefined = queryClient.getQueryData(["user", "toFollow"]);
      if (queryData) {
        const targetDataIndex = queryData.findIndex((ele) => ele.id === user.id);
        if (targetDataIndex !== -1) {
          const shallow = [...queryData];
          shallow[targetDataIndex] = {
            ...queryData[targetDataIndex],
            Followers: [{ id: session?.user?.email as string }],
          };
          shallow[targetDataIndex]._count.Followers += 1;
          queryClient.setQueryData(["user", "toFollow"], shallow);
        }
      }
      const queryData2: User | undefined = queryClient.getQueryData(["user", user.id]);
      if (queryData2) {
        const shallow = {
          ...queryData2,
          Followers: [{ id: session?.user?.email }],
          _count: {
            ...queryData2._count,
            Followers: queryData2._count.Followers + 1,
          },
        };
        queryClient.setQueryData(["user", user.id], shallow);
      }
    },
    onError() {
      const queryData: User[] | undefined = queryClient.getQueryData(["user", "toFollow"]);
      if (queryData) {
        const targetDataIndex = queryData.findIndex((ele) => ele.id === user.id);
        console.log(queryData);
        if (targetDataIndex !== -1) {
          const shallow = [...queryData];
          shallow[targetDataIndex] = {
            ...queryData[targetDataIndex],
            Followers: queryData[targetDataIndex].Followers.filter((ele) => ele.id !== session?.user?.email),
          };
          shallow[targetDataIndex]._count.Followers -= 1;
          queryClient.setQueryData(["user", "toFollow"], shallow);
        }
      }
      const queryData2: User | undefined = queryClient.getQueryData(["user", user.id]);
      if (queryData2) {
        const shallow = {
          ...queryData2,
          Followers: queryData2.Followers.filter((ele) => ele.id !== session?.user?.email),
          _count: {
            ...queryData2._count,
            Followers: queryData2._count.Followers - 1,
          },
        };
        queryClient.setQueryData(["user", user.id], shallow);
      }
    },
    onSettled() {},
  });

  const unFollow = useMutation({
    mutationFn: () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user.id}/follow`, {
        method: "delete",
        credentials: "include",
      });
    },
    onMutate() {
      const queryData: User[] | undefined = queryClient.getQueryData(["user", "toFollow"]);
      if (queryData) {
        const targetDataIndex = queryData.findIndex((ele) => ele.id === user.id);
        if (targetDataIndex !== -1) {
          const shallow = [...queryData];
          shallow[targetDataIndex] = {
            ...queryData[targetDataIndex],
            Followers: queryData[targetDataIndex].Followers.filter((ele) => ele.id !== session?.user?.email),
          };
          shallow[targetDataIndex]._count.Followers -= 1;
          queryClient.setQueryData(["user", "toFollow"], shallow);
        }
      }
      const queryData2: User | undefined = queryClient.getQueryData(["user", user.id]);
      if (queryData2) {
        const shallow = {
          ...queryData2,
          Followers: queryData2.Followers.filter((ele) => ele.id !== session?.user?.email),
          _count: {
            ...queryData2._count,
            Followers: queryData2._count.Followers - 1,
          },
        };
        queryClient.setQueryData(["user", user.id], shallow);
      }
    },
    onError() {
      const queryData: User[] | undefined = queryClient.getQueryData(["user", "toFollow"]);
      if (queryData) {
        const targetDataIndex = queryData.findIndex((ele) => ele.id === user.id);
        if (targetDataIndex !== -1) {
          const shallow = [...queryData];
          shallow[targetDataIndex] = {
            ...queryData[targetDataIndex],
            Followers: [{ id: session?.user?.email as string }],
          };
          shallow[targetDataIndex]._count.Followers += 1;
          queryClient.setQueryData(["user", "toFollow"], shallow);
        }
      }
      const queryData2: User | undefined = queryClient.getQueryData(["user", user.id]);
      if (queryData2) {
        const shallow = {
          ...queryData2,
          Followers: [{ id: session?.user?.email }],
          _count: {
            ...queryData2._count,
            Followers: queryData2._count.Followers + 1,
          },
        };
        queryClient.setQueryData(["user", user.id], shallow);
      }
    },
    onSettled() {},
  });

  const onClickFollow: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isFollowing) {
      unFollow.mutate();
      setIsFollowing(false);
    } else {
      follow.mutate();
      setIsFollowing(true);
    }
  };

  const handleMouseEnter = () => {
    setButtonText("언팔로우");
  };

  const handleMouseLeave = () => {
    setButtonText("팔로잉");
  };

  return isFollowing ? (
    <UnFollowBtn onClick={onClickFollow} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {buttonText}
    </UnFollowBtn>
  ) : (
    <FollowBtn onClick={onClickFollow}>팔로우</FollowBtn>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  border-radius: 9999px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  padding: 0 16px;
`;

const FollowBtn = styled(Button)`
  background-color: rgb(15, 20, 25);
  color: rgb(255, 255, 255);
`;

const UnFollowBtn = styled(Button)`
  background-color: rgb(255, 255, 255);
  color: rgb(15, 20, 25);
  border: 1px solid rgb(207, 217, 222);

  &:hover {
    border: 1px solid rgb(253, 201, 206);
    background-color: rgba(244, 33, 46, 0.1);
  }
`;
