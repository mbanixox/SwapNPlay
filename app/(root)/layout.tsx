import Header from "@/sections/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-outfit min-h-screen bg-white dark:bg-[#09090b] text-black dark:text-white">
      <Header />
      {children}
    </main>
  );
}
