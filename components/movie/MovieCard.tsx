"use client";

import { Card, Image, Text, ActionIcon, AspectRatio } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import type { Movie } from "@/lib/movie/types";

interface MovieCardProps {
  movie: MovieShort;
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
        onClick={onClick}
      >
        <Card.Section>
          <AspectRatio ratio={21 / 30}>
            <Image src={movie.imageUrl} alt={movie.title} fit="cover" />
          </AspectRatio>
        </Card.Section>
        <Text opacity={0.8} weight={"bold"} mt="sm" size={"md"} style={{height: 50}} lineClamp={2}>
          {movie.title}
        </Text>
        <Text size="xs" opacity={0.6}>
          {movie.genre}
        </Text>
        <ActionIcon
          style={{ position: "absolute", right: 10 }}
          variant="filled"
          color="blue"
        >
          <IconPlus />
        </ActionIcon>
        <Badge style={{ position: "absolute", left: 10 }} variant="light">{movie.year}</Badge>
      </Card>
    </>
  );
}
