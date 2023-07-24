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
import { type Movie, type UserMovie } from "@lib/movie/types";
import { useContextProvider } from "@/context/MovieContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface MovieDetailsModalProps {
  movieData: Movie | undefined;
  isOpened: boolean;
  onClose: () => void;
}

export default function MovieDetailsModal({
  movieData,
  isOpened,
  onClose,
}: MovieDetailsModalProps) {
  const { push } = useRouter();
  //@ts-ignore
  const { addNewMovie } = useContextProvider();
  const [status, setStatus] = useState<
    "in the plans" | "watched" | "watching" | "abandoned"
  >("in the plans");
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState("");

  if (movieData === undefined) {
    return <>Note Found</>;
  }

  const handleAddNewMovie = () => {
    const newMovie: UserMovie = {
      id: movieData.id,
      status,
      userRating,
      review,
    };
    addNewMovie(newMovie);
    // console.log("ADDED new movie to local storage!");
  };

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

          <Text size="lg" mt={10} weight={"bold"}>
            Overview
          </Text>
          <Text size="md">{movieData.plot}</Text>
          <Button
            mt={10}
            leftIcon={<IconPlus />}
            onClick={() => {
              push(`/movie/${movieData.id}`);
            }}
          >
            Add to list
          </Button>
        </Grid.Col>
      </Grid>
    </Modal>
  );
}
