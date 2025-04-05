import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import GameDisplay from "@/sections/GameDisplay";

export default async function Home({ searchParams, }: { searchParams: Promise<{ query?: string }>;}) {

  const query = (await searchParams).query;
  

  return (
    <>
      <Hero query={query} />
      <LogoTicker />
      <GameDisplay query={query} />
    </>
  );
}
