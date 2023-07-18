"use client";

import { Grid, Modal } from "@mantine/core";
import MovieCard, { Movie } from "../components/movie/MovieCard";
import MovieDetails from "../components/movie/MovieDetails";
import React, { useState } from "react";

export default function FilmsPage() {
  const [openedMovie, setOpenedMovie] = useState<Movie | null>(null);

  return (
    <div>
      <Modal
        opened={openedMovie != null}
        onClose={() => setOpenedMovie(null)}
        title="Movie details"
      >
        {openedMovie !== null && (
          <MovieDetails movie={openedMovie}></MovieDetails>
        )}
      </Modal>
      {/* onClick={() => setMovieDetailsOpened(true)}  */}
      {/* <h1>Movies Catalog</h1> */}
      <Grid gutter="md">
        {movies.map((film) => (
          <Grid.Col xs={2.4}>
            <MovieCard
              movie={film}
              onClick={() => {
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
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
  },
  {
    id: 2,
    title: "Not Shazam",
    imageURL:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
  },
  {
    id: 3,
    title: "Shazam 2",
    imageURL:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
  },
];
