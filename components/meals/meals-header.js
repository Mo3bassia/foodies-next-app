import Link from "next/link";
import styles from './meals-header.module.css'

export default function MealsHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </div>
    </header>
  );
}
