[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung B**

# PostMeta-Komponente

## Aufgabe: Eine PostMeta-Komponente extrahieren

### Schritt 1: Die PostMeta-Komponente erstellen

Erstelle eine neue Datei `src/components/PostMeta.tsx`:

```tsx
type PostMetaProps = {
  author: string
  date: string
}

export default function PostMeta({ author, date }: PostMetaProps) {
  return (
    <>
      <div>von {author}</div>
      <div>am {date}</div>
    </>
  )
}
```

### Schritt 2: Die Post-Komponente aktualisieren

Öffne `src/components/Post.tsx`, importiere `PostMeta` und ersetze die Autor-/Datum-Angaben:

```tsx
import PostMeta from './PostMeta'

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
      <PostMeta author={author} date={date} />
      <p>{message}</p>
    </div>
  )
}
```
