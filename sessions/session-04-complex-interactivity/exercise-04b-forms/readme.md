[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung B**

# Beitragsformular

## Aufgabe 1: Das Formular erstellen

### Schritt 1: Das Formular-JSX hinzufügen

Erstelle `src/components/PostForm.tsx`:

```tsx
import { Button, Stack, Textarea, TextInput } from '@mantine/core'

export default function PostForm() {
  return (
    <form>
      <Stack gap="md">
        {/* Formularfelder kommen hierhin */}
      </Stack>
    </form>
  )
}
```

### Schritt 2: Formularfelder hinzufügen

Füge im `Stack` Eingabefelder für Titel, Autor, Datum und Nachricht sowie den Submit-Button hinzu:

```tsx
<form>
  <Stack gap="md">
    <TextInput label="Titel" name="title" type="text" required />
    <TextInput label="Autor" name="author" type="text" required />
    <TextInput label="Datum" name="date" type="date" required />
    <Textarea label="Nachricht" name="message" required />
    <Button type="submit">Neuen Beitrag hinzufügen</Button>
  </Stack>
</form>
```

## Aufgabe 2: Das Formular in der App rendern

Öffne `App.tsx` und importiere die Komponente:

```tsx
import PostForm from './components/PostForm'
```

Ergänze `Space` im Mantine-Import:

```tsx
import { Container, Divider } from '@mantine/core'
```

Rendere das Formular unter der Liste, innerhalb des `Container`. Ein `Space` schafft einen sichtbaren Abstand zwischen Liste und Formular:

```tsx
<>
  <Header />
  <Container size="sm" py="xl">
    <PostList posts={posts} />
    <Divider my="xl" />
    <PostForm />
  </Container>
</>
```
