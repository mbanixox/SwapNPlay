import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/lib/auth-actions";

const SignInForm = () => {

    
  return (
    <form
      action={loginUser}
    >
      <div className="space-y-1">
        <Label htmlFor="email" className="text-base">
          Email
        </Label>
        <Input
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>

      <div className="space-y-1 mt-3">
        <Label htmlFor="password" className="text-base">
          Password
        </Label>
        <Input name="password" type="password" required />
      </div>

      <div className="text-right">
        <Button variant="link" className="p-0 h-auto text-xs text-black-300">
          Forgot password?
        </Button>
      </div>

      <Button
        type="submit"
        className="w-full my-5 hover:bg-gray-400 dark:bg-gray-400 hover:dark:bg-gray-500"
      >
        Sign in with Email
      </Button>
    </form>
  );
};

export default SignInForm;
