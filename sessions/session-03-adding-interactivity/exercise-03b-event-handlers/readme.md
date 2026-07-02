[Zurück zur Session-Übersicht](../readme.md)

**Session 03 - Übung B**

# Umschalt-Button

Der Button aus Session 02 ist bislang ohne Funktion: Ein Klick bewirkt nichts, weil `showMore`
nur den festen bzw. anfänglichen Wert hat. In dieser Übung reagierst du mit einem **Event
Handler** auf den Klick und änderst damit den State.

## Aufgabe: Den Button mit dem State verknüpfen

### Schritt 1: Eine Umschaltfunktion erstellen

Füge in `src/components/Post.tsx` eine `toggleShowMore`-Funktion hinzu, die den Wert von
`showMore` umkehrt:

```tsx
function toggleShowMore() {
  setShowMore(!showMore)
}
```

### Schritt 2: Den Button mit onClick verknüpfen

Der Button existiert bereits – ergänze nur den `onClick`-Handler, der beim Klick
`toggleShowMore` aufruft:

```tsx
<Button onClick={toggleShowMore} variant="outline">
  {showMore ? 'Weniger anzeigen' : 'Mehr lesen'}
</Button>
```

### Schritt 3: Ausprobieren

Klicke auf den Button: Die Nachricht wird ein- und ausgeblendet, und der Button-Text wechselt
zwischen „Mehr lesen" und „Weniger anzeigen". Der Aufruf von `setShowMore` sorgt dafür, dass
React die Komponente mit dem neuen Wert neu rendert.
