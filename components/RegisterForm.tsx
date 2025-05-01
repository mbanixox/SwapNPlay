import { registerUser } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
  return (
    <form
      action={registerUser}
    >
      <div className="space-y-1 mb-3">
        <Label htmlFor="name" className="text-base">
          Name
        </Label>
        <Input name="name" type="text" required />
      </div>

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

      <div className="space-y-1 mt-3">
        <Label htmlFor="phone" className="text-base">
          Phone Number
        </Label>
        <Input name="phone" type="text" placeholder="e.g. 07000000" required />
      </div>

      <Button
        type="submit"
        className="w-full my-5 dark:bg-gray-400 hover:dark:bg-gray-500 hover:bg-gray-400"
      >
        Create account
      </Button>
    </form>
  );
};

export default RegisterForm;
