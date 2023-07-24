"use client";
import { type Movie } from "@/lib/movie/types";
import { createStyles, Table, ScrollArea, rem } from "@mantine/core";
import { useRouter } from "next/navigation";

const useStyles = createStyles((theme) => ({
  progressBar: {
    "&:not(:first-of-type)": {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));

export function UserMoviesTable({ data }: { data: Movie[] | undefined }) {
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
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
