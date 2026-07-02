[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung D**

# Die children-Prop

## Aufgabe: Eine Panel-Komponente mit Children erstellen

### Schritt 1: Die Panel-Komponente erstellen

Erstelle eine neue Datei `src/components/Panel.tsx`. Die `children`-Prop wird mit `ReactNode` typisiert:

```tsx
import { Card, Stack } from '@mantine/core'
import type { ReactNode } from 'react'

type PanelProps = {
  children: ReactNode
}

export default function Panel({ children }: PanelProps) {
  return (
    <Card withBorder radius="md" padding="lg">
      <Stack gap="md">{children}</Stack>
    </Card>
  )
}
```

### Schritt 2: Panel in der Post-Komponente verwenden

Öffne `src/components/Post.tsx` und ersetze die `Card`/`Stack`-Hülle durch `Panel`:

```tsx
import PostMeta from './PostMeta'
import Panel from './Panel'
import { Text, Title } from '@mantine/core'

type PostProps = {
  title: string
  author: string
  date: string
  message: string
}

export default function Post({ title, author, date, message }: PostProps) {
  return (
    <Panel>
      <Title order={2}>{title}</Title>
      <PostMeta author={author} date={date} />
      <Text>{message}</Text>
    </Panel>
  )
}
```
