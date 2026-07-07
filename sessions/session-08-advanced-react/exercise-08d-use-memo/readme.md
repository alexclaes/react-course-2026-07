[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung D**

# Berechnungen memoisieren mit useMemo

## Aufgabe: Gefilterte und sortierte Liste mit useMemo memoisieren

### Schritt 1: Das Problem verstehen

In `src/components/PostList.tsx` werden die Beiträge bei **jedem Render** neu
gefiltert und sortiert – auch dann, wenn sich weder `posts` noch die Filter- und
Sortier-Einstellungen geändert haben:

```tsx
const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
);

const sortedPosts = [...filteredPosts].sort((a, b) => {
  // ...
});
```

Füge testweise ein `console.log('berechne...')` in die Sortier-Funktion ein und
beobachte in der Konsole, wie oft neu gerechnet wird.

### Schritt 2: useMemo importieren

```tsx
import { useMemo, useReducer } from "react";
```

### Schritt 3: Berechnung in useMemo verpacken

Fasse Filtern und Sortieren in einem `useMemo` zusammen und gib `sortedPosts`
zurück. Das Abhängigkeits-Array enthält alle Werte, von denen die Berechnung
abhängt:

```tsx
const sortedPosts = useMemo(() => {
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
  );

  return [...filteredPosts].sort((a, b) => {
    // ...bestehende Sortier-Logik...
  });
}, [posts, state]);
```

Jetzt wird nur noch neu gerechnet, wenn sich eine der Abhängigkeiten ändert.

### Schritt 4: Rules of Hooks beachten

Hooks dürfen nicht bedingt aufgerufen werden. Der frühe Return

```tsx
if (posts.length === 0) {
  return <Text>Laden...</Text>;
}
```

muss deshalb **hinter** dem `useMemo` stehen – ziehe das `useMemo` direkt unter
`useReducer`, noch vor diesen Return.
