"use client";

import {
  AspectRatio,
  Grid,
  Group,
  Image,
  Title,
  Text,
  Badge,
  Tooltip,
  Select,
  Box,
  Rating,
  Textarea,
  Button,
} from "@mantine/core";
import type { Movie } from "@/lib/movie/types";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { useContextProvider } from "@/context/MovieContext";

interface MovieStatus {
  label: string;
  value: string;
  isReviewAvailable: boolean;
}

interface MoviePageProps {
  movie: Movie;
}
export default function MoviePage({ movie }: MoviePageProps) {
  const movieStatuses: MovieStatus[] = [
    { label: "Planned", value: "planned", isReviewAvailable: false },
    { label: "Watching", value: "watching", isReviewAvailable: false },
    { label: "Watched", value: "watched", isReviewAvailable: true },
    { label: "Abandoned", value: "abandoned", isReviewAvailable: false },
  ];

  const [value, setValue] = useState<string>(movieStatuses[0].value);
  const [reviewAvailable, setReviewAvailable] = useState<boolean>(
    movieStatuses[0].isReviewAvailable
  );

  const onChange = (value: string) => {
    const movieStatus = movieStatuses.find((status) => status.value === value);
    if (!movieStatus) return;

    setValue(value);
    setReviewAvailable(movieStatus.isReviewAvailable);
  };
  // @ts-expect-error
  const { addNewMovie, findMovieById } = useContextProvider();

  const userMovie = findMovieById(movie.id);

  const form = useForm({
    initialValues: {
      status: userMovie ? userMovie.status : "",
      review: userMovie ? userMovie.review : "",
      rating: userMovie ? userMovie.userRating : "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);

    addNewMovie({
      id: movie.id,
      status: values.status,
      review: values.review,
      userRating: values.rating,
    });
  };

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
            {movie.ratings.map((rating, _id) => (
              <Tooltip key={_id} label={rating.source}>
                <Badge size="lg">{rating.value}</Badge>
              </Tooltip>
            ))}
          </Group>

          <Title order={3}>Overview</Title>
          <Text>{movie.plot}</Text>

          <Grid gutter="lg" mt={10}>
            <Grid.Col xs={3}>
              <Title order={3}>Actor{movie.actors.length > 1 && "s"}</Title>
              {movie.actors.map((actor, _id) => (
                <Text key={_id}>{actor}</Text>
              ))}
            </Grid.Col>
            <Grid.Col xs={3}>
              <Title order={3}>
                Director{movie.directors.length > 1 && "s"}
              </Title>
              {movie.directors.map((director, _id) => (
                <Text key={_id}>{director}</Text>
              ))}
            </Grid.Col>
            <Grid.Col xs={3}>
              <Title order={3}>Writer{movie.writers.length > 1 && "s"}</Title>
              {movie.writers.map((writer, _id) => (
                <Text key={_id}>{writer}</Text>
              ))}
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Grid mt={20}>
          <Grid.Col xs={3}>
            <Select
              {...form.getInputProps("status")}
              data={movieStatuses.map((status) => ({
                value: status.value,
                label: status.label,
              }))}
              value={value}
              onChange={onChange}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {reviewAvailable && (
                <Rating {...form.getInputProps("rating")} size="lg" mt={10} />
              )}
              <Button type="submit" variant="light" mt={10}>
                Save
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col xs={9}>
            {reviewAvailable && (
              <Textarea
                {...form.getInputProps("review")}
                placeholder="Your review"
              />
            )}
          </Grid.Col>
        </Grid>
      </form>
    </div>
  );
}
