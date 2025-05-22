"use client";

import { useState, useEffect, useRef } from "react";
import { Loader2Icon, Search } from "lucide-react";
import { fetchGames } from "@/lib/actions";
import { Game } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

const PostGamesSearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  })

  useEffect(() => {
    if (!search) setResults([]);
  }, [search]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetchGames({ searchQuery: search });
      setResults(data.results);
    } catch (err) {
      console.error(err);
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto" ref={searchRef}>
      <form
        onSubmit={handleSearch}
        className="min-h-[20px] bg-gray-400 backdrop-filter 
        backdrop-blur-md bg-opacity-10 border-[1px] border-black 
        rounded-lg text-[16px] px-5 flex flex-row items-center gap-5"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          placeholder="Search for your game..."
        />

        <div className="flex gap-2">
          <button type="submit" className="search-btn">
            <Search className="size-5" />
          </button>
        </div>
      </form>

      {loading && (
        <div className="flex justify-center items-center w-full mt-2">
          <Loader2Icon className="animate-spin size-5" />
        </div>
      )}

      {search && results.length > 0 && (
        <ul className="bg-white mt-3 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {results.map((game) => (
            <li key={game.id} className="cursor-pointer border-b">
              <Link
                href={`/post-games/?search=${game.slug}`}
                className="block px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {game.background_image && (
                    <Image
                      src={game?.background_image}
                      alt={game.name}
                      width={48}
                      height={48}
                      className="object-cover rounded w-12 h-12"
                    />
                  )}
                  <div>
                    <h3 className="font-medium">{game.name}</h3>
                    <p className="text-sm text-gray-600">
                      {game.released && new Date(game.released).getFullYear()}
                      {game.genres?.length > 0 && ` • ${game.genres[0].name}`}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostGamesSearchBar;
