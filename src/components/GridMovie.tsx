import useMovie from "@/hooks/useMovies";
import { Movie } from "@/types";
import { Image, Link } from "@chakra-ui/react";

const GridMovie = () => {
  const { data: movies, isLoading, error } = useMovie<Movie>();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {movies?.map(
        (movie: Movie) =>
          movie.image && (
            <div key={movie.link}>
              <div>
                <h4
                  style={{
                    color: "white",
                  }}
                >
                  {movie.title}
                </h4>
                <Link href={movie.link}>
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    height={300}
                    width={200}
                    style={{ borderRadius: '1rem' }}
                  />
                </Link>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default GridMovie;
