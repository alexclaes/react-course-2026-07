[Zurück zur Session-Übersicht](../readme.md)

**Session 01 - Übung D**

# Deine erste React-Component

## Aufgabe: Die `Header`-Component erstellen

### Schritt 1: Eine neue Datei für die Component erstellen

Erstelle die Datei `src/components/Header.tsx`.

### Schritt 2: Den Component-Code schreiben

Füge folgenden Code in die Datei ein:

```tsx
export default function Header() {
  return (
    <h1>Message Board</h1>
  )
}
```

### Schritt 3: Die `Header`-Component in der `App`-Component verwenden

Öffne `src/App.tsx`, importiere `Header` und ersetze das `<h1>`-Element durch die Component:

```tsx
import Header from './components/Header'

export default function App() {
  return (
    <div className="App">
      <Header />
    </div>
  )
}
```
