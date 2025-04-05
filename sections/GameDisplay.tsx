import SideBar from "@/components/SideBar";

const GameDisplay = ({ query }: { query?: string }) => {
  return (
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `${query}` : "Games"}
      </p>
      <SideBar />
    </section>
  );
};

export default GameDisplay;
