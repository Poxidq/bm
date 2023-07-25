"use client";

import { type UserMovie } from "@/lib/movie/types";
import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "user_movies"; // Key to store data in local storage

const ContextProvider = createContext({});

export const TasksContextProvider = ({ children }: any) => {
  const [movies, setMovies] = useState<UserMovie[]>([]);

  // Load movies from local storage on component mount
  useEffect(() => {
    const storedMovies = localStorage.getItem(STORAGE_KEY);
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  // Save movies to local storage whenever movies array changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  }, [movies]);

  const findMovieById = (id: string) => {
    return movies.find((movie) => movie.id === id);
  };

  const addNewMovie = (movie: UserMovie): void => {
    setMovies([...movies, movie]);
  };

  return (
    <ContextProvider.Provider
      value={{ movies, setMovies, findMovieById, addNewMovie }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useContextProvider = () => useContext(ContextProvider);
