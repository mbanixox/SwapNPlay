import GenreList from "@/components/GenreList";
import { Loader2Icon } from "lucide-react";
import { Suspense } from "react";

const SideBar = () => {
  return (
    <div
      className="h-full overflow-y-auto hidden md:block w-80 p-6 bg-clip-padding bg-white 
    backdrop-filter backdrop-blur-md bg-opacity-95 dark:bg-opacity-5 shadow-2xl rounded-3xl"
    >
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full mt-2">
            <Loader2Icon className="animate-spin size-5" />
          </div>
        }
      >
        <GenreList />
      </Suspense>
    </div>
  );
};

export default SideBar;
