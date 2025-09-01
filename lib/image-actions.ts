"use server";

import { pinata } from "@/lib/pinata";

export async function deleteImage(fileId: string) {
    try {
        await pinata.files.public.delete([fileId]);
        return { success: true };
        
    } catch (error) {
        console.error("Error deleting image:", error);
        return { success: false };
    }
}

export async function getImageCIDs(cids: string[]) {
    console.log("Received CIDs:", cids);
}