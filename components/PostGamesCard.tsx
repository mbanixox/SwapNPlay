import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PostGamesSearchBar from "@/components/PostGamesSearchBar";
import GameImageUpload from "./GameImageUpload";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const PostGamesCard = ({ search }: { search?: string }) => {
  return (
    <Card className="font-outfit bg-white dark:bg-black-100 dark:text-white p-3 m-1 rounded-lg shadow-lg max-w-md w-full">
      <CardHeader>
        <CardTitle>Post Your Games</CardTitle>
        <CardDescription>
          <p>Share your gaming experiences with the community!</p>
          <p>Here you can post your games and share them with others.</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <PostGamesSearchBar search={search}/>
        <GameImageUpload />
        <Input
        placeholder="Game Name" />
        <Input
        placeholder="platform"/>
        <Input
        placeholder="condition"/>
        <Textarea 
        placeholder="Notes"
        />

      </CardContent>
      <CardFooter className="flex justify-end">
        <button className="btn btn-primary">Post Game</button>
      </CardFooter>
    </Card>
  );
};

export default PostGamesCard;
