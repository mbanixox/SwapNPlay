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
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const PostGamesForm = async ({ search }: { search?: string }) => {
  const game = search ? await fetchGameDetails({ id: search }) : null;

  const submitForm = async (formData: FormData) => {
    "use server";

    const session = await auth();
    if (!session?.user?.id) {
      throw new Error("User not authenticated");
    }

    const platform = formData.get("platform") as string;
    const condition = formData.get("condition") as string;
    const notes = formData.get("notes") as string;
    const imageCIDs = formData.get("image-cids") as string;

    const cids = imageCIDs ? JSON.parse(imageCIDs) : [];

    try {
      let gameRecord = await prisma.game.findUnique({
        where: {
          rawgId: game?.id
        }
      });

      if (!gameRecord && game) {
        gameRecord = await prisma.game.create({
          data: {
            rawgId: game.id,
            title: game.name,
            platform: [platform],
            imageUrl: game.background_image || ""
          }
        })
      }

      if (!gameRecord) {
        throw new Error("Game record not found in database");
      }

      await prisma.listing.create({
        data: {
          userId: session.user.id,
          gameId: gameRecord.id,
          platform: platform,
          condition: condition,
          notes: notes,
          imagesCids: cids
        }
      });

      // redirect to listings page
      
    } catch (error) {
      console.error("Error creating game record:", error);
    }
  }

  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <div className="m-3 pb-5">
        <PostGamesSearchBar />
      </div>

      <div className="text-3xl">
        <Form action={submitForm}>
          <div className="my-3">
            <GameImageUpload />
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
