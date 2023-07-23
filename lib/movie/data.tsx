import { Movie } from "@/lib/movie/types";

export const getMovieById = async (movieId: string): Promise<Movie> => {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${movieId}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const movieData = await response.json();
  return {
    id: movieData.imdbID,
    title: movieData.Title,
    imageUrl: movieData.Poster,
    rating: movieData.imdbRating,
    genre: movieData.Genre,
    year: movieData.Year,
    released: movieData.Released,
    runtime: movieData.Runtime,
    plot: movieData.Plot,
  };
};

export const getMovieByName = async (id: string): Promise<Movie> => {
  return await getMovieById(id);
};

export const getPopularMoviesIds = async (): Promise<string[]> => {
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
  return moviesList;
};
