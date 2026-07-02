[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung B**

# Einen Beitrag aktualisieren (Upvote und Downvote)

## Aufgabe: Eine updatePost-Funktion erstellen und die Abstimmungs-Buttons verdrahten

### Schritt 1: Den Ausgangscode verstehen

Öffne `src/components/Post.tsx` und beachte die leeren Vote-Handler:

```tsx
function handleUpvote() {
  // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
}

function handleDownvote() {
  // Stimmen werden jetzt als Props empfangen, können aber noch nicht aktualisiert werden
}
```

### Schritt 2: updatePost in App.tsx erstellen

Öffne `src/App.tsx` und füge eine `updatePost`-Funktion hinzu:

```tsx
function updatePost(id: string, updatedItem: Partial<PostData>) {
  setPosts(
    posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
  )
}
```

### Schritt 3: updatePost durch PostList weiterreichen

Übergib `updatePost` als Prop an `<PostList>`:

```tsx
<PostList posts={posts} onUpdatePost={updatePost} />
```

Öffne `src/components/PostList.tsx` und leite es an jedes `<Post>` weiter:

```tsx
type PostListProps = {
  posts: PostData[]
  onUpdatePost: (id: string, updatedItem: Partial<PostData>) => void
}

export default function PostList({ posts, onUpdatePost }: PostListProps) {
  return (
    <Stack>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          message={post.message}
          votes={post.votes}
          onUpdatePost={onUpdatePost}
        />
      ))}
    </Stack>
  )
}
```

### Schritt 4: Die Vote-Handler in Post.tsx verdrahten

Öffne `src/components/Post.tsx` und füge `onUpdatePost` zu den destrukturierten Props hinzu:

```tsx
type PostProps = {
  id: string
  title: string
  author: string
  date: string
  message: string
  votes: number
  onUpdatePost: (id: string, updatedItem: Partial<PostData>) => void
}

export default function Post({
  id,
  title,
  author,
  date,
  message,
  votes,
  onUpdatePost,
}: PostProps) {
```

Aktualisiere die Handler:

```tsx
function handleUpvote() {
  onUpdatePost(id, { votes: votes + 1 })
}

function handleDownvote() {
  onUpdatePost(id, { votes: votes - 1 })
}
```
