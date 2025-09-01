"use client";

import { pinata } from "@/lib/pinata";
import { Loader2Icon, Upload, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { deleteImage } from "@/lib/image-actions";

const GameImageUpload = ({
  action,
}: {
  action: (cids: string[]) => Promise<void>;
}) => {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState<
    { url: string; cid: string; fileId: string }[]
  >([]);
  const [deletePending, setDeletePending] = useState<string | null>(null);

  useEffect(() => {
    action(image.map((img) => img.cid));
  }, [image, action]);

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
      setImage((prevImages) => [
        ...prevImages,
        { url: imageUrl, cid: upload.cid, fileId: upload.id },
      ]);

      setUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  const removeImage = async (fileId: string) => {
    setDeletePending(fileId);
    const result = await deleteImage(fileId);

    if (result.success) {
      setImage((prevImages) =>
        prevImages.filter((img) => img.fileId !== fileId)
      );
    }

    setDeletePending(null);
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
        {image.map((image, index) => (
          <div key={index} className="relative">
            <div className="relative">
              <Image
                src={image.url}
                alt={`Uploaded game image ${index + 1}`}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="absolute top-1 right-1">
              <button
                className="size-4 rounded-full bg-red-700 text-white flex items-center justify-center"
                onClick={() => removeImage(image.fileId)}
                disabled={deletePending === image.fileId}
              >
                {deletePending === image.fileId ? (
                  <Loader2Icon className="animate-spin size-3" />
                ) : (
                  <XIcon className="size-3" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameImageUpload;
