import { Loader } from "lucide-react";
import styles from "./SpinningLoader.module.css";

export function SpinningLoader() {
  return <Loader size={13} className={styles["spinning"]} />;
}
