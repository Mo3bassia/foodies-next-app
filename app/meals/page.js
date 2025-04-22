import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function page() {
  const meals = await getMeals();
  console.log(meals);
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>
            Delicious meals, created{" "}
            <span className={styles.highlight}>by you</span>
          </h1>
          <p>
            Choose your favourite recipe and cook it yourself. It is easy and
            fun!
          </p>
          <p className={styles.cta}>
            <Link href="/meals/share">Share your favourite recipe</Link>
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
