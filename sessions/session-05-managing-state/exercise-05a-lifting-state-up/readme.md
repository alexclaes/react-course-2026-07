[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung A**

# Stimmen in gemeinsamen State heben

## Aufgabe: Vote-State von Post in das posts-Array verschieben

### Schritt 1: Den aktuellen Code verstehen

Öffne `src/components/Post.tsx` und beachte den lokalen State:

```tsx
const [votes, setVotes] = useState(0)
```

### Schritt 2: Eine `votes`-Eigenschaft zu jedem Post in initialPosts hinzufügen

Erweitere zuerst den `PostData`-Typ in `src/types.ts` um ein `votes`-Feld:

```ts
export type PostData = {
  id: string
  title: string
  author: string
  date: string
  message: string
  votes: number
}
```

Öffne danach `src/App.tsx` und füge `votes: 0` zu jedem Post-Objekt hinzu:

```tsx
const initialPosts: PostData[] = [
  {
    id: '8bbb404c41c',
    title: 'Production Deployment am Freitagabend',
    author: 'Nina',
    date: '2026-06-01',
    message: 'No risk, no Risiko!',
    votes: 0,
  },
  {
    id: 'bbb404c41cd',
    title: 'Nur kurz ein kleines Refactoring',
    author: 'Sophie',
    date: '2026-06-07',
    message: 'Jetzt ist der Code sauberer, aber nichts geht mehr.',
    votes: 0,
  },
  {
    id: '404c41cd100',
    title: 'TypeScript hat wieder recht gehabt',
    author: 'Felix',
    date: '2026-06-13',
    message: 'Ich war kurz beleidigt, dann war ich dankbar.',
    votes: 0,
  },
  {
    id: '1a2b3c4d5e6',
    title: 'Kurz das Build fixen',
    author: 'Tim',
    date: '2026-06-27',
    message: 'Der Fix war klein. Die Nebenwirkungen hatten eher Enterprise-Größe.',
    votes: 0,
  },
]
```

### Schritt 3: `votes` durch PostList an Post weitergeben

Öffne `src/components/PostList.tsx` und füge `votes` hinzu:

```tsx
<Post
  title={post.title}
  author={post.author}
  date={post.date}
  message={post.message}
  votes={post.votes}
/>
```

### Schritt 4: `votes` als Prop in Post empfangen

Öffne `src/components/Post.tsx` und füge `votes` zu den destrukturierten Props hinzu. Definiere `PostProps` explizit mit genau den Props, die `Post` verwendet – `id` wird erst in der nächsten Übung (zum Aktualisieren) benötigt und daher hier noch nicht als Prop geführt:

```tsx
type PostProps = {
  title: string
  author: string
  date: string
  message: string
  votes: number
}

export default function Post({
  title,
  author,
  date,
  message,
  votes,
}: PostProps) {
```

Entferne die lokale State-Zeile:

```tsx
// LOESCHE diese Zeile:
const [votes, setVotes] = useState(0)
```

### Schritt 5: Die Vote-Handler vorerst deaktivieren

Aktualisiere die Handler zu leeren Platzhaltern:

```tsx
function handleUpvote() {
  // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
}

function handleDownvote() {
  // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
}
```

### Schritt 6: Neue Beiträge mit `votes` anlegen

Da `votes` jetzt Teil des gemeinsamen State ist, muss auch ein neu erstellter Beitrag mit `votes: 0` starten. Passe `createPost` in `src/App.tsx` an:

```tsx
function createPost(newPost: Omit<PostData, 'id' | 'votes'>) {
  setPosts([...posts, { id: uid(), votes: 0, ...newPost }])
}
```

Schließe `votes` auch im Prop-Typ von `src/components/PostForm.tsx` aus – das Feld wird ja erst in `createPost` gesetzt, nicht vom Formular:

```tsx
type PostFormProps = {
  onCreatePost: (newPost: Omit<PostData, 'id' | 'votes'>) => void
}
```

Passe denselben Typ auch beim Cast in `handleFormAction` an:

```tsx
const fields = Object.fromEntries(formData) as Omit<PostData, 'id' | 'votes'>
```
