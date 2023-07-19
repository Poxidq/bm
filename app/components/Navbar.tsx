import {
  Container,
  Text,
  Button,
  useMantineColorScheme,
  ActionIcon,
  Avatar,
  Group,
} from "@mantine/core";
import Link from "next/link";
import { IconSun, IconMoon } from "@tabler/icons-react";

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
          <Text component="span" size="xl" weight="bold" color="black">
            bM
          </Text>
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <NavbarLink href="/catalog">Catalog</NavbarLink>
        </div>

        <Group>
        <Link href="/profile" style={{ textDecoration: "none" }}>
          <Text size="sm" weight="bold" color="black">
          <Avatar radius="xl"></Avatar>
          </Text>
        </Link>

          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            radius="xl"
          >
            {dark ? (
              <IconSun style={{ width: 18, height: 18 }} />
            ) : (
              <IconMoon style={{ width: 18, height: 18 }} />
            )}
          </ActionIcon>
        </Group>
      </nav>
    </Container>
  );
}

function NavbarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Text size="sm" weight="bold" color="black">
        {children}
      </Text>
    </Link>
  );
}
