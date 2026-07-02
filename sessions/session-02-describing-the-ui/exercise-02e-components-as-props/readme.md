[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung E**

# Komponenten als Props

## Aufgabe: Der Panel-Komponente einen title übergeben

### Schritt 1: Die Panel-Komponente erweitern

Öffne `src/components/Panel.tsx` und ergänze eine `title`-Prop oberhalb der `children`. Sie ist optional und ebenfalls ein `ReactNode`:

```tsx
import { Card, Stack } from '@mantine/core'
import type { ReactNode } from 'react'

type PanelProps = {
  title?: ReactNode
  children: ReactNode
}

export default function Panel({ title, children }: PanelProps) {
  return (
    <Card withBorder radius="md" padding="lg">
      <Stack gap="md">
        {title}
        {children}
      </Stack>
    </Card>
  )
}
```

### Schritt 2: Den Titel als Prop übergeben

Öffne `src/components/Post.tsx` und verschiebe den `<Title>` in die `title`-Prop:

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
    <Panel title={<Title order={2}>{title}</Title>}>
      <PostMeta author={author} date={date} />
      <Text>{message}</Text>
    </Panel>
  )
}
```
