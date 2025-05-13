import GameHero from "@/sections/GameHero";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
    
  return (
    <>
      <GameHero slug={slug} />
    </>
  );
};

export default Page;
