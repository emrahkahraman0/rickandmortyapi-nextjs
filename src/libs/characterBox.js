export default async function characterBox() {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return await response.json();
}
