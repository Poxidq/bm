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

export interface Movie {
  id: number;
  title: string;
  imageURL: string;
}

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return <div>{movie.title}</div>;
}
