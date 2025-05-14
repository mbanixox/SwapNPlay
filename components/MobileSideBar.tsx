import MenuIcon from "@/assets/svg/MenuIcon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import GenreList from "@/components/GenreList";
import { Suspense } from "react";
import { Loader2Icon } from "lucide-react";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="bg-white-100 dark:bg-black-200 border-none overflow-auto ">
        <SheetHeader>
          <SheetTitle>Game Genres</SheetTitle>
        </SheetHeader>
        <Suspense
          fallback={
            <div className="flex justify-center items-center w-full mt-2">
              <Loader2Icon className="animate-spin size-5" />
            </div>
          }
        >
          <GenreList />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
