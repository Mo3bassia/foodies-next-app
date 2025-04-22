import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./Header.module.css";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import NavLink from "./NavLink";

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
              <NavLink
                href="/meals"
              >
                browse meals
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/community"
              >
                Foodies community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
