import Header from "../../sections/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-outfit min-h-screen bg-white dark:bg-black-200 text-black dark:text-white">
      <Header />
      {children}
    </main>
  );
}
