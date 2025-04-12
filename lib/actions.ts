"use server";

import { Genre, Screenshot } from "@/lib/types";

export const fetchGenres = async () => {
  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }
  return res.json();
};

export const fetchGames = async ({ searchQuery }: { searchQuery?: string }) => {
  const playStation5ID = 187;
  const playStation4ID = 18;
  const xBoxSeriesXID = 186;
  const xBoxOneID = 1;
  const nintendoSwitchID = 7;

  const res = await fetch(
    searchQuery
      ? `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&platforms=${playStation5ID},${playStation4ID},${xBoxSeriesXID},${xBoxOneID},${nintendoSwitchID}&search=${searchQuery}`
      : `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&platforms=${playStation5ID},${playStation4ID},${xBoxSeriesXID},${xBoxOneID},${nintendoSwitchID}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }
  return res.json();
};

export const fetchGamesByGenre = async ({ genreQuery }: { genreQuery?: string }) => {
  const playStation5ID = 187;
  const playStation4ID = 18;
  const xBoxSeriesXID = 186;
  const xBoxOneID = 1;
  const nintendoSwitchID = 7;

  const res = await fetch(
    genreQuery
      ? `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&platforms=${playStation5ID},${playStation4ID},${xBoxSeriesXID},${xBoxOneID},${nintendoSwitchID}&genres=${genreQuery}`
      : `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&platforms=${playStation5ID},${playStation4ID},${xBoxSeriesXID},${xBoxOneID},${nintendoSwitchID}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }
  return res.json();
};

export const fetchGenreDetails = async ({ genreQuery }: { genreQuery?: string }): Promise<Genre> => {
  if (!genreQuery) {
    throw new Error("Genre query is required to fetch genre details");
  }

  const res = await fetch(
    `https://api.rawg.io/api/genres/${genreQuery}?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genre details");
  }

  return res.json();
};

export const fetchGameDetails = async ({ id }: { id: string }) => {
  const res = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch game details");
  }

  return res.json();
};

export const fetchGameScreenshots = async ({ id }: { id: string }): Promise<Screenshot[]> => {
  const res = await fetch(
    `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch game screenshots");
  }

  const data = await res.json();
  return data.results;
};

