"use client";

import { UserCard } from "@components/userpage/UserCard";
import {
  UserMoviesTable,
  userMoviesData,
} from "@components/userpage/UserMovies";
import { UserStats, data } from "@components/userpage/UserStats";
import React, { useState } from "react";
import { Text } from "@mantine/core";

export default function UserPage() {
  const avatar = "https://i.pinimg.com/474x/cf/f1/b0/cff1b00211b10b5e9820ef6494b28da3.jpg";
  const name = "Mason Ayers";
  const gender = "Male";
  const age = 21;
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
      <Text size="xl" weight="bold" mb={10}>Your movies</Text>
      <UserMoviesTable data={userMoviesData} />
    </div>
  );
}
