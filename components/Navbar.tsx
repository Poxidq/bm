import {
  Container,
  Text,
  useMantineColorScheme,
  ActionIcon,
  Group,
  Button,
} from "@mantine/core";
import Link from "next/link";
import { IconSun, IconMoon, IconUser } from "@tabler/icons-react";

export default function Navbar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Container size="lg">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Text component="span" size="xl" weight="bold" color="blue">
            bM
          </Text>
        </Link>

        <Group>
          <Link href="/profile" style={{ textDecoration: "none" }}>
            <Button rightIcon={<IconUser />} variant="subtle">
              Go to Profile
            </Button>
          </Link>
        </Group>
      </nav>
    </Container>
  );
}
