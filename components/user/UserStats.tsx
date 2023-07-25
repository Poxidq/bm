"use client";

import { type Movie } from "@/lib/movie/types";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export function UserStats({ data }: { data: Movie[] | undefined }) {
  // Create an object to store the count of each genre
  const genreCount: Record<string, number> = {};

  // Loop through the data and count the genres
  if (data != null) {
    data.forEach((movie) => {
      movie.genre.split(", ").forEach((genre) => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      });
    });
  }

  // Convert the genreCount object to an array of objects with the desired format
  const chartData = Object.entries(genreCount).map(([genre, watched]) => ({
    genre,
    watched,
  }));

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={chartData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="genre" />
      <PolarRadiusAxis />
      <Radar
        name="User"
        dataKey="watched"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
