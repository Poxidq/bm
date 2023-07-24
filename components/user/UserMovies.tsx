"use client";

import Link from "next/link";
import { UserMovie } from "@/lib/movie/types";
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

export function UserMoviesTable({ data }: { data: UserMovie[] | undefined }) {
  const { classes, theme } = useStyles();
  const rows = data?.map((row, _id) => {
    return (
      <Link key={_id} href={`/movie/${row.id}`}>
        <tr key={row.title}>
          <td>{row.title}</td>
          <td>{row.released}</td>
          <td>{row.genre}</td>
          <td>{row.rating + "/10"}</td>
          <td></td>
        </tr>
      </Link>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Title</th>
            <th>Released</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
