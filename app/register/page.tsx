import { auth } from "@/auth";
import SignInCard from "@/components/SignInCard";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignInCard />
    </div>
  );
};

export default Page;
