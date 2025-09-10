"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import GameImageUpload from "@/components/GameImageUpload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Game } from "@/lib/types";
import { Loader2Icon } from "lucide-react";

const PostGamesFormWrapper = ({ game }: { game: Game }) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <>
      <div className="my-3">
        <GameImageUpload onUploadStateChange={setIsUploading} />
      </div>

      <div className="space-y-1 mt-3">
        <Label htmlFor="game-name">Game Name</Label>
        <Input
          name="game-name"
          value={game?.name ?? ""}
          readOnly
          placeholder="Game Name"
        />
      </div>
      <div className="space-y-1 mt-3">
        <Label htmlFor="platform">Platform</Label>
        <Select name="platform">
          <SelectTrigger>
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-black-100 font-outfit">
            <SelectGroup>
              <SelectItem
                value="PS4"
                className="hover:bg-primary hover:dark:bg-gray-400"
              >
                PS4
              </SelectItem>
              <SelectItem
                value="PS5"
                className="hover:bg-primary hover:dark:bg-gray-400"
              >
                PS5
              </SelectItem>
              <SelectItem
                value="xbox-one"
                className="hover:bg-primary hover:dark:bg-gray-400"
              >
                Xbox One
              </SelectItem>
              <SelectItem
                value="xbox-seriesX"
                className="hover:bg-primary hover:dark:bg-gray-400"
              >
                Xbox Series X
              </SelectItem>
              <SelectItem
                value="NintendoSwitch"
                className="hover:bg-primary hover:dark:bg-gray-400"
              >
                Nintendo Switch
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1 mt-3">
        <Label htmlFor="condition">Condition</Label>
        <Select name="condition">
          <SelectTrigger>
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-black-100 font-outfit">
            <SelectGroup>
              <SelectItem
                value="used"
                className="hover:bg-primary hover:dark:bg-gray-400"
              >
                Used
              </SelectItem>
              <SelectItem
                value="brand-new"
                className="hover:bg-primary hover:dark:bg-gray-400"
              >
                Brand New
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1 mt-3">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          name="notes"
          placeholder="Write a short description of your game to attract traders."
          rows={4}
        />
      </div>
      <Button
        type="submit"
        disabled={isUploading}
        className="w-full mt-8 mb-3 hover:bg-gray-400 dark:bg-gray-400 hover:dark:bg-gray-500"
      >
        {isUploading ? (
          <>
            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
            Uploading Images...
          </>
        ) : (
          "Post your Game"
        )}
      </Button>
    </>
  );
};

export default PostGamesFormWrapper;