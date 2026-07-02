[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung D**

# Daten an den Server senden

## Aufgabe: `createPost` mit dem Server verbinden

Öffne `src/App.tsx`. Der `api`-Import ist bereits vorhanden. Aktualisiere die Liste zuerst direkt über `setPosts` (der neue Beitrag erscheint sofort), sende ihn dann per `api.createPost` an den Server und lade die Beiträge anschließend neu, um mit dem Server abzugleichen:

```tsx
async function createPost(newPost: Omit<PostData, 'id' | 'votes'>) {
  setPosts([...posts, { id: uid(), votes: 0, ...newPost }])
  await api.createPost(newPost)
  loadPosts()
}
```
