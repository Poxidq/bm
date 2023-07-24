"use client";

import {
  Image,
  Text,
  Button,
  AspectRatio,
  Group,
  Grid,
  Modal,
} from "@mantine/core";
import { IconPlus, IconStar } from "@tabler/icons-react";
import type { Movie } from "@lib/movie/types";

interface MovieDetailsModalProps {
  movieData: Movie | null;
  isOpened: boolean;
  onClose: () => void;
}

export default function MovieDetailsModal({
  movieData,
  isOpened,
  onClose,
}: MovieDetailsModalProps) {
  if (movieData === null) {
    return <></>;
  }
  return (
    <Modal size={"xl"} opened={isOpened} onClose={onClose} title="About movie">
      <Grid gutter="lg">
        <Grid.Col xs={4}>
          <AspectRatio ratio={2 / 3} mx="auto">
            <Image src={movieData.imageUrl} alt="movie" />
          </AspectRatio>
        </Grid.Col>
        <Grid.Col xs={8}>
          <Text size="lg">
            {movieData.title} ({movieData.year})
          </Text>
          <Group>
            <Text size="sm" opacity={0.6}>
              {movieData.released}
            </Text>
            <Text size="sm" opacity={0.6}>
              {movieData.genre}
            </Text>
            <Text size="sm" opacity={0.6}>
              {movieData.runtime}
            </Text>
          </Group>

          <Group>
            <IconStar fill="#eb8d09" stroke="none" color="none" />
            <Text size="md">{movieData.rating}/10</Text>
          </Group>

          <Button mt={10} leftIcon={<IconPlus />}>
            Watchlist
          </Button>

          <Text size="lg" mt={10} weight={"bold"}>
            Overview
          </Text>
          <Text size="md">{movieData.plot}</Text>
        </Grid.Col>
      </Grid>
    </Modal>
  );
}
