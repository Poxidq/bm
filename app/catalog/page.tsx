import { use } from "react";

import MoviesPage from "./app";
import { Movie } from "@components/movie/types";

export default function FilmsPage() {
  const movies = use(getAllMovies());
  return <MoviesPage movies={movies} />;
}

// fetching films
const getOneMovie = async (name: string) => {
  const data = await fetch(
    `https://www.omdbapi.com/?t=${name}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return data.json();
};

const getAllMovies = async () => {
  const moviesList = [
    "One piece",
    "Demon slayer",
    "Mr. Robot",
    "Elysium",
    "Divergent",
    "Need for Speed",
    "300: Rise of an empire",
    "RoboCop",
    "The Avengers",
  ];
  let movies: Movie[] = [];
  for (let i = 0; i < moviesList.length; i++) {
    const parsedMovie = await getOneMovie(moviesList[i]);
    movies.push({
      id: parsedMovie.imdbID,
      title: parsedMovie.Title,
      imageUrl: parsedMovie.Poster,
      rating: parsedMovie.imdbRating,
      genre: parsedMovie.Genre,
      year: parsedMovie.Year,
      released: parsedMovie.Released,
      runtime: parsedMovie.Runtime,
      plot: parsedMovie.Plot,
    });
  }

  if (movies.length != moviesList.length) {
    throw new Error("Failed to fetch data");
  }

  return movies;
};
