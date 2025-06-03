"use client";

import { pinata } from "@/lib/pinata";
import { Upload } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const GameImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target?.files?.[0];
    if (selectedFile) {
      uploadImage(selectedFile);
    }
  };

  const uploadImage = async (selectedFile: File) => {
    if (!selectedFile) {
      console.error("No file selected for upload");
      return;
    }

    try {
      setUploading(true);

      const urlRequest = await fetch("/api/url");
      const urlResponse = await urlRequest.json();
      const upload = await pinata.upload.public
        .file(selectedFile)
        .url(urlResponse.url);

      const imageUrl = await pinata.gateways.public.convert(upload.cid);
      setUrl((prevUrls) => [...prevUrls, imageUrl]);

      setUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  return (
    <>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center 
        cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-400/10 transition-colors"
        onClick={() => {
          document.getElementById("game-image-upload")?.click();
        }}
      >
        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm font-medium">
          {uploading ? "Uploading..." : "Click to upload game images"}
        </p>
        <p className="text-xs text-gray-500 mt-1">PNG, JPG or WEBP</p>
        <input
          type="file"
          id="game-image-upload"
          accept=".png,.jpg,.jpeg,.webp"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      <div className="mt-4 grid gap-4 grid-cols-3 md:grid-cols-5 place-items-center">
        {url.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`Uploaded game image ${index + 1}`}
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </>
  );
};

export default GameImageUpload;
