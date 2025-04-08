import Hero from "@/sections/Hero";
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
      <Hero searchQuery={searchQuery} />
      <LogoTicker />
      <GameDisplay
        searchQuery={searchQuery}
        genreQuery={genreQuery}
      />
    </>
  );
}
