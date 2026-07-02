[Zurück zur Session-Übersicht](../readme.md)

**Session 02 - Übung G**

# Bedingtes Rendern

## Aufgabe: Die Nachricht nur bei Bedarf anzeigen

### Schritt 1: Eine boolesche Variable anlegen

Öffne `src/components/Post.tsx` und lege innerhalb der Komponente eine Variable `showMore` an:

```tsx
export default function Post({ title, author, date, message }: PostProps) {
  const showMore = false

  return (
    // ...
  )
}
```

### Schritt 2: Die Nachricht bedingt rendern

Ersetze die bisher immer sichtbare Nachricht

```tsx
<Text>{message}</Text>
```

durch die bedingte Variante mit `&&`:

```tsx
{
  showMore && <Text>{message}</Text>;
}
```

Dein vollständiger Return-Ausdruck sollte so aussehen:

```tsx
return (
  <Panel title={<Title order={2}>{title}</Title>}>
    <PostMeta author={author} date={date} />
    {showMore && <Text>{message}</Text>}
  </Panel>
);
```

Weil `showMore` aktuell `false` ist, wird die Nachricht nicht angezeigt.

### Schritt 3: Einen Umschalt-Button hinzufügen

Importiere zuerst `Button` aus Mantine:

```tsx
import { Button, Text, Title } from "@mantine/core";
```

Füge unter `PostMeta` einen Button ein, dessen Text von `showMore` abhängt:

```tsx
<Button variant="outline">
  {showMore ? "Weniger anzeigen" : "Mehr lesen"}
</Button>
```

Der Button hat noch **keine** Funktion beim Klicken – das folgt in Session 03. Dein
Return-Ausdruck sieht jetzt so aus:

```tsx
return (
  <Panel title={<Title order={2}>{title}</Title>}>
    <PostMeta author={author} date={date} />

    <Button variant="outline">
      {showMore ? "Weniger anzeigen" : "Mehr lesen"}
    </Button>

    {showMore && <Text>{message}</Text>}
  </Panel>
);
```

### Schritt 4: Das Ergebnis testen

Stelle `showMore` vorübergehend auf `true`:

```tsx
const showMore = true;
```

Jetzt erscheint die Nachricht bei allen Beiträgen und der Button-Text wechselt von „Mehr lesen"
zu „Weniger anzeigen". Stelle den Wert anschließend wieder auf `false` zurück.
