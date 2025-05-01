"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SignInButtons from "@/components/SignInButtonsClient";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInDialog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result) router.refresh();

    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">
          <span>sign-in</span>
        </button>
      </DialogTrigger>
      <DialogContent className="font-outfit bg-white dark:bg-black-100 dark:text-white p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Sign in</DialogTitle>
          <DialogDescription className="text-center">
            Choose your preferred sign-in method
          </DialogDescription>
        </DialogHeader>

        <SignInButtons />

        <div className="flex items-center justify-between">
          <Separator className="flex-1 border-t border-gray-300 dark:border-gray-700" />
          <span className="mx-2 text-xs text-muted-foreground">OR</span>
          <Separator className="flex-1 border-t border-gray-300 dark:border-gray-700" />
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center p-2">{error}</div>
        )}

        <form onSubmit={handleSignIn}>
          <div className="space-y-1">
            <Label htmlFor="email" className="text-base">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1 mt-3">
            <Label htmlFor="password" className="text-base">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right">
              <Button
                variant="link"
                className="p-0 h-auto text-xs text-black-300"
              >
                Forgot password?
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full mt-2 dark:bg-gray-400 hover:dark:bg-gray-500 hover:bg-gray-400">
            {isLoading ? "Signing in..." : "Sign in with Email"}
          </Button>
        </form>

        <div className="mt-4 text-sm text-center">
          Don&apos;t have an account?
          <Link href="/register">
            <Button
              variant="link"
              className="p-0 pl-3 h-auto text-blue-500 hover:text-blue-700"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
