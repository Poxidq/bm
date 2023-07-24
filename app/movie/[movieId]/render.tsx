"use client";

import {
  AspectRatio,
  Grid,
  Group,
  Image,
  Title,
  Text,
  RingProgress,
  Badge,
  Tooltip,
} from "@mantine/core";
import MovieCard from "@/components/movie/MovieCard";
import { Movie } from "@/lib/movie/types";
import React, { useState, use } from "react";

interface MoviePageProps {
  movie: Movie;
}
export default function MoviePage({ movie }: MoviePageProps) {
  return (
    <div>
      <Grid gutter="lg">
        <Grid.Col xs={3}>
          <AspectRatio ratio={2 / 3} mx="auto">
            <Image src={movie.imageUrl} alt="movie" />
          </AspectRatio>
        </Grid.Col>
        <Grid.Col xs={9}>
          <Group>
            <Title>{movie.title}</Title>
            <Text opacity={0.5}>{movie.year}</Text>
          </Group>

          <Group>
            <Text>
              {movie.released} ({movie.country})
            </Text>
            <Text>{movie.genre}</Text>
            <Text>{movie.runtime}</Text>
          </Group>

          <Group mt={5} mb={10}>
            {movie.ratings.map((rating) => (
              <Tooltip label={rating.source}>
                <Badge size="lg">{rating.value}</Badge>
              </Tooltip>
            ))}
          </Group>

          <Title order={3}>Overview</Title>
          <Text>{movie.plot}</Text>

          <Grid gutter="lg" mt={10}>
            <Grid.Col xs={3}>
              <Title order={3}>Actor{movie.actors.length > 1 && "s"}</Title>
              {movie.actors.map((actor) => (
                <Text>{actor}</Text>
              ))}
            </Grid.Col>
            <Grid.Col xs={3}>
              <Title order={3}>
                Director{movie.directors.length > 1 && "s"}
              </Title>
              {movie.directors.map((director) => (
                <Text>{director}</Text>
              ))}
            </Grid.Col>
            <Grid.Col xs={3}>
              <Title order={3}>Writer{movie.writers.length > 1 && "s"}</Title>
              {movie.writers.map((writer) => (
                <Text>{writer}</Text>
              ))}
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
