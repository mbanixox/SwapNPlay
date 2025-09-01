import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PostGamesSearchBar from "@/components/PostGamesSearchBar";
import GameImageUpload from "@/components/GameImageUpload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fetchGameDetails } from "@/lib/actions";
import Form from "next/form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getImageCIDs } from "@/lib/image-actions";

const PostGamesForm = async ({ search }: { search?: string }) => {
  const game = search ? await fetchGameDetails({ id: search }) : null;

  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <div className="m-3 pb-5">
        <PostGamesSearchBar />
      </div>

      <div className="my-3">
        <GameImageUpload action={getImageCIDs} />
      </div>

      <div className="text-3xl">
        <Form action="">
          <div className="space-y-1 mt-3">
            <Label htmlFor="game-name">Game Name</Label>
            <Input value={game?.name ?? ""} readOnly placeholder="Game Name" />
          </div>
          <div className="space-y-1 mt-3">
            <Label htmlFor="platform">Platform</Label>
            <Select>
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
            <Select>
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
            placeholder="Write a short description of your game to attract traders."
            rows={4} />
          </div>
          <Button
            type="submit"
            className="w-full mt-8 mb-3 hover:bg-gray-400 dark:bg-gray-400 hover:dark:bg-gray-500"
          >
            Post your Game
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default PostGamesForm;
