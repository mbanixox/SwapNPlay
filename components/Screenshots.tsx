import { fetchGameScreenshots } from "@/lib/actions";
import Image from "next/image";

const Screenshots = async ({ id }: { id: number }) => {
    const gameScreenshot = await fetchGameScreenshots({
        id: id.toString(),
      });
    
    return (
        <div className="flex-1 flex flex-wrap gap-2 pl-6">
          {gameScreenshot.map((screenshot) => (
            <Image
              key={screenshot.id}
              src={screenshot.image}
              alt={`image id: ${screenshot.id} (RAWG)`}
              width={184}
              height={102}
              className="object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
    );
};

export default Screenshots;