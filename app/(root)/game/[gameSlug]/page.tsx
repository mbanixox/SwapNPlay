import GameHero from "@/sections/GameHero";
import { fetchGames } from "@/lib/actions";
import { Loader2Icon } from "lucide-react";

const Page = async ({ params }: { params: Promise<{ gameSlug: string }> }) => {
  const slug = (await params).gameSlug;

  const data = await fetchGames({});
  const game = data.results.find(
    (game: { slug: string }) => game.slug === slug
  );
  
  if (!data?.results) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2Icon className="animate-spin size-8" />
      </div>
    );
  }

  return (
    <>
      <GameHero game={game} />
    </>
  );
};

export default Page;
