const PostGameHero = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-blue-100 via-indigo-200 to-blue-50 
      dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 min-h-[250px] 
      flex justify-center items-center flex-col py-10 px-6 drop-shadow"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-b from-black dark:from-white to-[#001E80] text-transparent bg-clip-text py-2">
          Post your games.
        </h1>

        <p className="text-base text-[#010D3E] dark:text-white tracking-tight">
          Share your gaming experiences with the community!
        </p>
        <p className="text-base text-[#010D3E] dark:text-white tracking-tight">
          Here you can post your games and share them with others.
        </p>
      </div>
    </section>
  );
};

export default PostGameHero;
