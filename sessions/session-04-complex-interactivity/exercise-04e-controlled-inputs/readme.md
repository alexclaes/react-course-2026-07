[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung E**

# Controlled Input (Suche/Filter)

## Aufgabe 1: Such-State hinzufügen

### Schritt 1: Eine `searchTerm` State-Variable hinzufügen

Öffne `src/components/PostList.tsx` und importiere `useState`:

```tsx
import { useState } from 'react'
```

Füge eine State-Variable für den Suchbegriff hinzu:

```tsx
const [searchTerm, setSearchTerm] = useState('')
```

### Schritt 2: Ein Sucheingabefeld hinzufügen

Importiere Mantines `TextInput` zusätzlich zum vorhandenen `Stack`:

```tsx
import { Stack, TextInput } from '@mantine/core'
```

Füge das `TextInput` als erstes Kind des `Stack` hinzu:

```tsx
<TextInput
  placeholder="Suchen..."
  value={searchTerm}
  onChange={(event) =>
    setSearchTerm(event.currentTarget.value)
  }
/>
```

Es steht zusammen mit den Beiträgen im umschließenden `Stack`:

```tsx
<Stack>
  <TextInput
    /*...*/
  />
  {/* gerenderte Beiträge */}
</Stack>
```

## Aufgabe 2: Die Beiträge filtern

### Schritt 1: Ein gefiltertes Array erstellen

Erstelle vor der `return`-Anweisung mit `.filter()` ein gefiltertes Posts-Array:

```tsx
const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase()),
)
```

### Schritt 2: `filteredPosts` rendern

Ersetze `posts` durch `filteredPosts` im Rendering:

```tsx
{filteredPosts.map((post) => ( /*...*/ )}
```
