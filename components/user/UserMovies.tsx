"use client";
<<<<<<< HEAD
import type { UserMovie } from "@/lib/movie/types";
import { createStyles, Table, ScrollArea, rem } from "@mantine/core";
import { useRouter } from "next/navigation";
=======

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
>>>>>>> 0741462 (profile fetchind/types issues, added the link to details page for every movie)

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
<<<<<<< HEAD
  const { push } = useRouter();
  useStyles();
  const rows = data?.map((row) => {
    return (
      <tr
        key={row.title}
        onClick={() => {
          push(`/movie/${row.id}`);
        }}
      >
        <td>{row.title}</td>
        <td>{row.released}</td>
        <td>{row.genre}</td>
        <td>{row.rating + "/10"}</td>
        <td></td>
      </tr>
=======
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
>>>>>>> 0741462 (profile fetchind/types issues, added the link to details page for every movie)
    );
  });

  return (
    <ScrollArea>
      <Table
        sx={{ minWidth: 800, cursor: "pointer" }}
        verticalSpacing="xs"
        highlightOnHover
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Released</th>
            <th>Title</th>
            <th>Released</th>
            <th>Genre</th>
            <th>Rating</th>
<<<<<<< HEAD
            <th>Rate</th>
=======
>>>>>>> 0741462 (profile fetchind/types issues, added the link to details page for every movie)
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
