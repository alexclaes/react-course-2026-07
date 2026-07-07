[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung H**

# Einzelnen Beitrag vom Server laden

Bisher hat `useEffect` in dieser App immer ein **leeres** Dependency-Array (`[]`) und läuft dadurch
nur **einmal beim Mounten**. In dieser Übung lernst du das Dependency-Array richtig kennen: Ein Effekt
läuft **erneut**, sobald sich ein Wert im Array ändert.

Aktuell holt sich `PostDetailsPage` den anzuzeigenden Beitrag aus dem Context (`posts.find(...)`). Wir
stellen die Seite so um, dass sie den einzelnen Beitrag **selbst vom Server lädt** – abhängig von der
`id` aus der URL.

## Aufgabe 1: Beitrag anhand der `id` vom Server laden

Öffne `src/pages/PostDetailsPage.tsx` und ersetze den Inhalt.

### Schritt 1: Den Beitrag in lokalem State halten

Statt den Beitrag aus dem Context zu suchen, speichern wir ihn in einem eigenen State:

```tsx
const { id } = useParams()
const [post, setPost] = useState<PostData | null>(null)
```

### Schritt 2: `loadPost`-Funktion erstellen

Sie lädt genau den einen Beitrag über `api.getPost(id)`:

```tsx
async function loadPost() {
  if (!id) return
  const response = await api.getPost(id)
  if (!response.ok) {
    setPost(null)
    return
  }
  const data: PostData = await response.json()
  setPost(data)
}
```

### Schritt 3: `loadPost` in einem Effekt aufrufen – abhängig von `id`

```tsx
useEffect(() => {
  loadPost()
}, [id])
```

Das `[id]` ist der Kern dieser Übung: Der Effekt läuft nicht nur beim Mounten, sondern **jedes Mal
neu, wenn sich `id` ändert**.

### Schritt 4: Ladezustand anzeigen

Solange noch kein Beitrag geladen ist, zeigen wir einen Ladehinweis:

```tsx
if (!post) {
  return <p>Laden...</p>
}
```

## Aufgabe 2: Zwischen Beiträgen navigieren (ohne Neu-Mounten)

Damit der Effekt beim Wechsel der `id` sichtbar erneut läuft, brauchen wir eine Möglichkeit, direkt
von einem Beitrag zum nächsten zu springen – **ohne** die Seite über die Liste neu aufzurufen (das
würde die Komponente neu mounten). Wir berechnen aus der Liste im Context den vorherigen und nächsten
Beitrag und navigieren dorthin.

### Schritt 1: Nachbar-Beiträge bestimmen

```tsx
const { posts } = usePostsContext()
const navigate = useNavigate()

const index = posts.findIndex((p) => p.id === id)
const prevId = index > 0 ? posts[index - 1].id : undefined
const nextId =
  index >= 0 && index < posts.length - 1 ? posts[index + 1].id : undefined
```

### Schritt 2: Navigations-Buttons rendern

```tsx
<Group justify="space-between" mb="md">
  <Button
    variant="outline"
    disabled={!prevId}
    onClick={() => navigate(`/posts/${prevId}`)}
  >
    ← Vorheriger
  </Button>
  <Button
    variant="outline"
    disabled={!nextId}
    onClick={() => navigate(`/posts/${nextId}`)}
  >
    Nächster →
  </Button>
</Group>
```

Öffne einen Beitrag und klicke auf „Nächster" / „Vorheriger". Im Netzwerk-Tab siehst du: Bei jedem
Wechsel wird erneut `GET /api/posts/:id` aufgerufen. Die Komponente bleibt gemountet – nur die `id`
ändert sich, und weil sie im Dependency-Array steht, läuft der Effekt erneut.

## Aufgabe 3: Experiment – was macht das Dependency-Array?

Ändere das Dependency-Array testweise von `[id]` zu `[]`:

```tsx
useEffect(() => {
  loadPost()
}, []) // <-- nur zum Ausprobieren!
```

Klicke jetzt auf „Nächster". Die URL ändert sich, aber der **alte Beitrag bleibt stehen** – der Effekt
läuft nicht erneut, weil sein Array leer ist. Genau das ist der Unterschied:

- `[]` → Effekt läuft **nur einmal beim Mounten**.
- `[id]` → Effekt läuft **zusätzlich jedes Mal, wenn sich `id` ändert**.

Setze das Array anschließend wieder auf `[id]`.

## Aufgabe 4: Stimmen aktuell halten

Dir fällt vielleicht auf: Wenn du auf der Detailseite hoch- oder runterwählst, ändert sich die
angezeigte Stimmenzahl nicht sofort. Der Grund ist wieder das Dependency-Array – der Effekt hängt nur
von `id` ab, und beim Voten ändert sich die `id` **nicht**. Der Beitrag in unserem lokalen State wird
also nicht neu geladen.

Wir lösen das, indem wir den Beitrag nach einer Änderung neu laden. Öffne `src/components/Post.tsx`
und ergänze eine optionale `onChange`-Prop, die nach dem Voten aufgerufen wird:

```tsx
type PostProps = {
  // ...bestehende Props...
  onChange?: () => void
}
```

```tsx
export default function Post({
  // ...bestehende Props...
  onChange,
}: PostProps) {
```

Mache die Vote-Handler `async` und rufe `onChange` auf, sobald die Änderung gespeichert wurde:

```tsx
async function handleUpvote() {
  await updatePost(id, { votes: votes + 1 })
  onChange?.()
}

async function handleDownvote() {
  await updatePost(id, { votes: votes - 1 })
  onChange?.()
}
```

Übergib in `PostDetailsPage` schließlich `loadPost` als `onChange`:

```tsx
<Post
  id={post.id}
  title={post.title}
  author={post.author}
  date={post.date}
  message={post.message}
  votes={post.votes}
  onChange={loadPost}
/>
```

Jetzt wird nach jedem Voten `loadPost` aufgerufen, der Beitrag neu geladen und die Stimmenzahl
aktualisiert sich sofort. In der Listenansicht bleibt `onChange` `undefined` – dort ändert sich nichts.
