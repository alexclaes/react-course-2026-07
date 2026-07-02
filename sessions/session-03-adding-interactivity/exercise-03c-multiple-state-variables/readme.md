[Zurück zur Session-Übersicht](../readme.md)

**Session 03 - Übung C**

# Stimmenanzeige

## Aufgabe 1: Einen Stimmenzähler hinzufügen

### Schritt 1: Einen zweiten useState für Stimmen hinzufügen

Füge in `src/components/Post.tsx` einen zweiten `useState`-Aufruf hinzu:

```tsx
const [showMore, setShowMore] = useState(false)
const [votes, setVotes] = useState(0)
```

### Schritt 2: Die Stimmenanzahl anzeigen

Importiere `Group` aus Mantine:

```tsx
import { Button, Group, Text, Title } from '@mantine/core'
```

Füge unter `PostMeta` – oberhalb des „Mehr lesen"-Buttons – eine `Group` mit der Stimmenanzahl hinzu:

```tsx
<Group gap="xs" align="center">
  <Text fw={600}>Stimmen: {votes}</Text>
</Group>
```

## Aufgabe 2: Abstimmungsbuttons hinzufügen

### Schritt 1: Handler-Funktionen erstellen

Füge nach `toggleShowMore` zwei Funktionen hinzu, die den `votes` State aktualisieren:

```tsx
function handleUpvote() {
  setVotes(votes + 1)
}

function handleDownvote() {
  setVotes(votes - 1)
}
```

### Schritt 2: Abstimmungsbuttons hinzufügen

Füge in der Stimmen-`Group` zwei `Button` vor dem `Text` hinzu:

```tsx
<Group gap="xs" align="center">
  <Button onClick={handleUpvote}>Hochwählen</Button>
  <Button onClick={handleDownvote}>Runterwählen</Button>
  <Text fw={600}>Stimmen: {votes}</Text>
</Group>
```

Deine `Post`-Komponente sollte nun so aussehen:

```tsx
import PostMeta from './PostMeta'
import Panel from './Panel'
import { Button, Group, Text, Title } from '@mantine/core'
import { useState } from 'react'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  const [showMore, setShowMore] = useState(false)
  const [votes, setVotes] = useState(0)

  function toggleShowMore() {
    setShowMore(!showMore)
  }

  function handleUpvote() {
    setVotes(votes + 1)
  }

  function handleDownvote() {
    setVotes(votes - 1)
  }

  return (
    <Panel title={<Title order={2}>{title}</Title>}>
      <PostMeta author={author} date={date} />

      <Group gap="xs" align="center">
        <Button onClick={handleUpvote}>Hochwählen</Button>
        <Button onClick={handleDownvote}>Runterwählen</Button>
        <Text fw={600}>Stimmen: {votes}</Text>
      </Group>

      <Button onClick={toggleShowMore} variant="outline">
        {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
      </Button>

      {showMore && <Text>{message}</Text>}
    </Panel>
  )
}
```
