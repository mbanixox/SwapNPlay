import { Game } from "@/lib/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div
      className="h-full px-0 pt-0 pb-1 bg-white rounded-md bg-clip-padding
        backdrop-filter backdrop-blur-md opacity-95 hover:bg-primary
        dark:opacity-5 flex flex-col justify-between shadow-2xl"
    >
      <div className="flex flex-col">
        <div className="relative aspect-square">
           <Image
          src={game.background_image}
          alt={game.slug}
          fill
          className="rounded-t-md h-72 w-full object-cover"
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
    </div>
  );
};

export default GameCard;
