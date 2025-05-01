"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone: formData.get("phone"),
  };

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/register`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(rawFormData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  await signIn("credentials", {
    email: rawFormData.email,
    password: rawFormData.password,
  });
}

export async function loginUser(formData: FormData) {
  const result = await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirect: false,
  });

  if (result?.error) {
    throw new Error(result.error);
  }

  redirect("/");
}
