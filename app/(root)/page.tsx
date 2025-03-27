import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";

export default async function Home() {  
  return (
    <>
    <Hero searchParams={Promise.resolve({ query: "" })} />
    <LogoTicker />
    </>
  );
}
