import { fetchGenres } from "@/lib/actions";
import GenreItem from "@/components/GenreItem";
import { Genre } from "@/lib/types";
import Link from "next/link";

const GenreList = async () => {
  const data = await fetchGenres();
  const genres: Genre[] = data?.results;

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <Link href="/" className="genre_item text-2xl">
        All games
      </Link>
      {genres.map((genre) => (
        <GenreItem key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default GenreList;
