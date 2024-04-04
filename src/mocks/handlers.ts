import { http, HttpResponse, StrictResponse } from "msw";
import { faker } from "@faker-js/faker";
// import { User } from "@/model/User";
function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  { id: "elonmusk", nickname: "Elon Musk", image: faker.image.avatar(), UId: 1, createdAt: faker.date.anytime() },
  { id: "surrrrfing", nickname: "김지환", image: faker.image.avatar(), UId: 2, createdAt: faker.date.anytime() },
  { id: "zerohch0", nickname: "제로초", image: faker.image.avatar(), UId: 3, createdAt: faker.date.anytime() },
  { id: "leoturtle", nickname: "레오", image: faker.image.avatar(), UId: 4, createdAt: faker.date.anytime() },
  { id: "noImage", nickname: "사진을 싫어합니다.", image: faker.image.avatar(), UId: 5, createdAt: faker.date.anytime() },
];
const Posts = [
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
      { imageId: 1, url: faker.image.urlLoremFlickr() },
      { imageId: 2, url: faker.image.urlLoremFlickr() },
      { imageId: 3, url: faker.image.urlLoremFlickr() },
      { imageId: 4, url: faker.image.urlLoremFlickr() },
    ],
    createdAt: "",
    comments: [],
    retweet: 13,
    likes: 2,
    watched: 12,
  },
  {
    postId: 30,
    user: User[2],
    content: "나는 세번째 추천 포스트입니다.",
    images: [
      { imageId: 1, url: faker.image.urlLoremFlickr() },
      { imageId: 2, url: faker.image.urlLoremFlickr() },
      { imageId: 3, url: faker.image.urlLoremFlickr() },
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
      { imageId: 1, url: faker.image.urlLoremFlickr() },
      { imageId: 2, url: faker.image.urlLoremFlickr() },
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
];

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
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
          { imageId: 3, url: faker.image.urlLoremFlickr() },
          { imageId: 4, url: faker.image.urlLoremFlickr() },
        ],
        createdAt: "",
        comments: [],
        retweet: 13,
        likes: 2,
        watched: 12,
      },
      {
        postId: 30,
        user: User[2],
        content: "나는 세번째 추천 포스트입니다.",
        images: [
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
          { imageId: 3, url: faker.image.urlLoremFlickr() },
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
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
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
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
          { imageId: 3, url: faker.image.urlLoremFlickr() },
          { imageId: 4, url: faker.image.urlLoremFlickr() },
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
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
          { imageId: 3, url: faker.image.urlLoremFlickr() },
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
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
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
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
          { imageId: 3, url: faker.image.urlLoremFlickr() },
          { imageId: 4, url: faker.image.urlLoremFlickr() },
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
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
          { imageId: 3, url: faker.image.urlLoremFlickr() },
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
          { imageId: 1, url: faker.image.urlLoremFlickr() },
          { imageId: 2, url: faker.image.urlLoremFlickr() },
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
  http.get("/api/users/:userId/posts", ({ request, params }): StrictResponse<any> => {
    const { userId } = params;
    const found = User.find((v) => v.id === userId);
    if (found) {
      return HttpResponse.json([
        {
          postId: 1,
          user: User[1],
          content: `${1} ${userId}의 게시글`,
          images: [
            { imageId: 1, url: faker.image.urlLoremFlickr() },
            { imageId: 2, url: faker.image.urlLoremFlickr() },
          ],
          createdAt: "",
          comments: [],
          retweet: 1,
          likes: 78,
          watched: 180,
        },
        {
          postId: 2,
          user: User[1],
          content: `${2} ${userId}의 게시글`,
          images: [
            { imageId: 1, url: faker.image.urlLoremFlickr() },
            { imageId: 2, url: faker.image.urlLoremFlickr() },
            { imageId: 3, url: faker.image.urlLoremFlickr() },
          ],
          createdAt: "",
          comments: [],
          retweet: 1,
          likes: 78,
          watched: 180,
        },
        {
          postId: 3,
          user: User[1],
          content: `${3} ${userId}의 게시글`,
          images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
          createdAt: "",
          comments: [],
          retweet: 1,
          likes: 78,
          watched: 180,
        },
        {
          postId: 4,
          user: User[1],
          content: `${4} ${userId}의 게시글`,
          images: [],
          createdAt: "",
          comments: [],
          retweet: 1,
          likes: 78,
          watched: 180,
        },
        {
          postId: 5,
          user: User[1],
          content: `${5} ${userId}의 게시글`,
          images: [
            { imageId: 1, url: faker.image.urlLoremFlickr() },
            { imageId: 2, url: faker.image.urlLoremFlickr() },
            { imageId: 3, url: faker.image.urlLoremFlickr() },
            { imageId: 4, url: faker.image.urlLoremFlickr() },
          ],
          createdAt: "",
          comments: [],
          retweet: 1,
          likes: 78,
          watched: 180,
        },
        {
          postId: 6,
          user: User[1],
          content: `${6} ${userId}의 게시글`,
          images: [],
          createdAt: "",
          comments: [],
          retweet: 1,
          likes: 78,
          watched: 180,
        },
      ]);
    } else {
      return HttpResponse.json(
        { message: "no_such_user" },
        {
          status: 404,
        }
      );
    }
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
  http.get("/api/post/:username/:postId", ({ request, params }): StrictResponse<any> => {
    console.log("abc!");
    const { username, postId } = params;
    const user = User.find((ele) => ele.id === username);
    const post = Posts.find((ele) => ele.postId === Number(postId));
    if (user && post) {
      return HttpResponse.json(post);
    } else {
      return HttpResponse.json(
        { message: "no_such_post" },
        {
          status: 404,
        }
      );
    }
  }),
  http.get("/api/posts/comments/:postId", ({ request, params }): StrictResponse<any> => {
    console.log("hah");
    const { postId } = params;
    // return HttpResponse.json({ message: "no_comments" });
    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: `${1} 게시글 ${postId}의 답글`,
        images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
        createdAt: faker.date.anytime(),
        comments: [],
        retweet: 14,
        likes: 113,
        watched: 123,
      },
      {
        postId: 2,
        user: User[0],
        content: `${2} 게시글 ${postId}의 답글`,
        images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
        createdAt: faker.date.anytime(),
        comments: [],
        retweet: 14,
        likes: 113,
        watched: 123,
      },
      {
        postId: 3,
        user: User[1],
        content: `${3} 게시글 ${postId}의 답글`,
        images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
        createdAt: faker.date.anytime(),
        comments: [],
        retweet: 14,
        likes: 113,
        watched: 123,
      },
      {
        postId: 4,
        user: User[2],
        content: `${4} 게시글 ${postId}의 답글`,
        images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
        createdAt: faker.date.anytime(),
        comments: [],
        retweet: 14,
        likes: 113,
        watched: 123,
      },
      {
        postId: 5,
        user: User[3],
        content: `${5} 게시글 ${postId}의 답글`,
        images: [{ imageId: 1, url: faker.image.urlLoremFlickr() }],
        createdAt: faker.date.anytime(),
        comments: [],
        retweet: 14,
        likes: 113,
        watched: 123,
      },
    ]);
  }),
  http.get("/api/followRecommends", ({ request }) => {
    return HttpResponse.json(User);
  }),
  http.get("/api/trends", ({ request }) => {
    return HttpResponse.json([
      { tagId: 1, title: "김광현", count: 121164 },
      { tagId: 2, title: "최정", count: 14 },
      { tagId: 3, title: "문승원", count: 1264 },
      { tagId: 4, title: "최지훈", count: 126123134 },
      { tagId: 5, title: "박성한", count: 1261314 },
      { tagId: 6, title: "전의산", count: 34534512314 },
      { tagId: 7, title: "서진용", count: 12364 },
      { tagId: 8, title: "조병현", count: 1264123234 },
      { tagId: 9, title: "하재훈", count: 12653245344 },
    ]);
  }),
];
