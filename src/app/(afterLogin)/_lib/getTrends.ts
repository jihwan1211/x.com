import axios from "axios";

export default async function getTrends() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trends`);
  if (response.statusText === "OK") return response.data;
}
