import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { auth, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "@/components/ThemeToggler";
import FavoriteIcon from "@/assets/svg/FavoriteIcon";
import MobileSideBar from "@/components/MobileSideBar";
import HeaderScrollEffect from "@/components/HeaderScrollEffect";
import SignInDialog from "@/components/SignInDialog";

const Header = async () => {
  const session = await auth();

  return (
    <HeaderScrollEffect>
      <div className="flex justify-between items-center">
        <div className="lg:hidden flex">
          <MobileSideBar />
        </div>

        <Link href="/">
          <Image src={logo} alt="Site Logo" width={140} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="">
                <FavoriteIcon className="text-black dark:text-white" />
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="size-10">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || ""}
                    />
                    <AvatarFallback>
                      {session?.user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ThemeToggler />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <form
                      action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/" });
                      }}
                    >
                      <button type="submit">
                        <span>Logout</span>
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <SignInDialog />
          )}
        </div>
      </div>
    </HeaderScrollEffect>
  );
};

export default Header;
