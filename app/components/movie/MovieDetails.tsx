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

export interface Movie {
  id: number;
  title: string;
  imageURL: string;
}

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div>
      <Grid gutter="lg">
        <Grid.Col xs={4}>
          <AspectRatio ratio={2 / 3} mx="auto">
            <Image src={movie.imageURL} />
          </AspectRatio>
        </Grid.Col>
        <Grid.Col xs={8}>
          <Text size="lg">{movie.title} (2023)</Text>
          <Group>
            <Text size="sm" opacity={0.6}>
              06/16/2023
            </Text>
            <Text size="sm" opacity={0.6}>
              Action, Adventure, Science Fiction
            </Text>
            <Text size="sm" opacity={0.6}>
              2h 24m
            </Text>
          </Group>

          <Group>
            <IconStar fill="#eb8d09" stroke="none" color="none" />
            <Text size="md">7.5/10</Text>
          </Group>

          <Button mt={10} leftIcon={<IconPlus />}>
            Watchlist
          </Button>

          <Text size="lg" mt={10} weight={"bold"}>
            Overview
          </Text>
          <Text size="md">Description</Text>
        </Grid.Col>
      </Grid>
    </div>
  );
}
