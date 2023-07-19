"use client";

import { Avatar, Text, Button, Paper } from '@mantine/core';

export interface UserInfoActionProps {
    avatar: string;
    name: string;
    gender: string;
    age: number;
  }
  
  export function UserCard({ avatar, name, gender, age }: UserInfoActionProps) {
    return (
      <Paper
        radius="md"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        })}
      >
        <Avatar src={avatar} size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" weight={500} mt="md">
          {name}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {gender} • {age}
        </Text>
  
        <Button variant="default" fullWidth mt="md">
          Edit profile
        </Button>
      </Paper>
    );
  }
