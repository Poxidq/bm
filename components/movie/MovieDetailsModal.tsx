"use client";

import {
  Image,
  Text,
  Button,
  AspectRatio,
  Group,
  Grid,
  Modal,
  Tooltip,
  Badge,
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
  // @ts-expect-error
  const { addNewMovie } = useContextProvider();
  const [status, setStatus] = useState<
    "planned" | "watched" | "watching" | "abandoned"
  >("planned");
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState("");

  if (movieData === undefined) {
    return <></>;
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
    <Modal
      size={"xl"}
      opened={isOpened}
      onClose={onClose}
      title={<Text>About movie</Text>}
    >
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

          <Group mt={5} mb={10}>
            {movieData.ratings.map((rating, _id) => (
              <Tooltip key={_id} label={rating.source}>
                <Badge size="lg">{rating.value}</Badge>
              </Tooltip>
            ))}
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
