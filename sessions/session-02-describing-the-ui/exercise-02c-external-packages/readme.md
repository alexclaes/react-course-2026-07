[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung C**

# Externe Pakete: Mantine

## Aufgabe 1: Mantine installieren

Installiere das Mantine-Core-Paket:

```
npm install @mantine/core
```

## Aufgabe 2: Den MantineProvider einrichten

Öffne `src/main.tsx` und passe sie an:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
)
```

## Aufgabe 3: Die Header-Komponente mit Mantine umsetzen

Öffne `src/components/Header.tsx`:

```tsx
import { Group, Title } from '@mantine/core'

export default function Header() {
  return (
    <Group justify="center" bg="blue" p="md">
      <Title order={1} c="white">
        Message Board
      </Title>
    </Group>
  )
}
```

## Aufgabe 4: Die PostMeta-Komponente mit Mantine umsetzen

Öffne `src/components/PostMeta.tsx`:

```tsx
import { Group, Text } from '@mantine/core'

type PostMetaProps = {
  author: string
  date: string
}

export default function PostMeta({ author, date }: PostMetaProps) {
  return (
    <Group gap="xs">
      <Text size="sm" c="dimmed">
        von {author}
      </Text>
      <Text size="sm" c="dimmed">
        am {date}
      </Text>
    </Group>
  )
}
```

## Aufgabe 5: Die Post-Komponente mit Mantine umsetzen

Öffne `src/components/Post.tsx`:

```tsx
import PostMeta from './PostMeta'
import { Card, Stack, Text, Title } from '@mantine/core'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  return (
    <Card withBorder radius="md" padding="lg">
      <Stack gap="md">
        <Title order={2}>{title}</Title>
        <PostMeta author={author} date={date} />
        <Text>{message}</Text>
      </Stack>
    </Card>
  )
}
```

## Aufgabe 6: Die App mit einem Container zentrieren

Öffne `src/App.tsx`:

```tsx
import Header from './components/Header'
import Post from './components/Post'
import { Container } from '@mantine/core'

export default function App() {
  return (
    <>
      <Header />
      <Container size="sm" py="xl">
        <Post
          title="Production Deployment am Freitagabend"
          author="Nina"
          date="2026-06-01"
          message="No risk, no Risiko!"
        />
        <Post
          title="Nur kurz ein kleines Refactoring"
          author="Sophie"
          date="2026-06-07"
          message="Jetzt ist der Code sauberer, aber nichts geht mehr."
        />
      </Container>
    </>
  )
}
```
