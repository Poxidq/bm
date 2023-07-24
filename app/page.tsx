"use client";

import { Grid, Pagination, Text } from "@mantine/core";
import MovieCard from "@/components/movie/MovieCard";
import { MovieShort } from "@/lib/movie/types";
import React, { useState, useEffect } from "react";
import { searchMovies } from "@/lib/movie/data";
import SearchBar from "@/components/SearchBar";

export default function SearchPageRender() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState<MovieShort[]>([]);
  const [search, setSearch] = useState("");
  const [result, setResults] = useState(false);

  const onSearch = (search: string) => {
    setCurrentPage(1);
    setSearch(search);
  };

  const onPageSelect = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (search == "") return;
    searchMovies({ search: search, page: currentPage }).then((result) => {
      setResults(true);
      setTotalPages(result.totalPages);
      setMovies(result.movies);
    });
  }, [search, currentPage]);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {result && (
        <>
          <Grid gutter="md" mt={10}>
            {movies.map((movie, _id) => (
              <Grid.Col xs={2.4} key={_id}>
                <MovieCard movie={movie} onClick={() => {}} />
              </Grid.Col>
            ))}
          </Grid>
          <Pagination
            mt={10}
            value={currentPage}
            total={totalPages}
            onChange={onPageSelect}
          />
        </>
      )}
      {!result && (
        <>
          <Text mt={30} opacity={0.5} align="center">
            Find your favorite movie
          </Text>
        </>
      )}
    </div>
  );
}
