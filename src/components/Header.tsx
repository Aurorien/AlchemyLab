import Search from "./Search";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <Link href={"/"}>
        <h1>Alchemy Lab</h1>
      </Link>
      <Search />
    </header>
  );
}
