"use client";

import Link from "next/link";

const SearchBarReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-bar") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn">
        X
      </Link>
    </button>
  );
};

export default SearchBarReset;
