import GameDescription from "@/components/GameDescription";
import Screenshots from "@/components/Screenshots";
import { fetchGameDetails } from "@/lib/actions";

const GameHero = async ({ id }: { id: number }) => {
 
  
  const gameDetails = await fetchGameDetails({ id: id.toString() });

  const { name, background_image } = gameDetails;
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
      <div className="relative z-10 text-center flex flex-col md:flex-row w-full md:max-w-7xl">
        <div className="flex-1 justify-center items-center">
          <h1
            className="text-5xl font-bold tracking-tighter bg-gradient-to-b
             from-black dark:from-white to-[#001E80] text-transparent bg-clip-text py-2"
          >
            {name}
          </h1>
          <GameDescription description={description} />
        </div>
        <Screenshots id={id} />
      </div>
    </section>
  );
};

export default GameHero;
