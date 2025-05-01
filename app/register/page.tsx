import { auth } from "@/auth";
import SignInCard from "@/components/SignInCard";
import { redirect } from "next/navigation";

const Page = async ({ searchParams }: { searchParams: Promise<{ form?: string }> }) => {
  const session = await auth();
  if (session) redirect("/");
  const { form } = await searchParams;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignInCard form={form} />
    </div>
  );
};

export default Page;
