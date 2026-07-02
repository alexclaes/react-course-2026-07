[Zurück zur Session-Übersicht](../readme.md)

**Session 05 - Übung C**

# Beitrag löschen

## Aufgabe 1: Die `deletePost`-Funktion erstellen

### Schritt 1: `deletePost` zu App hinzufügen

Öffne `src/App.tsx` und füge eine `deletePost`-Funktion hinzu:

```tsx
function deletePost(id: string) {
  setPosts(posts.filter((item) => item.id !== id))
}
```

## Aufgabe 2: `deletePost` an Post weitergeben

### Schritt 1: `deletePost` durch PostList weiterreichen

Übergib die `deletePost`-Funktion als Prop an `PostList`:

```tsx
<PostList posts={posts} onUpdatePost={updatePost} onDeletePost={deletePost} />
```

### Schritt 2: PostList aktualisieren, um `deletePost` weiterzuleiten

Öffne `PostList.tsx` und füge `onDeletePost` zu den destrukturierten Props hinzu:

```tsx
type PostListProps = {
  posts: PostData[]
  onUpdatePost: (id: string, updatedItem: Partial<PostData>) => void
  onDeletePost: (id: string) => void
}

export default function PostList({
  posts,
  onUpdatePost,
  onDeletePost,
}: PostListProps) {
```

Füge die Prop zum `Post` Component hinzu:

```tsx
<Post
  id={post.id}
  title={post.title}
  author={post.author}
  date={post.date}
  message={post.message}
  votes={post.votes}
  onUpdatePost={onUpdatePost}
  onDeletePost={onDeletePost}
/>
```

### Schritt 3: Einen löschen-Button zu Post hinzufügen

Öffne `Post.tsx` und füge `onDeletePost` zu den destrukturierten Props hinzu:

```tsx
type PostProps = {
  id: string
  title: string
  author: string
  date: string
  message: string
  votes: number
  onUpdatePost: (id: string, updatedItem: Partial<PostData>) => void
  onDeletePost: (id: string) => void
}

export default function Post({
  id,
  title,
  author,
  date,
  message,
  votes,
  onUpdatePost,
  onDeletePost,
}: PostProps) {
```

Füge einen Handler hinzu:

```tsx
function handleDelete() {
  onDeletePost(id)
}
```

Fasse den „Mehr lesen"-Button und den neuen löschen-Button in einer `Group` zusammen:

```tsx
<Group gap="xs" align="center">
  <Button onClick={toggleShowMore} variant="outline">
    {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
  </Button>
  <Button onClick={handleDelete} bg="red">
    löschen
  </Button>
</Group>
```
