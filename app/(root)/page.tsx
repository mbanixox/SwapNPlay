import HomeHero from "@/sections/HomeHero";
import LogoTicker from "@/sections/LogoTicker";
import GameDisplay from "@/sections/GameDisplay";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ searchQuery?: string; genreQuery?: string }>;
}) {
  const { searchQuery, genreQuery } = await searchParams;

  return (
    <>
      <HomeHero searchQuery={searchQuery} />
      <LogoTicker />
      <GameDisplay
        searchQuery={searchQuery}
        genreQuery={genreQuery}
      />
    </>
  );
}
