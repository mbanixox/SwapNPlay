import MenuIcon from "@/assets/svg/MenuIcon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import GenreList from "@/components/GenreList";

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
        <GenreList />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
