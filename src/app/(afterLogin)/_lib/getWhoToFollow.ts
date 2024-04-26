export default async function getWhoToFollow() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/followRecommends`, {
    credentials: "include",
  });
  if (response.ok) {
    return response.json();
  }
}
