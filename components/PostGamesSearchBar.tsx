import { Search } from "lucide-react";
import Form from "next/form";
import SearchBarReset from "@/components/SearchBarReset";

const PostGamesSearchBar = ({ search }: { search?: string }) => {
  return (
    <Form
      action="/post-games"
      scroll={false}
      className="post_games-search_bar"
    >
      <input
        name="search"
        defaultValue={search}
        className="search-input"
        placeholder="Search for your game..."
      />

      <div className="flex gap-2">{search && <SearchBarReset />}</div>

      <div className="flex gap-2">
        <button type="submit" className="search-btn">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default PostGamesSearchBar;
