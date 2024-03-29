export interface IPost {
  content: string;
  createdAt: string;
  images: { imageId: number; url: string }[];
  postId: number;
  user: {
    id: string;
    image: string;
    nickname: string;
    UId: number;
  };
  comments: string[];
  retweet: number;
  likes: number;
  watched: number;
}
