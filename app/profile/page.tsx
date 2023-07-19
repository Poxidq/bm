"use client";

import { UserCard } from "@components/userpage/UserCard";
import {
  UserMoviesTable,
  userMoviesData,
} from "@components/userpage/UserMovies";
import { UserStats, data } from "@components/userpage/UserStats";
import React, { useState } from "react";

export default function UserPage() {
  const avatar = "https://i2.paste.pics/OTGHD.png";
  const name = "Yevgeny Prigozhin";
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
      <h1>Your movies</h1>
      <UserMoviesTable data={userMoviesData} />
    </div>
  );
}
