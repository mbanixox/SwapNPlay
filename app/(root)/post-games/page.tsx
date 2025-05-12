import PostGamesCard from "@/components/PostGamesCard";

const Page = async ({
    searchParams,
  }: {
    searchParams: Promise<{ search?: string }>;
  }) => {

    const { search } = await searchParams;
    return (
        <div className="flex justify-center items-center min-h-screen">
            <PostGamesCard search={search} />
        </div>
        
    )
};

export default Page;