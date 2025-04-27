import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import FacebookIcon from "@/assets/svg/FacebookIcon";

const SignInButtons = () => {
  return (
    <div className="flex flex-row gap-4 py-4">
      <Button
        variant="outline"
        className="flex flex-1 items-center justify-center gap-2 text-base hover:bg-primary"
        onClick={() => signIn("google")}
      >
        <GoogleIcon />
        <span className="pl-2">Google</span>
      </Button>

      <Button
        variant="outline"
        className="flex flex-1 items-center justify-center gap-2 text-base hover:bg-primary"
        onClick={() => signIn("facebook")}
      >
        <FacebookIcon />
        <span className="pl-2">Facebook</span>
      </Button>
    </div>
  );
};

export default SignInButtons;
