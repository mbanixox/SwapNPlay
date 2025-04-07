import GameList from "@/components/GameList";
import SideBar from "@/components/SideBar";
import { fetchGames } from "@/lib/actions";
import { Loader2Icon } from "lucide-react";

const GameDisplay = async ({ query }: { query?: string }) => {
  const data = await fetchGames({ query });

  if (!data.results) {
    return (
      <div>
        <Loader2Icon className="animate-spin size-8" />
      </div>
    );
  }

  const games = data.results;

  return (
    <section className="section_container">
      <p className="text-30-semibold">{query ? `${query}` : "Games"}</p>
      <div className="flex flex-row gap-4 mt-4">
        <SideBar />
        <div className="flex-1 w-full space-y-8">
          <GameList games={games}/>
        </div>
      </div>
    </section>
  );
};

export default GameDisplay;
