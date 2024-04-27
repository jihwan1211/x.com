"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";
import { User } from "@/model/User";
import { MouseEventHandler } from "react";

type Prop = {
  user: User;
};

export default function FollowRecommends({ user }: Prop) {
  const calculateInitialFollowing = (): boolean => {
    return !!user.Followers.find((ele) => ele.id === session?.user?.email);
  };
  const queryClient = useQueryClient();
  const [isFollowing, setIsFollowing] = useState(calculateInitialFollowing);
  const [buttonText, setButtonText] = useState("버튼");
  const { data: session } = useSession();

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
        console.log(queryData);

        if (targetDataIndex !== -1) {
          const shallow = [...queryData];
          shallow[targetDataIndex] = {
            ...queryData[targetDataIndex],
            Followers: [...queryData[targetDataIndex].Followers],
          };
          shallow[targetDataIndex].Followers.push({ id: session?.user?.email as string });
          shallow[targetDataIndex]._count.Followers += 1;
          console.log("shallow : ", shallow);
          queryClient.setQueryData(["user", "toFollow"], shallow);
        }
      }
    },
    onError() {
      const queryData: User[] | undefined = queryClient.getQueryData(["user", "toFollow"]);
      if (queryData) {
        const targetDataIndex = queryData.findIndex((ele) => ele.id === user.id);
        console.log(queryData);
        const meIndex = queryData[targetDataIndex].Followers.findIndex((ele) => ele.id === session?.user?.email);
        if (targetDataIndex !== -1 && meIndex !== -1) {
          const shallow = [...queryData];
          shallow[targetDataIndex] = {
            ...queryData[targetDataIndex],
            Followers: [...queryData[targetDataIndex].Followers],
          };
          shallow[targetDataIndex].Followers.splice(meIndex, 1);
          shallow[targetDataIndex]._count.Followers -= 1;
          console.log("unfollow shallow : ", shallow);
          queryClient.setQueryData(["user", "toFollow"], shallow);
        }
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
        console.log(queryData);
        const meIndex = queryData[targetDataIndex].Followers.findIndex((ele) => ele.id === session?.user?.email);
        if (targetDataIndex !== -1 && meIndex !== -1) {
          const shallow = [...queryData];
          shallow[targetDataIndex] = {
            ...queryData[targetDataIndex],
            Followers: [...queryData[targetDataIndex].Followers],
          };
          shallow[targetDataIndex].Followers.splice(meIndex, 1);
          shallow[targetDataIndex]._count.Followers -= 1;
          console.log("unfollow shallow : ", shallow);
          queryClient.setQueryData(["user", "toFollow"], shallow);
        }
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
            Followers: [...queryData[targetDataIndex].Followers],
          };
          shallow[targetDataIndex].Followers.push({ id: session?.user?.email as string });
          shallow[targetDataIndex]._count.Followers += 1;
          console.log("shallow : ", shallow);
          queryClient.setQueryData(["user", "toFollow"], shallow);
        }
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

  return (
    <Profile>
      <Image src={user.image!} alt="profile image" width={40} height={40}></Image>
      <div>
        <div>{user.nickname}</div>
        <div>{user.id}</div>
      </div>
      {isFollowing ? (
        <UnFollowBtn onClick={onClickFollow} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {buttonText}
        </UnFollowBtn>
      ) : (
        <FollowBtn onClick={onClickFollow}>팔로우</FollowBtn>
      )}
    </Profile>
  );
}

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;

  cursor: pointer;
  background-color: inherit;

  &:hover {
    background-color: rgb(15, 20, 25, 0.1);
  }
  & > div {
    height: 40px;
  }

  & > img {
    border-radius: 50%;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 100%;
    margin: 12px;
    flex-grow: 1;

    div:nth-child(2) {
      color: rgb(83, 100, 113);
    }
  }
`;

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
