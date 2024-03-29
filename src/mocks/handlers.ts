import { http, HttpResponse, StrictResponse } from "msw";
import { faker } from "@faker-js/faker";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  { id: "elonmusk", nickname: "Elon Musk", image: faker.image.avatar(), UId: faker.number.int({ min: 10, max: 10000000000 }) },
  { id: "surrrrfing", nickname: "김지환", image: faker.image.avatar(), UId: faker.number.int({ min: 10, max: 10000000000 }) },
  { id: "zerohch0", nickname: "제로초", image: faker.image.avatar(), UId: faker.number.int({ min: 10, max: 10000000000 }) },
  { id: "leoturtle", nickname: "레오", image: faker.image.avatar(), UId: faker.number.int({ min: 10, max: 10000000000 }) },
  { id: "noImage", nickname: "사진을 싫어합니다.", image: faker.image.avatar(), UId: faker.number.int({ min: 10, max: 10000000000 }) },
];
const Posts = [];

export const handlers = [
  http.post("/api/login", () => {
    console.log("로그인");
    return HttpResponse.json(User[1], {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),
  http.post("/api/logout", () => {
    console.log("로그아웃");
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.post("/api/users", ({ request }) => {
    console.log("회원가입");
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;",
      },
    });
  }),
  http.get("/api/postRecommends", ({ request }) => {
    console.log("http request!");
    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: "나는 첫번째 추천 포스트입니다.",
        images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
        createdAt: "",
        comments: [],
        retweet: 14,
        likes: 113,
        watched: 123,
      },
      {
        postId: 2,
        user: User[1],
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
      },
      {
        postId: 3,
        user: User[2],
        content: "나는 세번째 추천 포스트입니다.",
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
        ],
        createdAt: "",
        comments: [],
        retweet: 1300,
        likes: 15000,
        watched: 100034,
      },
      {
        postId: 4,
        user: User[3],
        content: "나는 네번째 추천 포스트입니다.",
        images: [
          { imageId: faker.number.int({ min: 10, max: 10000000000 }), url: faker.image.urlLoremFlickr() },
          {
            imageId: faker.number.int({ min: 10, max: 10000000000 }),
            url: faker.image.urlLoremFlickr(),
          },
        ],
        createdAt: "",
        comments: [],
        retweet: 1,
        likes: 78,
        watched: 180,
      },
      {
        postId: 5,
        user: User[4],
        content: "나는 사진을 올리지 않았지요.",
        images: [],
        createdAt: "",
        comments: [],
        retweet: 77,
        likes: 88,
        watched: 188,
      },
    ]);
  }),
  http.get("/api/followingPosts", ({ request }) => {
    console.log("followingPosts!");
    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: "이건 팔로잉 대상 포스트입니다",
        images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
        createdAt: "",
        comments: [],
        retweet: 14,
        likes: 113,
        watched: 123,
      },
      {
        postId: 2,
        user: User[1],
        content: "이건 팔로잉 대상 포스트입니다2",
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
      },
      {
        postId: 3,
        user: User[2],
        content: "이건 팔로잉 대상 포스트입니다3",
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
        ],
        createdAt: "",
        comments: [],
        retweet: 1300,
        likes: 15000,
        watched: 100034,
      },
      {
        postId: 4,
        user: User[3],
        content: "이건 팔로잉 대상 포스트입니다4",
        images: [
          { imageId: faker.number.int({ min: 10, max: 10000000000 }), url: faker.image.urlLoremFlickr() },
          {
            imageId: faker.number.int({ min: 10, max: 10000000000 }),
            url: faker.image.urlLoremFlickr(),
          },
        ],
        createdAt: "",
        comments: [],
        retweet: 1,
        likes: 78,
        watched: 180,
      },
      {
        postId: 5,
        user: User[4],
        content: "이건 팔로잉 대상 포스트입니다5",
        images: [],
        createdAt: "",
        comments: [],
        retweet: 77,
        likes: 88,
        watched: 188,
      },
    ]);
  }),
  http.get("/api/search/:tag", ({ request, params }) => {
    console.log("request", request);
    const { tag } = params;

    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: `검색 결과1 ${tag}`,
        images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
        createdAt: "",
        comments: [],
        retweet: 14,
        likes: 113,
        watched: 123,
      },
      {
        postId: 2,
        user: User[1],
        content: `검색 결과1 ${tag}`,
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
      },
      {
        postId: 3,
        user: User[2],
        content: `검색 결과1 ${tag}`,
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
        ],
        createdAt: "",
        comments: [],
        retweet: 1300,
        likes: 15000,
        watched: 100034,
      },
      {
        postId: 4,
        user: User[3],
        content: `검색 결과1 ${tag}`,
        images: [
          { imageId: faker.number.int({ min: 10, max: 10000000000 }), url: faker.image.urlLoremFlickr() },
          {
            imageId: faker.number.int({ min: 10, max: 10000000000 }),
            url: faker.image.urlLoremFlickr(),
          },
        ],
        createdAt: "",
        comments: [],
        retweet: 1,
        likes: 78,
        watched: 180,
      },
      {
        postId: 5,
        user: User[4],
        content: `검색 결과1 ${tag}`,
        images: [],
        createdAt: "",
        comments: [],
        retweet: 77,
        likes: 88,
        watched: 188,
      },
    ]);
  }),
  http.get("/api/users/:userId/posts", ({ request, params }) => {
    const { userId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get("/api/users/:userId", ({ request, params }): StrictResponse<any> => {
    const { userId } = params;
    const found = User.find((v) => v.id === userId);
    if (found) {
      return HttpResponse.json(found);
    }
    return HttpResponse.json(
      { message: "no_such_user" },
      {
        status: 404,
      }
    );
  }),
  http.get("/api/posts/:postId", ({ request, params }): StrictResponse<any> => {
    const { postId } = params;
    if (parseInt(postId as string) > 10) {
      return HttpResponse.json(
        { message: "no_such_post" },
        {
          status: 404,
        }
      );
    }
    return HttpResponse.json({
      postId,
      User: User[0],
      content: `${1} 게시글 아이디 ${postId}의 내용`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    });
  }),
  http.get("/api/posts/:postId/comments", ({ request, params }) => {
    const { postId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get("/api/followRecommends", ({ request }) => {
    return HttpResponse.json(User);
  }),
  http.get("/api/trends", ({ request }) => {
    return HttpResponse.json([
      { tagId: 1, title: "제로초", count: 1264 },
      { tagId: 2, title: "원초", count: 1264 },
      { tagId: 3, title: "투초", count: 1264 },
      { tagId: 4, title: "쓰리초", count: 1264 },
      { tagId: 5, title: "포초", count: 1264 },
      { tagId: 6, title: "파이브초", count: 1264 },
      { tagId: 7, title: "식스초", count: 1264 },
      { tagId: 8, title: "세븐초", count: 1264 },
      { tagId: 9, title: "나인초", count: 1264 },
    ]);
  }),
];
