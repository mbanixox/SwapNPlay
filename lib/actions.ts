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

export const fetchGames = async ({ query }: { query?: string }) => {
  const playStation5ID = 187;
  const playStation4ID = 18;
  const xBoxSeriesXID = 186;
  const xBoxOneID = 1;
  const nintendoSwitchID = 7;

  const res = await fetch(
    query
      ? `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&platforms=${playStation5ID},${playStation4ID},${xBoxSeriesXID},${xBoxOneID},${nintendoSwitchID}&search=${query}`
      : `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&platforms=${playStation5ID},${playStation4ID},${xBoxSeriesXID},${xBoxOneID},${nintendoSwitchID}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }
  return res.json();
};
