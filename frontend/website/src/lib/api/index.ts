import apiBaseUrl from "$lib/utils/api-url";

export async function getPosts(tag?: string, limit?: number) {
  const params = new URLSearchParams();
  if (tag) params.append('tag', tag);
  if (limit) params.append('limit', String(limit));
  const res = await fetch(`${apiBaseUrl}/posts?${params.toString()}`);
  return res.json();
}

export async function getPost(urlTitle: string) {
  const res = await fetch(`${apiBaseUrl}/posts/${urlTitle}`);
  return res.json();
}
