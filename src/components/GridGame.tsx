import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Game {
    id: number;
    name: string;
}
const GridGame = () => {
  const [games, setGames] = useState<Game[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    apiClient
      .get<Game[]>("/users")
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {games?.map((game) => (
        <li>{game.name}</li>
      ))}
    </div>
  );
};

export default GridGame;
