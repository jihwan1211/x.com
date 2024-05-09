export async function fetchComment(id: string, formData: FormData) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}/comments`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
}

// export async function fetchPost(id)
