[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung G**

# Unnötige Re-Renders vermeiden mit React.memo

## Aufgabe: Listeneinträge mit React.memo memoisieren

### Schritt 1: Das Problem verstehen

In `src/components/PostList.tsx` wird jeder Eintrag direkt im `map` gerendert.
Tippe testweise ein `console.log` in den Map-Body und beobachte die Konsole:
Bei **jedem Tastendruck** im Suchfeld rendern **alle** sichtbaren Einträge neu –
auch die, deren Daten sich gar nicht geändert haben.

### Schritt 2: Den Eintrag in eine eigene Komponente auslagern

Erstelle `src/components/PostListItem.tsx` und verschiebe den Inhalt des
Map-Bodys hierher. Die Komponente bekommt den Post als Prop:

```tsx
import { Link } from "react-router";
import { Anchor, Group, Text } from "@mantine/core";
import Panel from "./Panel";
import type { PostData } from "../types";

type PostListItemProps = {
  post: PostData;
};

function PostListItem({ post }: PostListItemProps) {
  console.log("rendere PostListItem:", post.title);
  return (
    <Anchor component={Link} to={`/posts/${post.id}`} underline="never" c="inherit">
      <Panel>
        <Group justify="space-between" align="center">
          <Text>
            <strong>{post.title}</strong> ({post.date})
          </Text>
          <Text c="dimmed">Stimmen: {post.votes}</Text>
        </Group>
      </Panel>
    </Anchor>
  );
}
```

### Schritt 3: Die Komponente mit memo exportieren

`memo` überspringt das erneute Rendern, wenn sich die Props nicht geändert haben:

```tsx
import { memo } from "react";

// ...

export default memo(PostListItem);
```

### Schritt 4: Die Komponente in PostList verwenden

Ersetze den Map-Body durch die neue Komponente und entferne die dadurch nicht
mehr benötigten Importe (`Link`, `Panel`, `Anchor`):

```tsx
import PostListItem from "./PostListItem";

// ...

{sortedPosts.map((post) => (
  <PostListItem key={post.id} post={post} />
))}
```

Tippe erneut ins Suchfeld: Jetzt rendern nur noch Einträge neu, deren Daten sich
tatsächlich ändern. Das funktioniert, weil die einzelnen `post`-Objekte dieselbe
Referenz behalten – deshalb lohnen sich stabile Werte aus `useMemo`/`useCallback`.

> Hinweis: Bei dieser kleinen Liste ist der Effekt vor allem zum Lernen sichtbar.
> `memo` ist kein Standard für jede Komponente, sondern ein gezieltes Werkzeug
> gegen echte, gemessene Performance-Probleme.
