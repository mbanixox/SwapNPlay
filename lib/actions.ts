"use server";

export const fetchGenres = async () => {
  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }
  return res.json();
};
