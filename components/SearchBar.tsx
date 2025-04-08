import { Search } from "lucide-react";
import Form from "next/form";
import SearchBarReset from "@/components/SearchBarReset";

const SearchBar = ({ searchQuery }: { searchQuery?: string }) => {

  return (
    <Form action="/" scroll={false} className="search-bar">
      <input
        name="searchQuery"
        defaultValue={searchQuery}
        className="search-input"
        placeholder="Search for games..."
      />

      <div className="flex gap-2">
        {searchQuery && (<SearchBarReset />)}
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
