import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { auth, signIn, signOut } from "@/auth";
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

const Header = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 shadow-sm font-outfit sticky top-0 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Site Logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="">
                <FavoriteIcon className="text-black dark:text-white"/>
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
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
              >
                <span>sign-in</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
