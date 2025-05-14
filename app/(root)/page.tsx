import HomeHero from "@/sections/HomeHero";
import LogoTicker from "@/sections/LogoTicker";
import GameDisplay from "@/sections/GameDisplay";
import { Suspense } from "react";
import { Loader2Icon } from "lucide-react";

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
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full mt-2">
            <Loader2Icon className="animate-spin size-5" />
          </div>
        }
      >
        <GameDisplay searchQuery={searchQuery} genreQuery={genreQuery} />
      </Suspense>
    </>
  );
}
