[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung E**

# Logik auslagern mit einem Custom Hook

## Aufgabe: Posts-Logik aus App.tsx in useApi extrahieren

### Schritt 1: Das Problem verstehen

`src/App.tsx` vermischt zwei Dinge: das Routing und die komplette Datenlogik
(State, Laden, Anlegen, Aktualisieren, Löschen der Beiträge). Die Datenlogik
soll in einen eigenen Custom Hook wandern.

### Schritt 2: Custom Hook anlegen

Erstelle `src/hooks/useApi.ts` und verschiebe den State und die Funktionen aus
`App.tsx` hierher. Ein Custom Hook ist eine Funktion, deren Name mit `use`
beginnt. Am Ende gibst du alles zurück, was die App braucht:

```ts
import { useCallback, useEffect, useState } from "react";
import { uid } from "uid";
import { api } from "../api";
import type { PostData } from "../types";

export function useApi() {
  const [posts, setPosts] = useState<PostData[]>([]);

  const loadPosts = useCallback(async () => {
    const response = await api.getPosts();
    const data: PostData[] = await response.json();
    setPosts(data);
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  // createPost, updatePost, deletePost hierher verschieben ...

  return { posts, createPost, updatePost, deletePost };
}
```

### Schritt 3: Hook in App.tsx verwenden

Ersetze den gesamten Logik-Block in `App.tsx` durch den Aufruf des Hooks und
entferne die dadurch überflüssigen Importe (`useState`, `useEffect`,
`useCallback`, `uid`, `api`, `PostData`):

```tsx
import { useApi } from "./hooks/useApi";

export default function App() {
  const { posts, createPost, updatePost, deletePost } = useApi();

  return (
    <PostsContext.Provider value={{ posts, createPost, updatePost, deletePost }}>
      {/* Header, NavBar und Routes bleiben unverändert */}
    </PostsContext.Provider>
  );
}
```
