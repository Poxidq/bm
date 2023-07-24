import { Movie, MovieShort, MovieSearchResult } from "@/lib/movie/types";

const API_BASE_URL = "https://www.omdbapi.com";

export const getMovieById = async (movieId: string): Promise<Movie> => {
  const response = await fetch(
    `${API_BASE_URL}/?i=${movieId}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
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
    type: movieData.Type,
  };
};

export const searchMovies = async ({
  search,
  page,
}: {
  search: string;
  page: number;
}): Promise<MovieSearchResult> => {
  const response = await fetch(
    `${API_BASE_URL}/?s=${search}&page=${page}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const movieData: APISearchResult = await response.json();
  return {
    movies: movieData.Search.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      imageUrl: movie.Poster,
      type: movie.Type,
    })),
    totalPages: Math.ceil(parseInt(movieData.totalResults) / 10),
  };
};

export const getPopularMoviesIds = async (): Promise<string[]> => {
  const moviesList = ["tt0093870"];
  return moviesList;
};

interface APISearchResult {
  Search: APIMovieSearchResultData[];
  totalResults: string;
  Response: string;
}

interface APIMovieSearchResultData {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

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
