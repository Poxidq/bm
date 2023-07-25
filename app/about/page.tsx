"use client";
import { Container, Paper, Text, Title } from "@mantine/core";

export default function AboutPage() {
  return (
    <Container size="xl">
      <Title order={1}>About Us</Title>
      <Paper shadow="md">
        <Text size="lg">
          Welcome to our movie collection website! We are passionate about
          movies and want to create a community where people can come together
          to share their favorite movies, reviews, and recommendations.
        </Text>
        <Text size="lg" style={{ marginTop: 20 }}>
          Our mission is to make it easy for movie enthusiasts to discover new
          films and connect with others who share their interests. Whether you
          are a casual moviegoer or a die-hard cinephile, we have got something
          for you!
        </Text>
        <Text size="lg" style={{ marginTop: 20 }}>
          Our platform allows you to keep track of the movies you are interested
          in, rate and review films, and see what others are watching. You can
          also explore the fancy diagram that visualizes the most popular movie
          genres and their ratings.
        </Text>
      </Paper>
    </Container>
  );
}
