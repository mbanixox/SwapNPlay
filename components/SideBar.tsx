import GenreList from "@/components/GenreList";

const SideBar = () => {
  return (
    <div
      className="h-full overflow-y-auto hidden md:block w-80 p-6 bg-clip-padding bg-white 
    backdrop-filter backdrop-blur-md bg-opacity-95 dark:bg-opacity-5 shadow-2xl rounded-3xl"
    >
      <GenreList />
    </div>
  );
};

export default SideBar;
