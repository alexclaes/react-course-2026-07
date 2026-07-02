[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung C**

# Ladezustände behandeln

## Aufgabe 1: Ladezustand in der PostList-Komponente

Füge vor dem `return` eine Prüfung ein:

```tsx
if (posts.length === 0) {
  return <Text>Laden...</Text>
}
```

## Aufgabe 2: Ladezustand in der PostDetailsPage

Füge vor dem Suchen des Posts eine Prüfung ein:

```tsx
if (posts.length === 0) {
  return <p>Laden...</p>
}
```
