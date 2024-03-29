import axios from "axios";

export async function getRecommendPosts() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`);
  // console.log("postResommends response!", response);
  if (response.statusText === "OK") return response.data;
}
