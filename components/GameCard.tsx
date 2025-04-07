import { Game } from "@/lib/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div
      className="h-full px-0 pt-0 pb-2 bg-white rounded-3xl bg-clip-padding
        backdrop-filter backdrop-blur-md opacity-95
        dark:opacity-5 flex flex-col justify-between shadow-2xl"
    >
      <div className="flex flex-col">
        <Image
          src={game.background_image}
          alt={game.slug}
          width={1920}
          height={1080}
          className="rounded-t-2xl h-72 w-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold mt-4 text-black dark:text-white px-4">
            {game.name}
          </h3>
        </div>
        <div className="flex items-center justify-between space-x-6 mx-4 mt-8">
          <span className="flex items-center text-lg font-semibold">
            {game.rating}
            <StarIcon className="ml-1 size-4 text-yellow-500 fill-current" />
          </span>
            <Button className="w-full rounded-3xl text-black text-lg bg-[#24A0ED]">
                View                
            </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
