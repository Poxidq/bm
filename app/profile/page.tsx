"use client";

import { UserCard } from "@/components/user/UserCard";
import { UserMoviesTable } from "@/components/user/UserMovies";
import { UserStats } from "@/components/user/UserStats";
import React, { useEffect, useState } from "react";
import { getMovieById } from "@/lib/movie/data";
import { Text } from "@mantine/core";
import { type Movie } from "@/lib/movie/types";
import { useContextProvider } from "@/context/MovieContext";

export default function UserPage() {
  // Temp avatar data
  const avatar =
    "https://i.pinimg.com/474x/cf/f1/b0/cff1b00211b10b5e9820ef6494b28da3.jpg";
  const name = "Mason Ayers";
  const gender = "Male";
  const age = 21;

  const [userMoviesData, setUserMoviesData] = useState<Movie[]>([]);
  // @ts-ignore
  const { movies } = useContextProvider();

  useEffect(() => {
    async function fetchData() {
      for (let i = 0; i < movies.length; i++) {
        setUserMoviesData([
          ...userMoviesData,
          {
            ...(await getMovieById(movies[i].id)),
          },
        ]);
      }
    }
    fetchData();
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
