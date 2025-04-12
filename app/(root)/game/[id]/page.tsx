import GameHero from "@/sections/GameHero";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = Number((await params).id);
  
  return (
    <>
      <GameHero id={id} />
    </>
  );
};

export default Page;
