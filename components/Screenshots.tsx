import { fetchGameScreenshots } from "@/lib/actions";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Screenshots = async ({ id }: { id: number }) => {
  const gameScreenshot = await fetchGameScreenshots({
    id: id.toString(),
  });

  return (
    <>
      <Carousel className="flex-1 md:m-5" opts={{ loop: true }} style={{ height: "326px" }}>
        <CarouselContent>
          {gameScreenshot.map((screenshot) => (
            <CarouselItem
              key={screenshot.id}
              className="w-full flex justify-center items-center"
            >
              <Image
                src={screenshot.image}
                alt={`image id: ${screenshot.id} (RAWG)`}
                width={580}
                height={326}
                className=" rounded-lg shadow-lg"
              />
            </CarouselItem>
          ))}
          
        </CarouselContent>
        <CarouselPrevious className="left-2 top-1/2 transform -translate-y-1/2 text-white rounded-full shadow-md z-20"/>
          <CarouselNext className="right-2 top-1/2 transform -translate-y-1/2 text-white rounded-full shadow-md" />
      </Carousel>
    </>
  );
};

export default Screenshots;
