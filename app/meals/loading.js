import styles from "./loading.module.css";
export default function loading() {
  return <p className={`${styles.loading}`}>Fetching meals... </p>;
}
