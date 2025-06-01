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
      <PostGamesForm search={search} />
    </>
  );
};

export default Page;
