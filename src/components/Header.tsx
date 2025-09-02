import Search from "./Search";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <h1>Alchemy Lab</h1>
      <Search />
    </header>
  );
}
