[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung D**

# Zu Arrays hinzufügen

## Aufgabe 1: Das `uid`-Paket installieren

Das `uid`-Paket ist bereits über den Workspace verfügbar. Andernfalls installierst du es so:

```
npm install uid
```

### Schritt 1: uid importieren

Öffne `src/App.tsx` und importiere `uid`:

```tsx
import { uid } from 'uid'
```

## Aufgabe 2: Neue Beiträge zum State hinzufügen

### Schritt 1: Eine `createPost`-Funktion erstellen

Erstelle in `App` eine Funktion, die einen neuen Beitrag zum Posts-Array hinzufügt:

```tsx
function createPost(newPost: Omit<PostData, 'id'>) {
  setPosts([...posts, { id: uid(), ...newPost }])
}
```

### Schritt 2: `createPost` an `PostForm` übergeben

Füge die Prop `onCreatePost` hinzu:

```tsx
<PostForm onCreatePost={createPost} />
```

### Schritt 3: `onCreatePost` Prop verarbeiten

Öffne `src/components/PostForm.tsx` und empfange die Prop:

```tsx
type PostFormProps = {
  onCreatePost: (newPost: Omit<PostData, 'id'>) => void
}

export default function PostForm({ onCreatePost }: PostFormProps) {
  // ...
}
```

Aktualisiere `handleFormAction`, um `createPost` aufzurufen:

```tsx
function handleFormAction(formData: FormData) {
  const fields = Object.fromEntries(formData) as Omit<PostData, 'id'>
  onCreatePost(fields)
}
```
