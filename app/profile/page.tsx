"use client";

import { UserCard } from "@/components/user/UserCard";
import { UserMoviesTable } from "@/components/user/UserMovies";
import { UserStats } from "@/components/user/UserStats";
import React, { useEffect, useState } from "react";
import { getMovieById } from "@/lib/movie/data";
import { Text } from "@mantine/core";
import type { UserMovie } from "@/lib/movie/types";

export default function UserPage() {
  const avatar =
    "https://i.pinimg.com/474x/cf/f1/b0/cff1b00211b10b5e9820ef6494b28da3.jpg";
  const name = "Mason Ayers";
  const gender = "Male";
  const age = 21;

  const [userMoviesData, setUserMoviesData] = useState<UserMovie[]>();

  useEffect(() => {
    getMovieById("tt0093870")
      .then((movieData) => {
        setUserMoviesData([
          {
            ...movieData,
            status: "watched",
          },
        ]);
      })
      .catch((error) => {
        // Handle any errors that occur during the asynchronous operation
        console.error("Error fetching movie data:", error);
      });
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <UserCard avatar={avatar} name={name} gender={gender} age={age} />
        </div>
        <UserStats />
      </div>
      <Text size="xl" weight="bold" mb={10}>
        Your movies
      </Text>
      <UserMoviesTable data={userMoviesData} />
    </div>
  );
}
