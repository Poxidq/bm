import { use } from "react";

import MoviePageRender from "./render";
import type { Movie } from "@/lib/movie/types";
import { getMovieById } from "@/lib/movie/data";

interface MoviePageProps {
  params: {
    movieId: string;
  };
}

export default function MoviePage({ params }: MoviePageProps) {
  const movie = use(getMovie(params.movieId));
  return <MoviePageRender movie={movie} />;
}

const getMovie = async (movieId: string): Promise<Movie> => {
  const movieData = await getMovieById(movieId);
  return movieData;
};
