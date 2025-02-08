import React, { useEffect, useState } from "react";
import MovieCard from "@/components/commons/MovieCard";
import Loading from "@/components/commons/Loading";
import { MoviesProps, MovieProps } from "@/interfaces";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/fetch-movies");
        const data: MoviesProps = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
