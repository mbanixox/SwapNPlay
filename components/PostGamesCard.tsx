import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const PostGamesCard = async ({ search }: { search?: string }) => {
  const game = search ? await fetchGameDetails({ id: search }) : null;

  return (
    <Card className="font-outfit bg-white dark:bg-black-100 dark:text-white p-3 m-1 rounded-lg shadow-lg max-w-md w-full">
      <CardHeader>
        <CardTitle>Post Your Games</CardTitle>
        <CardDescription>
          <p>Share your gaming experiences with the community!</p>
          <p>Here you can post your games and share them with others.</p>
          <Separator className="flex-1 border-t border-gray-300 dark:border-gray-700 mt-3" />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <PostGamesSearchBar />
        <GameImageUpload />
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
                  <SelectItem value="PS4" className="hover:bg-primary hover:dark:bg-gray-400">
                    PS4
                  </SelectItem>
                  <SelectItem value="PS5" className="hover:bg-primary hover:dark:bg-gray-400">
                    PS5
                  </SelectItem>
                  <SelectItem value="xbox-one" className="hover:bg-primary hover:dark:bg-gray-400">
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
                  <SelectItem value="used" className="hover:bg-primary hover:dark:bg-gray-400">
                    Used
                  </SelectItem>
                  <SelectItem value="brand-new" className="hover:bg-primary hover:dark:bg-gray-400">
                    Brand New
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1 mt-3">
            <Label htmlFor="notes">Notes</Label>
            <Textarea placeholder="Write a short description of your game to attract traders." />
          </div>
          <Button
            type="submit"
            className="w-full mt-8 mb-3 hover:bg-gray-400 dark:bg-gray-400 hover:dark:bg-gray-500"
          >
            Post your Game
          </Button>
        </Form>
      </CardContent>
      
    </Card>
  );
};

export default PostGamesCard;
