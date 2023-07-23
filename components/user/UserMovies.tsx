"use client";
import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  progressBar: {
    "&:not(:first-of-type)": {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));

export interface UserMoviesProps {
  data: {
    title: string;
    type: string;
    year: number;
    genre: string;
    rate: number;
  }[];
}

export function UserMoviesTable({ data }: UserMoviesProps) {
  const { classes, theme } = useStyles();
  const rows = data.map((row) => {
    return (
      <tr key={row.title}>
        <td>
          <Anchor component="button" fz="sm">
            {row.title}
          </Anchor>
        </td>
        <td>{row.type}</td>
        <td>{row.year}</td>
        <td>{row.genre}</td>
        <td>{row.rate + "/10"}</td>
        <td></td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Type</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export const userMoviesData = [
  {
    title: "Inception",
    type: "film",
    year: 2010,
    genre: "Action",
    rate: 8.8,
  },
  {
    title: "The Dark Knight",
    type: "film",
    year: 2008,
    genre: "Action",
    rate: 9.0,
  },
  {
    title: "Pulp Fiction",
    type: "film",
    year: 1994,
    genre: "Crime",
    rate: 8.9,
  },
];
