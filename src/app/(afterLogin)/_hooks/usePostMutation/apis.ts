export async function fetchPost(formData: FormData) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
}
