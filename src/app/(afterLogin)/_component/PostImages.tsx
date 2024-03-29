"use client";

import Link from "next/link";
import Image from "next/image";

import { IPost } from "@/model/Post";

import styled from "styled-components";

type BackgroundImage = {
  $url: string;
};

export default function PostImages({ post }: { post: IPost }) {
  if (!post.images || post.images.length === 0) return null;
  else if (post.images.length === 1) {
    return (
      <ImageContainer>
        <OneImageLink href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[0].imageId}`}>
          <BackgroundImage $url={post.images[0].url}></BackgroundImage>
          <Image src={post.images[0].url} alt="게시글 이미지" width={516} height={516}></Image>
        </OneImageLink>
      </ImageContainer>
    );
  } else if (post.images.length === 2) {
    return (
      <TwoImageContainer>
        <TwoImageLinkFirst href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[0].imageId}`}>
          <BackgroundImage $url={post.images[0].url} />
          <TwoImageFirst src={post.images[0].url} alt="게시글 이미지" width={200} height={200} />
        </TwoImageLinkFirst>
        <TwoImageLinkSecond href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[1].imageId}`}>
          <BackgroundImage $url={post.images[1].url} />
          <TwoImageSecond src={post.images[1].url} alt="게시글 이미지" width={200} height={200} />
        </TwoImageLinkSecond>
      </TwoImageContainer>
    );
  } else if (post.images.length === 3) {
    return (
      <ThreeImageContainer>
        <ThreeImageLeftLink href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[0].imageId}`}>
          <BackgroundImage $url={post.images[0].url} />
          <ThreeImageFirst src={post.images[0].url} alt="게시글 이미지" width={200} height={200} />
        </ThreeImageLeftLink>
        <ThreeImageRightWrapper>
          <ThreeImageRightTopLink href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[1].imageId}`}>
            <BackgroundImage $url={post.images[1].url} />
            <ThreeImageSecond src={post.images[1].url} alt="게시글 이미지" width={200} height={200} />
          </ThreeImageRightTopLink>
          <ThreeImageRightBottomLink href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[2].imageId}`}>
            <BackgroundImage $url={post.images[2].url} />
            <ThreeImageThird src={post.images[2].url} alt="게시글 이미지" width={200} height={200} />
          </ThreeImageRightBottomLink>
        </ThreeImageRightWrapper>
      </ThreeImageContainer>
    );
  } else if (post.images.length === 4) {
    return (
      <FourImageContainer>
        <FourImageLeftWrapper>
          <FourImageLeftTopLink href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[0].imageId}`}>
            <BackgroundImage $url={post.images[0].url} />
            <FourImageFirst src={post.images[0].url} alt="게시글 이미지" width={200} height={200} />
          </FourImageLeftTopLink>
          <FourImageLeftBottomLink href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[1].imageId}`}>
            <BackgroundImage $url={post.images[1].url} />
            <FourImageSecond src={post.images[1].url} alt="게시글 이미지" width={200} height={200} />
          </FourImageLeftBottomLink>
        </FourImageLeftWrapper>
        <ThreeImageRightWrapper>
          <ThreeImageRightTopLink href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[2].imageId}`}>
            <BackgroundImage $url={post.images[2].url} />
            <ThreeImageSecond src={post.images[2].url} alt="게시글 이미지" width={200} height={200} />
          </ThreeImageRightTopLink>
          <ThreeImageRightBottomLink href={`/${post.user.id}/status/${post.user.UId}/photo/${post.images[3].imageId}`}>
            <BackgroundImage $url={post.images[3].url} />
            <ThreeImageThird src={post.images[3].url} alt="게시글 이미지" width={200} height={200} />
          </ThreeImageRightBottomLink>
        </ThreeImageRightWrapper>
      </FourImageContainer>
    );
  } else return null;
}

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 516px;
  height: 516px;
  position: relative;
  margin-top: 12px;
`;

// inline-block은 보통 자식 요소(내용)의 크기만큼 차지. width와 height가 적용되지 않음
// 설정하면 그 값으로 변하긴 함.
const OneImageLink = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  flex-grow: 1;

  border: 1px solid rgb(239, 243, 244);
  border-radius: 24px;
  width: inherit;
  height: inherit;

  img {
    border-radius: 24px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
  }
`;

const BackgroundImage = styled.div<BackgroundImage>`
  box-sizing: border-box;
  border-radius: 24px;
  background-image: ${(props) => `url(${props.$url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 100%;
`;

const TwoImageContainer = styled.div`
  box-sizing: border-box;
  width: 516px;
  height: 290px;
  position: relative;
  margin-top: 12px;

  border: 1px solid rgb(239, 243, 244);
  border-radius: 24px;
  display: flex;
  gap: 3px;
`;

const TwoImageLink = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  flex-grow: 1;

  width: 100%;
`;

const TwoImageFirst = styled(Image)`
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 3px;
  bottom: 0px;
  width: calc(50% - 1.5px);
  height: 100%;
`;

const TwoImageSecond = styled(Image)`
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: calc(50% - 1.5px);
  height: 100%;
`;

const TwoImageLinkFirst = styled(TwoImageLink)`
  & > div,
  & > a {
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }
`;

const TwoImageLinkSecond = styled(TwoImageLink)`
  & > div,
  & > a {
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
  }
`;

const ThreeImageContainer = styled.div`
  box-sizing: border-box;
  width: 516px;
  height: 516px;
  position: relative;
  margin-top: 12px;

  border: 1px solid rgb(239, 243, 244);
  border-radius: 24px;
  display: flex;
  gap: 3px;
`;

const ThreeImageLeftLink = styled(Link)`
  box-sizing: border-box;
  display: inline-block;

  flex: 1;
  width: 100%;

  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;

  & > div,
  & > a {
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }
`;

const ThreeImageRightWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 100%;

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`;

const ThreeImageRightTopLink = styled(Link)`
  width: 100%;
  flex: 1;

  & > div,
  & > a {
    border-top-right-radius: 24px;
  }
`;

const ThreeImageRightBottomLink = styled(Link)`
  width: 100%;
  flex: 1;

  & > div,
  & > a {
    border-bottom-right-radius: 24px;
  }
`;

const ThreeImageFirst = styled(Image)`
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: calc(50% - 1.5px);
  height: 100%;
`;

const ThreeImageSecond = styled(Image)`
  border-top-right-radius: 24px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: calc(50% - 1.5px);
  height: calc(50% - 1.5px);
`;

const ThreeImageThird = styled(Image)`
  border-bottom-right-radius: 24px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: calc(50% - 1.5px);
  height: calc(50% - 1.5px);
`;

const FourImageContainer = styled.div`
  box-sizing: border-box;
  width: 516px;
  height: 516px;
  position: relative;
  margin-top: 12px;

  border: 1px solid rgb(239, 243, 244);
  border-radius: 24px;
  display: flex;
  gap: 3px;
`;

const FourImageLeftWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 100%;

  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;

const FourImageRightWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 100%;

  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;

const FourImageLeftTopLink = styled(Link)`
  width: 100%;
  flex: 1;

  & > div,
  & > a {
    border-top-left-radius: 24px;
  }
`;

const FourImageLeftBottomLink = styled(Link)`
  width: 100%;
  flex: 1;

  & > div,
  & > a {
    border-bottom-left-radius: 24px;
  }
`;

const FourImageFirst = styled(Image)`
  border-top-left-radius: 24px;
  position: absolute;
  top: 0px;
  left: 0px;

  width: calc(50% - 1.5px);
  height: calc(50% - 1.5px);
`;

const FourImageSecond = styled(Image)`
  border-bottom-left-radius: 24px;
  position: absolute;

  bottom: 0px;
  left: 0px;

  width: calc(50% - 1.5px);
  height: calc(50% - 1.5px);
`;
