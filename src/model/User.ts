interface UserID {
  id: string;
}

export interface User {
  id: string;
  nickname: string;
  // password: string;
  image: string;
  // Posts: [];
  Followers: UserID[];
  _count: {
    Followers: number;
    Followings: number;
  };
}
