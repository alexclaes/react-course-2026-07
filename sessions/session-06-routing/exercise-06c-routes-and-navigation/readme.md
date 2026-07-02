[Zurück zur Session-Übersicht](../readme.md)

# Übung C: Routes und Navigation

## Aufgabe 1: Die Page Components mit dem Router verbinden

### Schritt 1: Imports anpassen

Öffne `src/App.tsx` und importiere `Routes`, `Route` und die Page Components.

```tsx
import { Route, Routes } from 'react-router'
```

```tsx
import HomePage from './pages/HomePage'
import AllPostsPage from './pages/AllPostsPage'
import AddPostPage from './pages/AddPostPage'
```

### Schritt 2: Routes rendern

Ersetze das direkte Rendern von `PostList` und `PostForm` durch `Routes` und `Route`.

```tsx
<Routes>
  <Route index element={<HomePage />} />
  <Route path="/posts" element={<AllPostsPage />} />
  <Route path="/add-post" element={<AddPostPage />} />
</Routes>
```

### Schritt 3: Aufräumen

Entferne die nun ungenutzten Imports von `PostList` und `PostForm`.

## Aufgabe 2: Erstelle eine Navigationsleiste

### Schritt 1: NavBar Component erstellen

Erstelle `src/components/NavBar.tsx`.

```tsx
import { NavLink } from 'react-router'
import { Anchor, Group } from '@mantine/core'
```

```tsx
export default function NavBar() {
  return (
    <Group justify="center" gap="xl" p="md">
      <Anchor component={NavLink} to="/" fw={700}>Startseite</Anchor>
      <Anchor component={NavLink} to="/posts" fw={700}>Alle Beiträge</Anchor>
      <Anchor component={NavLink} to="/add-post" fw={700}>Beitrag hinzufügen</Anchor>
    </Group>
  )
}
```

### Schritt 2: NavBar rendern

Öffne `src/App.tsx`, importiere `NavBar` und füge `<NavBar />` zwischen `Header` und `Routes` hinzu.
