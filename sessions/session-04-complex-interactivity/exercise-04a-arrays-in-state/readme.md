[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung A**

# Posts State

## Aufgabe 1: Das Posts-Array in den State verschieben

### Schritt 1: Den `useState` Hook importieren

Öffne `src/App.tsx` und importiere `useState`:

```tsx
import { useState } from 'react'
```

### Schritt 2: Das Posts-Array umbenennen

Benenne das `posts`-Array in `initialPosts` um:

```tsx
const initialPosts: PostData[] = [
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
    message: 'Der Fix war klein. Die Nebenwirkungen hatten eher Enterprise-Größe.',
  },
]
```

### Schritt 3: Eine State-Variable erstellen

Erstelle in `App` eine State-Variable, die mit `initialPosts` initialisiert wird:

```tsx
export default function App() {
  const [posts, setPosts] = useState<PostData[]>(initialPosts)

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
