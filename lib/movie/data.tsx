import { Movie } from "@/lib/movie/types";

export const getMovieById = async (movieId: string): Promise<Movie> => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${movieId}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const movieData: APIMovieData = await response.json();
  return {
    id: movieData.imdbID,
    title: movieData.Title,
    imageUrl: movieData.Poster,
    rating: movieData.imdbRating,
    genre: movieData.Genre,
    year: movieData.Year,
    released: movieData.Released,
    country: movieData.Country,
    runtime: movieData.Runtime,
    plot: movieData.Plot,
    directors: movieData.Director.split(", "),
    writers: movieData.Writer.split(", "),
    actors: movieData.Actors.split(", "),
    ratings: movieData.Ratings.map(
      (rating: { Source: string; Value: string }) => ({
        source: rating.Source,
        value: rating.Value,
      })
    ),
  };
};

export const getMovieByName = async (id: string): Promise<Movie> => {
  return await getMovieById(id);
};

export const getPopularMoviesIds = async (): Promise<string[]> => {
  const moviesList = ["tt0093870"];
  return moviesList;
};

interface APIMovieData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response: string;
}
