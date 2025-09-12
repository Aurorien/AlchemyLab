import styles from "./NoData.module.css";
interface NoDataProps {
  title: string;
}

export function NoData({ title }: NoDataProps) {
  return (
    <section className={styles["no-data"]}>
      <h2>{title}</h2>
      <p>
        Try again to search for a cocktail by its name in the search field
        above.
      </p>
    </section>
  );
}
