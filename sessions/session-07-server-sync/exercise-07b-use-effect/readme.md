[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung B**

# Beiträge vom Server laden

## Aufgabe: Beiträge beim Mounten der App vom Server laden

### Schritt 1: `useEffect` importieren und `initialPosts` entfernen

Ergänze `useEffect` im React-Import:

```tsx
import { useEffect, useState } from 'react'
```

Entferne das `initialPosts`-Array und initialisiere den State mit einem leeren Array:

```tsx
const [posts, setPosts] = useState<PostData[]>([])
```

### Schritt 2: `api` importieren

```tsx
import { api } from './api'
```

### Schritt 3: `loadPosts`-Funktion erstellen

Erstelle innerhalb der `App`-Komponente:

```tsx
async function loadPosts() {
  const response = await api.getPosts()
  const data: PostData[] = await response.json()
  setPosts(data)
}
```

### Schritt 4: `loadPosts` beim Mounten aufrufen

```tsx
useEffect(() => {
  loadPosts()
}, [])
```
