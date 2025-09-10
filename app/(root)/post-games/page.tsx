import PostGamesForm from "@/components/PostGamesForm";
import PostGamesSearchBar from "@/components/PostGamesSearchBar";
import PostGameHero from "@/sections/PostGameHero";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) => {
  const { search } = await searchParams;
  return (
    <>
      <PostGameHero />

      <section className="px-6 py-10 max-w-4xl mx-auto">
        <div className="m-3 pb-5">
          <PostGamesSearchBar />
          <PostGamesForm search={search} />
        </div>
      </section>
    </>
  );
};

export default Page;
