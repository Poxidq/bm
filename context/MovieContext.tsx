"use client";
import { UserMovie } from "@/lib/movie/types";
import { createContext, useContext, useState } from "react";

const ContextProvider = createContext({});

export const TasksContextProvider = ({ children }: any) => {
  const [movies, setMovies] = useState<UserMovie[]>([
    {
      id: "tt0093870",
      userRating: 9,
      status: "in the plans",
      review: "Some review text :) ",
    },
  ]);

  const findMoviesById = (id: string) => {
    return movies.filter((movie) => movie.id == id);
  };

  const addNewMovie = (movie: UserMovie): void => {
    setMovies([...movies, movie]);
  };

  return (
    <ContextProvider.Provider
      value={{ movies, setMovies, findMoviesById, addNewMovie }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useContextProvider = () => useContext(ContextProvider);
