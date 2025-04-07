import GameCard from "@/components/GameCard";
import { Game } from "@/lib/types";

const GameList = ({ games }: { games: Game[] }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
