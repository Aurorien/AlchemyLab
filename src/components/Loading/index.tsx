import styles from "./Loading.module.css";
import { SpinningLoader } from "@/components";

export function Loading() {
  return (
    <div className={styles["loading"]}>
      <p>
        Loading <SpinningLoader />
      </p>
    </div>
  );
}
