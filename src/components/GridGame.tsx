import useGame from "@/hooks/useGame";
import { Game } from "@/types";

const GridGame = () => {
  const { data: games, isLoading, error } = useGame<Game>();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {games?.map((game: Game) => (
        <li>{game.name}</li>
      ))}
    </div>
  );
};

export default GridGame;
