"use client";

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  ActionIcon,
  AspectRatio,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import MovieDetails from "./MovieDetails";

export interface Movie {
  id: number;
  title: string;
  imageURL: string;
}

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <>
      <Card
        shadow="sm"
        padding="sm"
        withBorder
        style={{ display: "flex", flexDirection: "column" }}
        onClick={ onClick }
      >
        <Card.Section>
          <AspectRatio ratio={2 / 3}>
            <Image src={movie.imageURL} alt={movie.title} fit="cover" />
          </AspectRatio>
        </Card.Section>
        <Text weight={500} mt="sm">
          {movie.title} (2023)
        </Text>
        <Text size="xs" opacity={0.6}>Action, Adventure, Science Fiction</Text>
        <ActionIcon
          style={{ position: "absolute", right: 10 }}
          variant="filled"
        >
          <IconPlus />
        </ActionIcon>
      </Card>
    </>
  );
}
