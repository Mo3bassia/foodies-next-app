import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Database is offline now. Please try again later");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeal(meal) {
  meal.instructions = xss(meal.instructions);
  meal.slugify = slugify(meal.title, { lower: true });
}
