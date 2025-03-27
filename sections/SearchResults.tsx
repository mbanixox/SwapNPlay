const SearchResult = ({ query }: { query?: string }) => {
  return (
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All games"}
      </p>
    </section>
  );
};

export default SearchResult;
