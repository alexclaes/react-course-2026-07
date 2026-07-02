[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung B**

# Funktionen stabil halten mit useCallback

## Aufgabe: loadPosts mit useCallback stabilisieren

### Schritt 1: Das Problem verstehen

Sieh dir den aktuellen Effekt in `src/App.tsx` an:

```tsx
async function loadPosts() {
  const response = await api.getPosts();
  const data: PostData[] = await response.json();
  setPosts(data);
}

useEffect(() => {
  loadPosts();
}, []);
```

### Schritt 2: Den naiven Fix ausprobieren (und das Problem sehen)

Ergänze `loadPosts` testweise im Abhängigkeits-Array:

```tsx
useEffect(() => {
  loadPosts();
}, [loadPosts]);
```

Öffne die App und beobachte den **Netzwerk-Tab** der Entwicklertools (oder füge ein
`console.log` in `loadPosts` ein). Die Beiträge werden **endlos** immer wieder geladen.

### Schritt 3: loadPosts mit useCallback memoisieren

Importiere `useCallback`:

```tsx
import { useCallback, useEffect, useState } from "react";
```

Verpacke `loadPosts` in `useCallback` mit leerem Abhängigkeits-Array:

```tsx
const loadPosts = useCallback(async () => {
  const response = await api.getPosts();
  const data: PostData[] = await response.json();
  setPosts(data);
}, []);
```

### Schritt 4: loadPosts im Effekt verwenden

Jetzt kann das Abhängigkeits-Array `loadPosts` gefahrlos enthalten:

```tsx
useEffect(() => {
  loadPosts();
}, [loadPosts]);
```
