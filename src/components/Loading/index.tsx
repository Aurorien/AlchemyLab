import styles from "./Loading.module.css";
import { SpinningLoader } from "@/components";

export function Loading() {
  console.log("Loading component rendered");

  return (
    <div className={styles["loading"]}>
      <p>
        Loading <SpinningLoader />
      </p>
    </div>
  );
}
