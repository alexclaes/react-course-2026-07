[Zurück zur Session-Übersicht](../readme.md)

**Session 04 - Übung C**

# Formulardaten verarbeiten

## Aufgabe: Formularübermittlung mit einer Form Action verarbeiten

### Schritt 1: Einen Form Action Handler erstellen

Öffne `src/components/PostForm.tsx` und erstelle in `PostForm` eine `handleFormAction`-Funktion:

```tsx
function handleFormAction(formData: FormData) {
  const fields = Object.fromEntries(formData)
  console.log(fields)
}
```

### Schritt 2: Den Handler an das Formular anhängen

Füge die `action` Prop zum `<form>`-Element hinzu:

```tsx
<form action={handleFormAction}>
```
