"use client";

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  ActionIcon,
  AspectRatio,
  Group,
  Grid,
  ThemeIcon,
} from "@mantine/core";
import { IconPlus, IconStarFilled, IconStar } from "@tabler/icons-react";
import { Movie } from "./types";

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div>
      <Grid gutter="lg">
        <Grid.Col xs={4}>
          <AspectRatio ratio={2 / 3} mx="auto">
            <Image src={movie.imageUrl} alt="image src" />
          </AspectRatio>
        </Grid.Col>
        <Grid.Col xs={8}>
          <Text size="lg">
            {movie.title} ({movie.year})
          </Text>
          <Group>
            <Text size="sm" opacity={0.6}>
              {movie.released}
            </Text>
            <Text size="sm" opacity={0.6}>
              {movie.genre}
            </Text>
            <Text size="sm" opacity={0.6}>
              {movie.runtime}
            </Text>
          </Group>

          <Group>
            <IconStar fill="#eb8d09" stroke="none" color="none" />
            <Text size="md">{movie.rating}/10</Text>
          </Group>

          <Button mt={10} leftIcon={<IconPlus />}>
            Watchlist
          </Button>

          <Text size="lg" mt={10} weight={"bold"}>
            Overview
          </Text>
          <Text size="md">{movie.plot}</Text>
        </Grid.Col>
      </Grid>
    </div>
  );
}
