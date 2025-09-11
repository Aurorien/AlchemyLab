import styles from "./RandomCocktailButton.module.css";

interface RandomCocktailButtonProps {
  isloading: boolean;
  onClick: () => void;
}

export function RandomCocktailButton({
  isloading,
  onClick,
}: RandomCocktailButtonProps) {
  return (
    <button
      className={styles["random-button"]}
      onClick={() => onClick()}
      disabled={isloading}
    >
      {isloading ? "Loading..." : "Show new random cocktail"}
    </button>
  );
}
