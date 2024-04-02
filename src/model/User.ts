// { id: "elonmusk", nickname: "Elon Musk", image: faker.image.avatar(), UId: faker.number.int({ min: 10, max: 10000000000 }) },
export interface User {
  id: string;
  nickname: string;
  image: string;
  UId: number;
  createdAt: Date;
}
