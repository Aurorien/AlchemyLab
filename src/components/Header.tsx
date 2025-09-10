import Search from "./Search";
import styles from "./Header.module.css";
import Link from "next/link";
import { fetchCategories } from "@/lib/api/fetchCategories";
import { ICategory } from "@/types";

export default async function Header() {
  const categories: ICategory[] = await fetchCategories();

  const categoryList: string[] = categories.map(
    (category) => category.strCategory
  );

  return (
    <header className={styles["header"]}>
      <Link href={"/"}>
        <h1>Alchemy Lab</h1>
      </Link>
      <Search categories={categoryList} />
    </header>
  );
}
