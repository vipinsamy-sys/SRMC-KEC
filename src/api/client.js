const BASE = import.meta.env.VITE_API_URL || "/api";

export async function api(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  const isJson = (res.headers.get("content-type") || "").includes("application/json");
  const data = isJson ? await res.json().catch(() => ({})) : {};

  if (!res.ok) {
    const detail = typeof data.detail === "string" ? data.detail : "Something went wrong";
    throw new Error(detail);
  }
  return data;
}

export const authApi = {
  register: (payload) => api("/auth/register", { method: "POST", body: JSON.stringify(payload) }),
  login: (payload) => api("/auth/login", { method: "POST", body: JSON.stringify(payload) }),
  logout: () => api("/auth/logout", { method: "POST" }),
  me: () => api("/auth/me"),
};
