import axios from "axios";

export default async function getTrends() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hashtags/trends`, {
    credentials: "include",
  });
  if (response.ok) {
    return response.json();
  }
  // const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hashtags/trends`);
  // if (response.statusText === "OK") return response.data;
  // else return null;
  return null;
}
