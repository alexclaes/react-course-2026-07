[Zurück zur Session-Übersicht](../readme.md)

**Session 01 - Übung E**

# Die Post-Component erstellen

## Aufgabe: Die `Post`-Component erstellen

### Schritt 1: Eine neue Datei für die Component erstellen

Erstelle die Datei `src/components/Post.tsx`.

### Schritt 2: Den Component-Code schreiben

Füge folgenden Code in die Datei ein:

```tsx
export default function Post() {
  return (
    <div>
      <h2>Production Deployment am Freitagabend</h2>
      <div>von Nina</div>
      <div>am 2026-06-01</div>
      <p>No risk, no Risiko!</p>
    </div>
  )
}
```

### Schritt 3: Die `Post`-Component zur `App`-Component hinzufügen

Öffne `src/App.tsx`, importiere `Post` und rendere die Component unterhalb des `Header`:

```tsx
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Post />
    </div>
  )
}
```
