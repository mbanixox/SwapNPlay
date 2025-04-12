import { Game } from "@/lib/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Link href={`/game/${game.id}`}
      className="game_card group"
    >
      <div className="flex flex-col">
        <div className="relative aspect-square">
           <Image
          src={game.background_image}
          alt={game.slug}
          fill
          className="rounded-t-md h-72 w-full object-cover group-hover:brightness-75"
        /> 
        </div>
        
        <div>
          <h3 className="text-lg font-medium mt-4 text-black dark:text-white px-4">
            {game.name}
          </h3>
        </div>
        <div className="flex items-center justify-between space-x-6 mx-4 mt-1">
          <span className="flex items-center text-sm text-black-100 ">
            {game.rating}
            <StarIcon className="ml-1 size-4 text-yellow-500 fill-current" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
