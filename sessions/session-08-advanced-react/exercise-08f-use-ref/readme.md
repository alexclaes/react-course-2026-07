[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung F**

# Auf DOM-Elemente zugreifen mit useRef

## Aufgabe: Das Titel-Feld beim Öffnen des Formulars automatisch fokussieren

### Schritt 1: Das Ziel verstehen

Wenn die Nutzer das Formular öffnen (zum Anlegen oder Bearbeiten), soll der
Cursor sofort im Feld **Titel** stehen. Dafür brauchst du direkten Zugriff auf
das DOM-Element – genau dafür ist `useRef` da.

### Schritt 2: useRef und useEffect importieren

```tsx
import { useEffect, useRef } from "react";
```

### Schritt 3: Eine Ref anlegen und nach dem Rendern fokussieren

Lege in `src/components/PostForm.tsx` eine Ref an und fokussiere das Element in
einem `useEffect`, der nur einmal beim Mounten läuft:

```tsx
const titleRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  titleRef.current?.focus();
}, []);
```

### Schritt 4: Die Ref mit dem Eingabefeld verbinden

Gib die Ref über die `ref`-Prop an das Titel-`TextInput` weiter:

```tsx
<TextInput
  ref={titleRef}
  label="Titel"
  name="title"
  type="text"
  defaultValue={initialFormData?.title}
  required
/>
```

Öffne die Add- oder Edit-Seite: Der Cursor steht jetzt automatisch im Titel-Feld.
