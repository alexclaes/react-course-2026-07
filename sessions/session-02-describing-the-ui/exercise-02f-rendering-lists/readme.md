[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung F**

# Beitragsliste

## Aufgabe: Eine Liste von Beiträgen rendern

### Schritt 1: Ein Beitrags-Array definieren

Lege zunächst den `PostData`-Typ in `src/types.ts` an:

```ts
export type PostData = {
  id: string
  title: string
  author: string
  date: string
  message: string
}
```

Öffne `src/App.tsx` und definiere ein Array von Beitragsobjekten oberhalb der `App`-Komponente:

```tsx
import type { PostData } from './types'

const posts: PostData[] = [
  {
    id: '8bbb404c41c',
    title: 'Production Deployment am Freitagabend',
    author: 'Nina',
    date: '2026-06-01',
    message: 'No risk, no Risiko!',
  },
  {
    id: 'bbb404c41cd',
    title: 'Nur kurz ein kleines Refactoring',
    author: 'Sophie',
    date: '2026-06-07',
    message: 'Jetzt ist der Code sauberer, aber nichts geht mehr.',
  },
  {
    id: '404c41cd100',
    title: 'TypeScript hat wieder recht gehabt',
    author: 'Felix',
    date: '2026-06-13',
    message: 'Ich war kurz beleidigt, dann war ich dankbar.',
  },
  {
    id: '1a2b3c4d5e6',
    title: 'Kurz das Build fixen',
    author: 'Tim',
    date: '2026-06-27',
    message:
      'Der Fix war klein. Die Nebenwirkungen hatten eher Enterprise-Größe.',
  },
]
```

### Schritt 2: Die PostList-Komponente erstellen

Erstelle eine neue Datei `src/components/PostList.tsx`:

```tsx
import Post from './Post'
import { Stack } from '@mantine/core'
import type { PostData } from '../types'

type PostListProps = {
  posts: PostData[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <Stack>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          message={post.message}
        />
      ))}
    </Stack>
  )
}
```

### Schritt 3: PostList in App verwenden

Aktualisiere `src/App.tsx`, um `PostList` zu importieren und zu rendern:

```tsx
import Header from './components/Header'
import PostList from './components/PostList'
import { Container } from '@mantine/core'
import type { PostData } from './types'

const posts: PostData[] = [
  {
    id: '8bbb404c41c',
    title: 'Production Deployment am Freitagabend',
    author: 'Nina',
    date: '2026-06-01',
    message: 'No risk, no Risiko!',
  },
  {
    id: 'bbb404c41cd',
    title: 'Nur kurz ein kleines Refactoring',
    author: 'Sophie',
    date: '2026-06-07',
    message: 'Jetzt ist der Code sauberer, aber nichts geht mehr.',
  },
  {
    id: '404c41cd100',
    title: 'TypeScript hat wieder recht gehabt',
    author: 'Felix',
    date: '2026-06-13',
    message: 'Ich war kurz beleidigt, dann war ich dankbar.',
  },
  {
    id: '1a2b3c4d5e6',
    title: 'Kurz das Build fixen',
    author: 'Tim',
    date: '2026-06-27',
    message:
      'Der Fix war klein. Die Nebenwirkungen hatten eher Enterprise-Größe.',
  },
]

export default function App() {
  return (
    <>
      <Header />
      <Container size="sm" py="xl">
        <PostList posts={posts} />
      </Container>
    </>
  )
}
```
