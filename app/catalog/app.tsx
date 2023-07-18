"use client";

import { Grid, Modal } from "@mantine/core";
import MovieCard from "@components/movie/MovieCard";
import { Movie } from "@components/movie/types";
import MovieDetails from "@components/movie/MovieDetails";
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
      <Modal
        size={"xl"}
        opened={areMovieDetailsOpened}
        onClose={() => setAreMovieDetailsOpened(false)}
        title="About movie"
      >
        {openedMovie !== null && (
          <MovieDetails movie={openedMovie}></MovieDetails>
        )}
      </Modal>
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
