"use client";

import { Grid, Modal } from "@mantine/core";
import MovieCard from "@/components/movie/MovieCard";
import { Movie } from "@/lib/movie/types";
import MovieDetailsModal from "@/components/movie/MovieDetailsModal";
import React, { useState, use } from "react";

interface MoviesProps {
  movies: Movie[];
}
export default function MoviesPage({ movies }: MoviesProps) {
  const [areMovieDetailsOpened, setAreMovieDetailsOpened] =
    useState<boolean>(false);
  const [openedMovie, setOpenedMovie] = useState<Movie | null>(null);

  console.log("DATA : ", movies);

  return (
    <div>
      <MovieDetailsModal
        movieData={openedMovie}
        isOpened={areMovieDetailsOpened}
        onClose={() => setAreMovieDetailsOpened(false)}
      />
      <Grid gutter="md">
        {movies.map((film, _id) => (
          <Grid.Col xs={2.4} key={_id}>
            <MovieCard
              movie={film}
              onClick={() => {
                setAreMovieDetailsOpened(true);
                setOpenedMovie(film);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
