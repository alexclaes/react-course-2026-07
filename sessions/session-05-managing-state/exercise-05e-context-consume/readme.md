[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung E**

# Context konsumieren mit useContext

## Aufgabe 1: Sicheren Zugriff mit usePostsContext

Der Context wurde als `createContext<PostsContextValue | undefined>(undefined)` angelegt. Ein direktes `useContext(PostsContext)` liefert deshalb `PostsContextValue | undefined` – TypeScript würde bei jedem Zugriff wie `const { posts } = ...` meckern. Erstelle darum einen kleinen Hook, der den Wert einmal prüft und typsicher zurückgibt.

### Schritt 1: useContext importieren

Öffne `src/PostsContext.ts` und ergänze `useContext` im React-Import:

```ts
import { createContext, useContext } from 'react'
```

### Schritt 2: usePostsContext-Hook ergänzen

Füge unterhalb von `createContext` hinzu:

```ts
export function usePostsContext() {
  const context = useContext(PostsContext)
  if (context === undefined) {
    throw new Error('usePostsContext must be used within a PostsProvider')
  }
  return context
}
```

Alle Komponenten lesen den Context ab jetzt über `usePostsContext()` statt über `useContext(PostsContext)` aus.

## Aufgabe 2: PostList auf Context umstellen

### Schritt 1: usePostsContext importieren

Öffne `src/components/PostList.tsx`:

```tsx
import { useState } from 'react'
import { usePostsContext } from '../PostsContext'
```

### Schritt 2: posts aus dem Context auslesen

Lies `posts` mit `usePostsContext` aus und entferne `posts`, `onUpdatePost` und `onDeletePost` aus den Props:

```tsx
export default function PostList() {
  const { posts } = usePostsContext()
  const [searchTerm, setSearchTerm] = useState('')
```

### Schritt 3: Callback-Props von Post entfernen

Entferne `onUpdatePost` und `onDeletePost` aus dem `<Post>`-Element:

```tsx
<Post
  id={post.id}
  title={post.title}
  author={post.author}
  date={post.date}
  message={post.message}
  votes={post.votes}
/>
```

## Aufgabe 3: Post auf Context umstellen

### Schritt 1: usePostsContext importieren

Öffne `src/components/Post.tsx`:

```tsx
import { useState } from 'react'
import { usePostsContext } from '../PostsContext'
```

### Schritt 2: Funktionen aus dem Context auslesen

Lies `updatePost` und `deletePost` aus dem Context aus:

```tsx
const { updatePost, deletePost } = usePostsContext()
```

Entferne `onUpdatePost` und `onDeletePost` aus den destrukturierten Props:

```tsx
type PostProps = {
  id: string
  title: string
  author: string
  date: string
  message: string
  votes: number
}

export default function Post({
  id,
  title,
  author,
  date,
  message,
  votes,
}: PostProps) {
```

### Schritt 3: Handler aktualisieren

```tsx
function handleUpvote() {
  updatePost(id, { votes: votes + 1 })
}

function handleDownvote() {
  updatePost(id, { votes: votes - 1 })
}

function handleDelete() {
  deletePost(id)
}
```

## Aufgabe 4: PostForm auf Context umstellen

### Schritt 1: usePostsContext importieren

Öffne `src/components/PostForm.tsx`. Importiere den Hook und den `PostData`-Typ (für den Cast im nächsten Schritt):

```tsx
import { usePostsContext } from '../PostsContext'
import type { PostData } from '../types'
```

### Schritt 2: createPost aus dem Context auslesen

Lies `createPost` aus dem Context aus und entferne die `onCreatePost`-Prop. `Object.fromEntries(formData)` liefert `FormDataEntryValue`-Werte – caste das Ergebnis auf den erwarteten Typ:

```tsx
export default function PostForm() {
  const { createPost } = usePostsContext()

  function handleFormAction(formData: FormData) {
    const fields = Object.fromEntries(formData) as Omit<PostData, 'id' | 'votes'>
    createPost(fields)
  }
```

## Aufgabe 5: Props in App aufräumen

### Schritt 1: Props entfernen

Öffne `src/App.tsx` und entferne die nicht mehr benötigten Props:

```tsx
<PostsContext.Provider value={{ posts, createPost, updatePost, deletePost }}>
  <Header />
  <Container size="sm" py="xl">
    <PostList />
    <Divider my="xl" />
    <PostForm />
  </Container>
</PostsContext.Provider>
```
