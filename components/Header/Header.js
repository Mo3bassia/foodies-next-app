import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./Header.module.css";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="A plate with food on it"
            style={{ width: "80px", height: "80px" }}
            priority
          ></Image>
          <h2>NextLevel Food</h2>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">browse meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
