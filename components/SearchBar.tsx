import { ActionIcon, Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const form = useForm({
    initialValues: {
      search: "",
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => onSearch(values.search))}>
      <TextInput
        {...form.getInputProps("search")}
        placeholder="Spider-Man"
        rightSection={
          <ActionIcon
            type="submit"
            variant="subtle"
            color="blue"
            size="lg"
            mr={1}
          >
            <IconSearch />
          </ActionIcon>
        }
      />
    </form>
  );
}
