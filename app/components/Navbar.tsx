import { Container, Text, Button } from "@mantine/core";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container size="xl">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <Link href="/">
          <Text size="xl" weight="bold">
            bM
          </Text>
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <NavbarLink href="/catalog">Catalog</NavbarLink>
          <NavbarLink href="/catalog">About</NavbarLink>
          <NavbarLink href="/catalog">Contacts</NavbarLink>
        </div>
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
    <Link href={href}>
      <Button size="sm" variant="outline">
        {children}
      </Button>
    </Link>
  );
}
