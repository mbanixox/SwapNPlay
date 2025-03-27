import { Search } from "lucide-react";
import Form from "next/form";
import SearchBarReset from "./SearchBarReset";

const SearchBar = ({ query }: { query?: string }) => {



  return (
    <Form action="/" scroll={false} className="search-bar">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search for games..."
      />

      <div className="flex gap-2">
        {query && (<SearchBarReset />)}
      </div>

      <div className="flex gap-2">
        <button type="submit" className="search-btn">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchBar;
