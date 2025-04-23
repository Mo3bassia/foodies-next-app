import fs from "node:fs";
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

export async function saveMeal(meal) {
  meal.instructions = xss(meal.instructions);
  meal.slug = slugify(meal.title, { lower: true });

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  console.log(fileName);

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;
  db.prepare(
    `
      INSERT INTO meals
       (title,image,slug,summary,instructions,creator,creator_email)
      VALUES (
        @title,
        @image,
        @slug,
        @summary,
        @instructions,
        @creator,
        @creator_email
      )
    `
  ).run(meal);
}
