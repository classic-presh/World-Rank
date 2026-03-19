"use server";

export async function apiFetch(url: string, options: RequestInit = {}) {
  const res = await fetch(url, { ...options, next: { revalidate: 86400 } });

  console.log("URL:", url);
  console.log("Status:", res.status);
  console.log("Status text:", res.statusText);

  if (!res.ok) {
    const text = await res.text();
    console.log("API error response:", text);
    throw new Error(`API Error: ${res.status}`);
  }

  const data = await res.json();
  console.log(data);

  return data;
}
