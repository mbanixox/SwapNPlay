import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SignInButtons from "@/components/SignInButtons";
import SignInForm from "@/components/SignInForm";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

const SignInCard = ({ form }: { form?: string }) => {
  const isRegister = form !== "signin";

  return (
    <Card className="font-outfit bg-white dark:bg-black-100 dark:text-white p-3 m-1 rounded-lg shadow-lg max-w-md w-full">
      {isRegister ? (
        <>
          <CardHeader className="text-center">
            <CardTitle>Register</CardTitle>
            <CardDescription>Create an account.</CardDescription>
          </CardHeader>

          <CardContent>
            <RegisterForm />

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
              asChild
            >
              <Link href="?form=signin">Sign in</Link>
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
            <SignInForm />

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
              asChild
            >
              <Link href="?form=register">Register</Link>
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default SignInCard;
