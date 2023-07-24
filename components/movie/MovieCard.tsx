"use client";

import { Card, Image, Text, ActionIcon, AspectRatio } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { MovieShort } from "../../lib/movie/types";

interface MovieCardProps {
  movie: MovieShort;
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
          <AspectRatio ratio={21 / 30}>
            <Image src={movie.imageUrl} alt={movie.title} fit="cover" />
          </AspectRatio>
        </Card.Section>
        <Text opacity={0.8} weight={"bold"} mt="sm" size={"md"} style={{height: 50}} lineClamp={2}>
          {movie.title}
        </Text>
        <ActionIcon
          style={{ position: "absolute", right: 10 }}
          variant="filled"
          color="blue"
          color="blue"
        >
          <IconPlus />
        </ActionIcon>
        <Badge style={{ position: "absolute", left: 10 }} variant="light">{movie.year}</Badge>
        <Badge style={{ position: "absolute", left: 10 }} variant="light">{movie.year}</Badge>
      </Card>
    </>
  );
}
