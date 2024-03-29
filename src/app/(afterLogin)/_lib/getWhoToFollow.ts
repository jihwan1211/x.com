import axios from "axios";

export default async function getWhoToFollow() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/followRecommends`);
  if (response.statusText === "OK") return response.data;
}
