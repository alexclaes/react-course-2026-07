import { Button, Stack, Textarea, TextInput } from '@mantine/core'

export default function PostForm() {
  return (
    <form>
      <Stack gap="md">
        <TextInput label="Titel" name="title" type="text" required />
        <TextInput label="Autor" name="author" type="text" required />
        <TextInput label="Datum" name="date" type="date" required />
        <Textarea label="Nachricht" name="message" required />
        <Button type="submit">Neuen Beitrag hinzufügen</Button>
      </Stack>
    </form>
  )
}
