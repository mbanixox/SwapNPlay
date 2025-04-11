import GameDescription from "@/components/GameDescription";
import { fetchGameDetails, fetchGameScreenshots } from "@/lib/actions";
import { Game } from "@/lib/types";
import Image from "next/image";

const GameHero = async ({ game }: { game: Game }) => {
  const gameScreenshot = await fetchGameScreenshots({
    id: game.id.toString(),
  });

  const gameDetails = await fetchGameDetails({ id: game.id.toString() });
  const description = gameDetails.description
    .replace(/<[^>]*>/g, "")
    .replace(/Español[\s\S]*/i, "")
    .trim();

  return (
    <section
      className="w-full min-h-[500px] flex justify-center items-center 
      flex-col py-10 px-6 drop-shadow relative"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(24, 62, 194, 0.5), rgba(234, 238, 254, 0.8)), url(${game.background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
        }}
      ></div>
      <div className="relative z-10 text-center flex flex-col md:flex-row w-full md:max-w-7xl">
        <div className="flex-1 justify-center items-center">
          <h1
            className="text-5xl font-bold tracking-tighter bg-gradient-to-b
             from-black dark:from-white to-[#001E80] text-transparent bg-clip-text py-2"
          >
            {game.name}
          </h1>
          <GameDescription description={description} />
        </div>
        <div className="flex-1 flex flex-wrap gap-2 pl-6">
          {gameScreenshot.map((screenshot) => (
            <Image
              key={screenshot.id}
              src={screenshot.image}
              alt={`${game.name} screenshot, image id: ${screenshot.id} (RAWG)`}
              width={184}
              height={102}
              className="object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameHero;
