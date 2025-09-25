"use server";

import { Genre, Screenshot } from "@/lib/types";

const base_url = process.env.BACKEND_URL;

export const fetchGenres = async () => {
  const res = await fetch(
    `${base_url}/genres`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }
  return res.json();
};

export const fetchGames = async ({ searchQuery }: { searchQuery?: string }) => {
 const res = await fetch(
    searchQuery
      ? `${base_url}/games?search=${searchQuery}`
      : `${base_url}/games`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }
  return res.json();
};

export const fetchGamesByGenre = async ({ genreQuery }: { genreQuery?: string }) => {
 const res = await fetch(
    genreQuery
      ? `${base_url}/games?genres=${genreQuery}`
      : `${base_url}/games`
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
    `${base_url}/genres/${genreQuery}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genre details");
  }

  return res.json();
};

export const fetchGameDetails = async ({ id }: { id: string }) => {
  const res = await fetch(
    `${base_url}/games/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch game details");
  }

  return res.json();
};

export const fetchGameScreenshots = async ({ id }: { id: string }): Promise<Screenshot[]> => {
  const res = await fetch(
    `${base_url}/games/${id}/screenshots`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch game screenshots");
  }

  const data = await res.json();
  return data.results;
};

