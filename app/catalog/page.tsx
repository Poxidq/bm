"use client";

import { Grid, Modal } from "@mantine/core";
import MovieCard, { Movie } from "../components/movie/MovieCard";
import MovieDetails from "../components/movie/MovieDetails";
import React, { useState } from "react";

export default function FilmsPage() {
  const [areMovieDetailsOpened, setAreMovieDetailsOpened] =
    useState<boolean>(false);
  const [openedMovie, setOpenedMovie] = useState<Movie | null>(null);

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

const movies: Movie[] = [
  {
    id: 1,
    title: "Shazam",
    imageURL:
      "https://cdn.europosters.eu/image/750/posters/shazam-good-vs-evil-i73404.jpg",
  },
  {
    id: 2,
    title: "Not Shazam",
    imageURL:
      "https://cdn.europosters.eu/image/750/posters/shazam-good-vs-evil-i73404.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://cdn.europosters.eu/image/750/posters/shazam-good-vs-evil-i73404.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://cdn.europosters.eu/image/750/posters/shazam-good-vs-evil-i73404.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://cdn.europosters.eu/image/750/posters/shazam-good-vs-evil-i73404.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://cdn.europosters.eu/image/750/posters/shazam-good-vs-evil-i73404.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://cdn.europosters.eu/image/750/posters/shazam-good-vs-evil-i73404.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://cdn.europosters.eu/image/750/posters/shazam-good-vs-evil-i73404.jpg",
  },
];
