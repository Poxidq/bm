import { use } from "react";

import MoviesPage from "./render";
import { Movie } from "@/lib/movie/types";
import { getMovieById, getPopularMoviesIds } from "@/lib/movie/data";

export default function FilmsPage() {
  const movies = use(getPopularMovies());
  return <MoviesPage movies={movies} />;
}

// fetching films
const getOneMovie = async (name: string) => {
  const data = await fetch(
    `https://www.omdbapi.com/?t=${name}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return data.json();
};

const getPopularMovies = async (): Promise<Movie[]> => {
  const moviesIds = await getPopularMoviesIds();
  const movies = await Promise.all(
    moviesIds.map(async (id: string) => await getMovieById(id))
  );
  // const moviesList = [
  //   "One piece",
  //   "Demon slayer",
  //   "Mr. Robot",
  //   "Elysium",
  //   "Divergent",
  //   "Need for Speed",
  //   "300: Rise of an empire",
  //   "RoboCop",
  //   "The Avengers",
  // ];
  // let movies: Movie[] = [];
  // for (let i = 0; i < moviesList.length; i++) {
  //   const parsedMovie = await getOneMovie(moviesList[i]);
  //   movies.push({
  //     id: parsedMovie.imdbID,
  //     title: parsedMovie.Title,
  //     imageUrl: parsedMovie.Poster,
  //     rating: parsedMovie.imdbRating,
  //     genre: parsedMovie.Genre,
  //     year: parsedMovie.Year,
  //     released: parsedMovie.Released,
  //     runtime: parsedMovie.Runtime,
  //     plot: parsedMovie.Plot,
  //   });
  // }

  // if (movies.length != moviesList.length) {
  //   throw new Error("Failed to fetch data");
  // }

  return movies;
};
