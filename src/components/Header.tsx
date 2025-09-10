import Link from "next/link";
import { ICategory } from "@/types";
import { fetchCategories } from "@/lib/api";
import { Search } from "@/components";
import styles from "./Header.module.css";

export async function Header() {
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
