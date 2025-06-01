"use client";

import { Upload } from "lucide-react";

const GameImageUpload = () => {
  return (
    <>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center 
        cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-400/10 transition-colors"
      >
        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm font-medium">Click to upload game images</p>
        <p className="text-xs text-gray-500 mt-1">PNG, JPG or WEBP</p>
      </div>
    </>
  );
};

export default GameImageUpload;
