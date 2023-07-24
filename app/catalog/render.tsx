"use client";

import { Grid } from "@mantine/core";

import React, { useState } from "react";

import type { Movie } from "@/lib/movie/types";
import MovieCard from "@/components/movie/MovieCard";
import MovieDetailsModal from "@/components/movie/MovieDetailsModal";

interface MoviesProps {
  movies: Movie[];
}

export default function MoviesPage({ movies }: MoviesProps) {
  const [areMovieDetailsOpened, setAreMovieDetailsOpened] =
    useState<boolean>(false);
  const [openedMovie, setOpenedMovie] = useState<Movie | null>(null);

  return (
    <div>
      <MovieDetailsModal
        movieData={openedMovie}
        isOpened={areMovieDetailsOpened}
        onClose={() => {
          setAreMovieDetailsOpened(false);
        }}
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
