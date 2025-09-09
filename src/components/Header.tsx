import Search from "./Search";
import styles from "./Header.module.css";
import Link from "next/link";
import { fetchCategories } from "@/lib/api/fetchCategories";

export default async function Header() {
  const categories = await fetchCategories();

  return (
    <header className={styles["header"]}>
      <Link href={"/"}>
        <h1>Alchemy Lab</h1>
      </Link>
      <Search categories={categories} />
    </header>
  );
}
