"use client";

import { useState } from "react";

const GameDescription = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 400;
  const canExpand = description.length > maxLength;
  const displayedDescription = isExpanded
    ? description
    : description.substring(0, maxLength) + "...";

  return (
    <p className="text-xl text-[#010D3E] dark:text-white tracking-tight text-left mt-10">
      {displayedDescription}
      {canExpand && (
        <span
          className="text-blue-500 cursor-pointer ml-2 border-b-2 border-blue-500 hover:border-blue-700 hover:text-blue-700 transition-all duration-300 ease-in-out"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? " Show less" : " Show more"}
        </span>
      )}
    </p>
  );
};

export default GameDescription;
