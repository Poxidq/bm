"use client";

import RootStyleRegistry from "./emotion";
import { Container } from "@mantine/core";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head />
      <body>
        <RootStyleRegistry>
          <Navbar />
          <Container size="lg" style={{ paddingTop: 20 }}>
            {children}
          </Container>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
