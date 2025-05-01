import { prisma } from "@/lib/prisma";
import argon2 from "argon2";

export async function createUserWithPassword({
  name,
  email,
  password,
  phone,
}: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) {
  const hashPassword = await argon2.hash(password);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashPassword,
      phone,
    },
  });

  return user;
}

export async function verifyPassword(
  hashPassword: string,
  password: string
): Promise<boolean> {
  return await argon2.verify(hashPassword, password);
}
