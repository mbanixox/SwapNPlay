import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import FacebookIcon from "@/assets/svg/FacebookIcon";
import { signIn } from "@/auth";

const SignInButtons = () => {
  return (
    <div className="flex flex-row gap-4 py-4">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
        className="flex-1"
      >
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 text-base hover:bg-primary hover:dark:bg-gray-400"
        >
          <GoogleIcon />
          <span className="pl-2">Google</span>
        </Button>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("facebook");
        }}
        className="flex-1"
      >
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 text-base hover:bg-primary hover:dark:bg-gray-400"
        >
          <FacebookIcon />
          <span className="pl-2">Facebook</span>
        </Button>
      </form>
    </div>
  );
};

export default SignInButtons;
