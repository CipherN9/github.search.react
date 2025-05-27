const BASE = 'https://api.github.com/search';

export async function searchUsers(q: string) {
  const res = await fetch(`${BASE}/users?q=${encodeURIComponent(q)}`);
  const { items } = await res.json();
  return items;
}

export async function searchRepos(q: string) {
  const res = await fetch(`${BASE}/repositories?q=${encodeURIComponent(q)}`);
  const { items } = await res.json();
  return items;
}
