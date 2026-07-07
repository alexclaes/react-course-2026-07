[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung C**

# Ein Formular für Anlegen und Bearbeiten

## Aufgabe: PostForm zum Bearbeiten wiederverwenden

Bisher legt `PostForm` nur neue Beiträge an. In dieser Übung nutzt du dasselbe
Formular auch, um einen existierenden Beitrag zu bearbeiten.

### Schritt 1: Route für die Bearbeiten-Seite anlegen

Ergänze in `src/App.tsx` eine Route hinter der Detail-Route:

```tsx
import EditPostPage from './pages/EditPostPage'

// ...

<Route path="/posts/:id" element={<PostDetailsPage />} />
<Route path="/posts/:id/edit" element={<EditPostPage />} />
```

### Schritt 2: "bearbeiten"-Button auf der Detailansicht

Füge in `src/components/Post.tsx` einen Button hinzu, der programmatisch zur
Bearbeiten-Seite navigiert:

```tsx
function handleEdit() {
  navigate(`/posts/${id}/edit`);
}
```

```tsx
<Button onClick={handleEdit} variant="outline">
  bearbeiten
</Button>
```

### Schritt 3: Bearbeiten-Seite anlegen

Erstelle `src/pages/EditPostPage.tsx`. Die Seite lädt den Beitrag anhand der `id`
aus dem Context und gibt ihn über die Prop `initialFormData` an das Formular:

```tsx
import { useParams } from 'react-router'
import { Stack, Title } from '@mantine/core'
import { usePostsContext } from '../PostsContext'
import PostForm from '../components/PostForm'

export default function EditPostPage() {
  const { posts } = usePostsContext()
  const { id } = useParams()

  if (posts.length === 0) {
    return <p>Laden...</p>
  }

  const post = posts.find((p) => p.id === id)

  if (!post) {
    return <p>Nicht gefunden</p>
  }

  return (
    <Stack gap="md">
      <Title order={2}>Beitrag bearbeiten</Title>
      <PostForm initialFormData={post} />
    </Stack>
  )
}
```

### Schritt 4: PostForm um `initialFormData` erweitern

Nimm in `src/components/PostForm.tsx` eine optionale Prop entgegen und belege die
Felder per `defaultValue` vor:

```tsx
type PostFormProps = {
  initialFormData?: PostData
}

export default function PostForm({ initialFormData }: PostFormProps) {
  const isEditing = initialFormData !== undefined
  // ...
}
```

```tsx
<TextInput
  label="Titel"
  name="title"
  type="text"
  defaultValue={initialFormData?.title}
  required
/>
```

### Schritt 5: Beim Absenden update statt add auslösen

Hol dir zusätzlich `updatePost` aus dem Context und verzweige in
`handleFormAction`. Beim Bearbeiten navigierst du zurück auf die Detailseite:

```tsx
const { createPost, updatePost } = usePostsContext()

function handleFormAction(formData: FormData) {
  const fields = Object.fromEntries(formData) as Omit<PostData, 'id' | 'votes'>
  if (isEditing) {
    updatePost(initialFormData.id, fields)
    navigate(`/posts/${initialFormData.id}`)
  } else {
    createPost(fields)
    navigate('/posts')
  }
}
```

`updatePost` lädt die Beiträge anschließend automatisch neu.

### Schritt 6: Im Edit-Modus die Stimmen bearbeiten

Rendere per Conditional Rendering ein zusätzliches Feld – aber nur beim Bearbeiten:

```tsx
{isEditing && (
  <TextInput
    label="Stimmen"
    name="votes"
    type="number"
    defaultValue={initialFormData.votes}
    required
  />
)}
```

Werte aus einem Formular sind immer Strings. `votes` muss deshalb vor dem
`updatePost` von `string` zu `number` gecastet werden:

```tsx
if (isEditing) {
  const votes = Number(formData.get('votes'))
  updatePost(initialFormData.id, { ...fields, votes })
  navigate(`/posts/${initialFormData.id}`)
}
```
