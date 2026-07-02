[Zurück zur Session-Übersicht](../readme.md)

# Übung B: Page Components

## Aufgabe 1: Homepage anlegen

Erstelle das Verzeichnis `src/pages/` und darin die Datei `src/pages/HomePage.tsx`.

```tsx
import { Title } from '@mantine/core'

export default function HomePage() {
  return <Title order={2} ta="center">Willkommen beim Message Board</Title>
}
```

## Aufgabe 2: Erstelle eine Seite für alle Posts

Erstelle `src/pages/AllPostsPage.tsx`.

```tsx
import PostList from '../components/PostList'
import { Stack, Title } from '@mantine/core'

export default function AllPostsPage() {
  return (
    <Stack gap="md">
      <Title order={2}>Alle Beiträge</Title>
      <PostList />
    </Stack>
  )
}
```

## Aufgabe 3: Erstelle eine Seite zum Hinzufügen neuer Posts

Erstelle `src/pages/AddPostPage.tsx`.

```tsx
import PostForm from '../components/PostForm'
import { Stack, Title } from '@mantine/core'

export default function AddPostPage() {
  return (
    <Stack gap="md">
      <Title order={2}>Beitrag hinzufügen</Title>
      <PostForm />
    </Stack>
  )
}
```

## Aufgabe 4: Trennlinie entfernen

Formular und Liste bekommen ab jetzt eigene Seiten. Die bisherige Trennlinie zwischen ihnen wird nicht mehr benötigt. Entferne in `src/App.tsx` das `<Divider my="xl" />` und passe den Import an, sodass nur noch `Container` importiert wird:

```tsx
import { Container } from '@mantine/core'
```
