import Link from "next/link";
import styles from "./page.module.css";
import loadingStyles from "./loading.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MealsHeader from "@/components/meals/meals-header";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  console.log(meals);
  return <MealsGrid meals={meals} />;
}

export default async function page() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <Suspense
          fallback={
            <p className={`${loadingStyles.loading}`}>Fetching meals... </p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
