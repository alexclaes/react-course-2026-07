[Zurück zur Session-Übersicht](../readme.md)

# Übung D: Beitragsdetails-Seite

## Aufgabe 1: PostDetailsPage erstellen

Erstelle `src/pages/PostDetailsPage.tsx`.

### Schritt 1: Imports

```tsx
import { useParams } from 'react-router'
import { usePostsContext } from '../PostsContext'
import Post from '../components/Post'
```

### Schritt 2: Beitrag anhand der URL finden und rendern

```tsx
export default function PostDetailsPage() {
  const { posts } = usePostsContext()
  const { id } = useParams()
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return <p>Nicht gefunden</p>
  }

  return (
    <Post
      id={post.id}
      title={post.title}
      author={post.author}
      date={post.date}
      message={post.message}
      votes={post.votes}
    />
  )
}
```

> **Hinweis:** Die Prüfung `if (!post)` fängt den Fall ab, dass zu einer URL kein passender Beitrag existiert (z. B. bei einer ungültigen `id`). Ohne diese Prüfung würde der Zugriff auf `post.title` abstürzen. In Session 07 wird dieselbe Prüfung wichtig, solange die Beiträge noch vom Server geladen werden.

## Aufgabe 2: Route hinzufügen

Öffne `src/App.tsx` und importiere `PostDetailsPage`.

```tsx
import PostDetailsPage from './pages/PostDetailsPage'
```

Füge eine neue Route innerhalb von `<Routes>` hinzu.

```tsx
<Route path="/posts/:id" element={<PostDetailsPage />} />
```

## Aufgabe 3: PostList zu einer Link-Liste umbauen

### Schritt 1: Imports anpassen

Öffne `src/components/PostList.tsx` und passe die Imports an.

```tsx
import { Link } from 'react-router'
import Panel from './Panel'
import { Anchor, Group, Stack, Text, TextInput } from '@mantine/core'
```

### Schritt 2: Links statt Post-Components rendern

Rendere jeden Beitrag als klickbaren Link zu `/posts/${post.id}`.

```tsx
{filteredPosts.map((post) => (
  <Anchor key={post.id} component={Link} to={`/posts/${post.id}`} underline="never" c="inherit">
    <Panel>
      <Group justify="space-between" align="center">
        <Text><strong>{post.title}</strong> ({post.date})</Text>
        <Text c="dimmed">Stimmen: {post.votes}</Text>
      </Group>
    </Panel>
  </Anchor>
))}
```
