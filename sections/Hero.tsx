import SearchBar from "@/components/SearchBar";

const Hero = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {

    const query = (await searchParams).query;
  return (
    <section className="home_container">
      <div>
        <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text py-2">
          Trade-in your games. Sell your games. Buy games.
        </h1>

        <p className="text-xl text-[#010D3E] tracking-tight mt-6 mb-10">
          Trade your games with a community of gamers. Sell your games to other
          gamers. Buy games from other gamers. All in one place.
        </p>

        <SearchBar query={query} />
      </div>
    </section>
  );
};

export default Hero;
