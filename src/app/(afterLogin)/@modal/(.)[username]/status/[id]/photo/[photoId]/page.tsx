import Image from "next/image";
import CommentForm from "../../../../_component/CommentForm";
import BackBtn from "../../../../_component/BackBtn";

import PostOptions from "@/app/(afterLogin)/_component/PostOptions";

import { Container, PhotoContainer, CommentsContainer, PhotoInnerContainer, OptionsWrapper } from "./style";
import { faker } from "@faker-js/faker";

export default function PhotoModal() {
  const post = {
    postId: 2,
    user: { id: "surrrrfing", nickname: "김지환", image: faker.image.avatar(), UId: 1, createdAt: faker.date.anytime() },
    content: "나는 두번째 추천 포스트입니다.",
    images: [
      { imageId: faker.number.int({ min: 10, max: 10000000000 }), url: faker.image.urlLoremFlickr() },
      {
        imageId: faker.number.int({ min: 10, max: 10000000000 }),
        url: faker.image.urlLoremFlickr(),
      },
      {
        imageId: faker.number.int({ min: 10, max: 10000000000 }),
        url: faker.image.urlLoremFlickr(),
      },
      {
        imageId: faker.number.int({ min: 10, max: 10000000000 }),
        url: faker.image.urlLoremFlickr(),
      },
    ],
    createdAt: "",
    comments: [],
    retweet: 13,
    likes: 2,
    watched: 12,
  };
  return (
    <Container>
      <BackBtn></BackBtn>
      <PhotoContainer>
        <PhotoInnerContainer>
          <Image src={post.images[0].url} alt="img" width={100} height={100}></Image>
        </PhotoInnerContainer>
        <OptionsWrapper>
          <PostOptions post={post} />
        </OptionsWrapper>
      </PhotoContainer>
      <CommentsContainer>
        {/* <Post></Post> */}
        <CommentForm></CommentForm>
        {/* <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post> */}
      </CommentsContainer>
    </Container>
  );
}
