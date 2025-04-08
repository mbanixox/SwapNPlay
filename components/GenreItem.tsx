import { Genre } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const GenreItem = ({ genre }: { genre: Genre }) => {
  return (
    <Link
      href={`/?genreQuery=${genre.slug}`}
      className="genre_item"
    >
      <Image
        src={genre.image_background}
        alt={genre.slug}
        width={1080}
        height={1080}
        className="aspect-square object-cover size-12 md-size-16 
        rounded-2xl"
      />
      <p className="text-base md:text-xl font-semibold">{genre.name}</p>
    </Link>
  );
};

export default GenreItem;
