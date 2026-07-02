[Zurück zur Session-Übersicht](../readme.md)

**Session 03 - Übung A**

# Der useState-Hook

In der vorigen Übung hast du die Nachricht mit `const showMore = false` bedingt gerendert. Der
Wert ist damit aber **fest**: Um ihn zu ändern, musst du den Code anpassen und die Seite neu laden.

Für Werte, die sich **während der Laufzeit** ändern und bei denen React das UI automatisch neu
rendern soll, gibt es **State**. Der `useState`-Hook macht aus `showMore` genau so einen
zustandsbehafteten Wert.

## Aufgabe: showMore in State umwandeln

### Schritt 1: useState importieren

Öffne `src/components/Post.tsx` und importiere `useState`:

```tsx
import { useState } from "react";
```

### Schritt 2: const durch useState ersetzen

Ersetze die feste Variable

```tsx
const showMore = false;
```

durch den `useState`-Hook:

```tsx
const [showMore, setShowMore] = useState(false);
```

`useState` gibt ein Array mit zwei Elementen zurück:

- `showMore` – der aktuelle Wert (Anfangswert ist der an `useState` übergebene Wert, hier `false`).
- `setShowMore` – eine Funktion, mit der du den Wert änderst. Ruft man sie auf, rendert React die
  Komponente automatisch neu.

Das bedingte Rendern und der Button aus der vorigen Übung bleiben unverändert:

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

### Schritt 3: Das Ergebnis testen

Setze den Anfangswert vorübergehend auf `true`, um zu sehen, dass der State das Rendern steuert:

```tsx
const [showMore, setShowMore] = useState(true);
```

Stelle den Wert danach wieder auf `false` zurück.
