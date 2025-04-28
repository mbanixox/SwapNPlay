"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import SignInButtons from "@/components/SignInButtons";

const SignInCard = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Card className="font-outfit bg-white dark:bg-black-100 dark:text-white p-3 rounded-lg shadow-lg max-w-md w-full">
      {isRegister ? (
        <>
          <CardHeader className="text-center">
            <CardTitle>Register</CardTitle>
            <CardDescription>Create an account.</CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="space-y-1 mb-3">
                <Label htmlFor="name" className="text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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
              </div>

              <div className="space-y-1 mt-3">
                <Label htmlFor="phone" className="text-base">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="text"
                  placeholder="e.g. 07000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full my-5">
                Create account
              </Button>
            </form>

            <div className="flex items-center justify-between">
              <Separator className="flex-1 border-t border-gray-300 dark:border-gray-700" />
              <span className="mx-2 text-xs text-muted-foreground">OR</span>
              <Separator className="flex-1 border-t border-gray-300 dark:border-gray-700" />
            </div>

            <SignInButtons />
          </CardContent>
          <CardFooter className="text-center items center justify-center text-sm text-muted-foreground">
            Already have an account?
            <Button
              variant="link"
              className="p-0 pl-3 h-auto text-blue-500 hover:text-blue-700"
              onClick={() => setIsRegister(false)}
            >
              Sign in
            </Button>
          </CardFooter>
        </>
      ) : (
        <>
          <CardHeader className="text-center">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form>
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
              </div>

              <div className="text-right">
                <Button
                  variant="link"
                  className="p-0 h-auto text-xs text-black-300"
                >
                  Forgot password?
                </Button>
              </div>

              <Button type="submit" className="w-full my-5">
                Sign in with Email
              </Button>
            </form>

            <div className="flex items-center justify-between">
              <Separator className="flex-1 border-t border-gray-300 dark:border-gray-700" />
              <span className="mx-2 text-xs text-muted-foreground">OR</span>
              <Separator className="flex-1 border-t border-gray-300 dark:border-gray-700" />
            </div>

            <SignInButtons />
          </CardContent>
          <CardFooter className="text-center items center justify-center text-sm text-muted-foreground">
            Don&apos;t have an account?
            <Button
              variant="link"
              className="p-0 pl-3 h-auto text-blue-500 hover:text-blue-700"
              onClick={() => setIsRegister(true)}
            >
              Sign in
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default SignInCard;
