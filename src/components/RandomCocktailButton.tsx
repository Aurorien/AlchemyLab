interface RandomCocktailButtonProps {
  isloading: boolean;
  onClick: () => void;
}

export function RandomCocktailButton({
  isloading,
  onClick,
}: RandomCocktailButtonProps) {
  return (
    <button onClick={() => onClick()} disabled={isloading}>
      {isloading ? "Loading..." : "Show new random cocktail"}
    </button>
  );
}
