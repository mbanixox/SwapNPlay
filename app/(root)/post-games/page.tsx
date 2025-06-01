import PostGamesForm from "@/components/PostGamesForm";
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
      <div className="flex justify-center items-center min-h-screen">
        <PostGamesForm search={search} />
      </div>
    </>
  );
};

export default Page;
