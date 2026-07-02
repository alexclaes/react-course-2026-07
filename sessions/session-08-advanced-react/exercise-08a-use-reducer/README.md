[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung A**

# Beiträge filtern und sortieren mit useReducer

## Aufgabe: PostList mit useReducer erweitern

### Schritt 1: Import anpassen

Öffne `src/components/PostList.tsx` und ersetze `useState` durch `useReducer`:

```tsx
import { useReducer } from 'react'
```

Ergänze `Select` und `Button` im Mantine-Import:

```tsx
import { Anchor, Button, Group, Select, Stack, Text, TextInput } from '@mantine/core'
```

Nutze für den Kontext den `usePostsContext`-Hook. Passe den Import an und ersetze in der Komponente `useContext(PostsContext)` durch `usePostsContext()`:

```tsx
import { usePostsContext } from '../PostsContext'
```

```tsx
const { posts } = usePostsContext()
```

### Schritt 2: Reducer-Funktion und Anfangszustand definieren

Definiere zuerst die Typen für den Zustand und die Aktionen und füge oberhalb der Komponente ein:

```tsx
type FilterState = {
  searchTerm: string
  sortField: string
  sortDirection: string
}

type FilterAction =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_SORT_FIELD'; payload: string }
  | { type: 'SET_SORT_DIRECTION'; payload: string }
  | { type: 'RESET_FILTERS' }

const initialState: FilterState = {
  searchTerm: '',
  sortField: 'date',
  sortDirection: 'desc',
}

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload }
    case 'SET_SORT_FIELD':
      return { ...state, sortField: action.payload }
    case 'SET_SORT_DIRECTION':
      return { ...state, sortDirection: action.payload }
    case 'RESET_FILTERS':
      return initialState
    default:
      return state
  }
}
```

### Schritt 3: useState durch useReducer ersetzen

Ersetze in der Komponente:

```tsx
const [searchTerm, setSearchTerm] = useState('')
```

durch:

```tsx
const [state, dispatch] = useReducer(filterReducer, initialState)
```

### Schritt 4: Sucheingabe anpassen

Ändere die Props des `TextInput`-Suchfelds:

```tsx
<TextInput
  placeholder="Suchen..."
  value={state.searchTerm}
  onChange={(event) => dispatch({ type: 'SET_SEARCH', payload: event.currentTarget.value })}
/>
```

### Schritt 5: Sortier-Steuerelemente hinzufügen

Füge nach dem Suchfeld zwei `Select`-Dropdowns und einen Reset-Button ein:

```tsx
<Group justify="space-between">
  <Group gap="xs">
    <Select
      w={160}
      value={state.sortField}
      onChange={(value) => value && dispatch({ type: 'SET_SORT_FIELD', payload: value })}
      data={[
        { value: 'date', label: 'Datum' },
        { value: 'title', label: 'Titel' },
        { value: 'votes', label: 'Stimmen' },
      ]}
    />
    <Select
      w={160}
      value={state.sortDirection}
      onChange={(value) => value && dispatch({ type: 'SET_SORT_DIRECTION', payload: value })}
      data={[
        { value: 'desc', label: 'Absteigend' },
        { value: 'asc', label: 'Aufsteigend' },
      ]}
    />
  </Group>
  <Button variant="default" onClick={() => dispatch({ type: 'RESET_FILTERS' })}>
    Zurücksetzen
  </Button>
</Group>
```

### Schritt 6: Filter- und Sortierlogik kombinieren

Ersetze die bisherige `filteredPosts`-Berechnung:

```tsx
const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
)

const sortedPosts = [...filteredPosts].sort((a, b) => {
  if (state.sortField === 'votes') {
    return state.sortDirection === 'asc' ? a.votes - b.votes : b.votes - a.votes
  }
  const valA = String(a[state.sortField as keyof typeof a] ?? '').toLowerCase()
  const valB = String(b[state.sortField as keyof typeof b] ?? '').toLowerCase()
  return state.sortDirection === 'asc'
    ? valA.localeCompare(valB)
    : valB.localeCompare(valA)
})
```

Verwende dann `sortedPosts` im JSX:

```tsx
{sortedPosts.map((post) => (
```
