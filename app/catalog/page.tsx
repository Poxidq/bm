import { use } from "react";

import MoviesPage from "./render";
import { Movie } from "@/lib/movie/types";
import { getMovieById, getPopularMoviesIds } from "@/lib/movie/data";

export default function FilmsPage() {
  const movies = use(getPopularMovies());
  return <MoviesPage movies={movies} />;
}

const getPopularMovies = async (): Promise<Movie[]> => {
  const moviesIds = await getPopularMoviesIds();
  const movies = await Promise.all(
    moviesIds.map(async (id: string) => await getMovieById(id))
  );

  return movies;
};
