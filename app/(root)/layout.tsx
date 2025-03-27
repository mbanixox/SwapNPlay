import Header from "../../sections/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-outfit">
      <Header />
      {children}
    </main>
  );
}
