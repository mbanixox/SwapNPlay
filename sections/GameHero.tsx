import GameDescription from "@/components/GameDescription";
import Screenshots from "@/components/Screenshots";
import { fetchGameDetails } from "@/lib/actions";
import { StarIcon } from "lucide-react";

const GameHero = async ({ id }: { id: number }) => {
  const gameDetails = await fetchGameDetails({ id: id.toString() });

  const { name, background_image, rating } = gameDetails;
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
          backgroundImage: `linear-gradient(to bottom, rgba(24, 62, 194, 0.5), rgba(234, 238, 254, 0.8)), url(${background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
        }}
      ></div>
      <div className="z-10 flex flex-col w-full md:max-w-7xl">
        <div className="justify-center items-center m-6">
          <h1
            className="text-5xl font-bold tracking-tighter bg-gradient-to-b text-left
             from-black dark:from-white to-[#001E80] text-transparent bg-clip-text"
          >
            {name}
          </h1>
          <div className="flex items-center justify-between space-x-6 mx-1">
            <span className="flex items-center text-sm">
              {rating}
              <StarIcon className="ml-1 size-4 text-yellow-500 fill-current" />
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <Screenshots id={id} />
          <GameDescription description={description} />
        </div>
      </div>
    </section>
  );
};

export default GameHero;
