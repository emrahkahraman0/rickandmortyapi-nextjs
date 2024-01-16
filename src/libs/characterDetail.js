export default async function characterDetail(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user with user`);
  }

  return response.json();
}
