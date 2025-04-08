"use client";

import { fetchGenres } from "@/lib/actions";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import GenreItem from "@/components/GenreItem";
import { Genre } from "@/lib/types";
import Link from "next/link";

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[] | null>(null);

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data.results));
  }, []);

  if (!genres) {
    return (
      <div>
        <Loader2Icon className="animate-spin size-8" />
      </div>
    );
  }

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
