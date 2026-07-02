[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung A**

# Post Props

## Aufgabe: Daten über Props an die Post-Komponente übergeben

### Schritt 1: Props in der Post-Komponente akzeptieren

Öffne `src/components/Post.tsx` und destrukturiere die Props in der Funktionssignatur. Definiere dazu einen `PostProps`-Typ:

```tsx
type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  // ...
}
```

### Schritt 2: Props in JSX verwenden

Ersetze die fest einprogrammierten Werte im JSX durch die Prop-Werte:

```tsx
type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>von {author}</div>
      <div>am {date}</div>
      <p>{message}</p>
    </div>
  )
}
```

### Schritt 3: Props von der App-Komponente übergeben

Öffne `src/App.tsx` und übergib die Props an die `Post`-Komponente:

```tsx
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Post
        title="Production Deployment am Freitagabend"
        author="Nina"
        date="2026-06-01"
        message="No risk, no Risiko!"
      />
    </div>
  )
}
```

### Schritt 4: Die Komponente wiederverwenden

Dank der Props kannst du dieselbe `Post`-Komponente mehrfach mit unterschiedlichen Daten rendern. Füge einen zweiten `Post` mit anderen Werten hinzu:

```tsx
export default function App() {
  return (
    <div className="App">
      <Header />
      <Post
        title="Production Deployment am Freitagabend"
        author="Nina"
        date="2026-06-01"
        message="No risk, no Risiko!"
      />
      <Post
        title="Nur kurz ein kleines Refactoring"
        author="Sophie"
        date="2026-06-07"
        message="Jetzt ist der Code sauberer, aber nichts geht mehr."
      />
    </div>
  )
}
```
