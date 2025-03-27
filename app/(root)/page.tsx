import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import SearchResults from "@/sections/SearchResults";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <Hero query={query} />
      <LogoTicker />
      <SearchResults query={query} />
    </>
  );
}
