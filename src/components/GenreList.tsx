import { GetAllGames } from "@/services/game-service";
import { Game } from "@/types";

const GenreList = () => {
  const { data, isLoading, error } = GetAllGames();
  const uniqueGenres: string[] = Array.from(
    new Set(data?.map((game: Game) => game.genre))
  );
  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <ul>
      {uniqueGenres.map((genre: string) => (
        <li key={genre}>
          {genre.charAt(0).toLocaleUpperCase() + genre.slice(1).toLowerCase()}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
