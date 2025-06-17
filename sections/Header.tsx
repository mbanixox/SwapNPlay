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
import MobileSideBar from "@/components/MobileSideBar";
import SignInDialog from "@/components/SignInDialog";

const Header = async () => {
  const session = await auth();

  return (
    <header className="header">
      <div className="flex justify-between items-center">
        <div className="lg:hidden flex">
          <MobileSideBar />
        </div>

        <Link href="/">
          <Image src={logo} alt="Site Logo" width={140} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          <ThemeToggler />
          {session && session?.user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="size-10">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || ""}
                    />
                    <AvatarFallback className="text-black dark:text-white">
                      {session?.user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white dark:bg-gray-800/40 backdrop-filter backdrop-blur-xl bg-opacity-10 border-white/20 dark:border-black/10"
                >
                  <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:bg-primary hover:dark:bg-gray-400">
                    <Link
                      href="/post-games"
                      className="text-extrabold text-blue-500 w-full h-full flex items-center gap-2"
                    >
                      <span>POST YOUR GAMES</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary hover:dark:bg-gray-400">
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
    </header>
  );
};

export default Header;
