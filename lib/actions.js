"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(prevState, formData) {
  function isInvalidText(element) {
    return !element || element.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size == 0
  ) {
    return {
      message: "Invalid Input",
    };
  } else {
    await saveMeal(meal);
    redirect("/meals");
  }
}
