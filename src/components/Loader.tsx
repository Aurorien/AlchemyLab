import styles from "./Loader.module.css";

interface ILoaderProps {
  small?: true;
}

export const Loader = ({ small }: ILoaderProps) => {
  return (
    <div
      className={`${styles["loader-wrapper"]} ${small ? styles["small"] : ""}`}
    >
      <div className={styles["loader"]} />
    </div>
  );
};
