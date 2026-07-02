[Zurück zur Session-Übersicht](../readme.md)

# Übung E: Programmatische Navigation

## Aufgabe: Nach dem Absenden zur Beitragsübersicht navigieren

### Schritt 1: useNavigate importieren

Öffne `src/components/PostForm.tsx` und importiere `useNavigate`.

```tsx
import { useNavigate } from 'react-router'
```

### Schritt 2: navigate-Funktion erstellen

Rufe `useNavigate()` auf der obersten Ebene der Component auf.

```tsx
export default function PostForm() {
  const { createPost } = usePostsContext()
  const navigate = useNavigate()

  // ...
}
```

### Schritt 3: Nach dem Erstellen navigieren

Rufe in `handleFormAction` nach `createPost(fields)` die Funktion `navigate('/posts')` auf.

```tsx
function handleFormAction(formData: FormData) {
  const fields = Object.fromEntries(formData) as Omit<PostData, 'id' | 'votes'>
  createPost(fields)
  navigate('/posts')
}
```

## Aufgabe 2: Nach dem Löschen zur Beitragsübersicht navigieren

### Schritt 1: useNavigate importieren

Öffne `src/components/Post.tsx` und importiere `useNavigate`.

```tsx
import { useNavigate } from 'react-router'
```

### Schritt 2: navigate-Funktion erstellen

Rufe `useNavigate()` auf der obersten Ebene der Component auf.

```tsx
const navigate = useNavigate()
```

### Schritt 3: Nach dem Löschen navigieren

Rufe in `handleDelete` nach `deletePost(id)` die Funktion `navigate('/posts')` auf.

```tsx
function handleDelete() {
  deletePost(id)
  navigate('/posts')
}
```
