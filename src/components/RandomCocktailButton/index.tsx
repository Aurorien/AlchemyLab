import { SpinningLoader } from "@/components";
import styles from "./RandomCocktailButton.module.css";

interface RandomCocktailButtonProps {
  isloading: boolean;
  onClick: () => void;
}

export function RandomCocktailButton({
  isloading,
  onClick,
}: RandomCocktailButtonProps) {
  if (isloading) {
    return (
      <button className={styles["random-button"]} disabled aria-live="polite">
        Loading <SpinningLoader />
      </button>
    );
  }
  return (
    <button
      className={styles["random-button"]}
      onClick={onClick}
      disabled={isloading}
    >
      Show new random cocktail
    </button>
  );
}
