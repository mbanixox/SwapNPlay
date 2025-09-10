import { fetchGameDetails } from "@/lib/actions";
import Form from "next/form";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import PostGamesFormWrapper from "./PostGamesFormWrapper";
import { redirect } from "next/navigation";

const PostGamesForm = async ({ search }: { search?: string }) => {
  const game = search ? await fetchGameDetails({ id: search }) : null;

  const submitForm = async (formData: FormData) => {
    "use server";

    const session = await auth();
    if (!session?.user?.id) {
      redirect("/register?form=signin");
    }

    const platform = formData.get("platform") as string;
    const condition = formData.get("condition") as string;
    const notes = formData.get("notes") as string;
    const imageCIDs = formData.get("image-cids") as string;

    const cids = imageCIDs ? JSON.parse(imageCIDs) : [];

    try {
      let gameRecord = await prisma.game.findUnique({
        where: {
          rawgId: game?.id,
        },
      });

      if (!gameRecord && game) {
        gameRecord = await prisma.game.create({
          data: {
            rawgId: game.id,
            title: game.name,
            platform: [platform],
            imageUrl: game.background_image || "",
          },
        });
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
          imagesCids: cids,
        },
      });

    } catch (error) {
      console.error("Error creating game record:", error);
    }

    redirect("/post-games");
  };

  return (
    <>
      <div className="text-3xl">
        <Form action={submitForm}>
          <PostGamesFormWrapper game={game} />
        </Form>
      </div>
    </>
  );
};

export default PostGamesForm;
