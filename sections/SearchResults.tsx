const SearchResult = ({ query }: { query?: string }) => {
  return (
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `${query}` : "Games"}
      </p>
    </section>
  );
};

export default SearchResult;
