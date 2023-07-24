"use client";

import RootStyleRegistry from "./emotion";
import { Container } from "@mantine/core";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { TasksContextProvider } from "@/context/MovieContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <Head>
        <title>bM</title>
      </Head>
      <body>
        <RootStyleRegistry>
          <Navbar />
          <Container size="lg" style={{ paddingTop: 20 }}>
            <TasksContextProvider>{children}</TasksContextProvider>
          </Container>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
