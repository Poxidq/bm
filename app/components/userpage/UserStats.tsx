import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export const data = [
  {
    genre: 'Action',
    watched: 20,
  },
  {
    genre: 'Comedy',
    watched: 12,
  },
  {
    genre: 'Horror',
    watched: 15,
  },
  {
    genre: 'Cartoon',
    watched: 10,
  },
  {
    genre: 'Fantasy',
    watched: 28,
  },
  {
    genre: 'Other',
    watched: 50
  },
];

export function UserStats() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
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
