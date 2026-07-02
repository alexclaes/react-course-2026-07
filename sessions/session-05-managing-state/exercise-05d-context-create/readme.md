[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung D**

# Context erstellen

## Aufgabe 1: Den PostsContext erstellen

### Schritt 1: Eine neue Datei für den Context erstellen

Erstelle eine neue Datei:

```
src/PostsContext.ts
```

### Schritt 2: Den Context erstellen und exportieren

Definiere zuerst den Typ für den Context-Wert (er entspricht dem `value`-Objekt
des Providers) und übergib ihn an `createContext`:

```ts
import { createContext } from 'react'
import type { PostData } from './types'

type PostsContextValue = {
  posts: PostData[]
  createPost: (newPost: Omit<PostData, 'id' | 'votes'>) => void
  updatePost: (id: string, updatedItem: Partial<PostData>) => void
  deletePost: (id: string) => void
}

export const PostsContext = createContext<PostsContextValue | undefined>(
  undefined,
)
```

## Aufgabe 2: Den Provider in App einbauen

### Schritt 1: PostsContext importieren

Öffne `src/App.tsx` und importiere den Context:

```tsx
import { PostsContext } from './PostsContext'
```

### Schritt 2: Den Provider um die App wickeln

Umschließe das gesamte JSX im `return`-Statement mit dem `PostsContext.Provider`:

```tsx
return (
  <PostsContext.Provider value={{ posts, createPost, updatePost, deletePost }}>
    <Header />
    <Container size="sm" py="xl">
      {/* ... */}
    </Container>
  </PostsContext.Provider>
)
```
