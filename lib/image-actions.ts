"use server";

import { pinata } from "@/lib/pinata";

export async function deleteImage(fileId: string) {
    try {
        await pinata.files.public.delete([fileId]);
    } catch (error) {
        console.error("Error deleting image:", error);
    }
}