[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung E**

# Voting mit dem Server synchronisieren

## Aufgabe: `updatePost` mit dem Server verbinden

Öffne `src/App.tsx`. Der `api`-Import ist bereits vorhanden. Ersetze die `updatePost`-Funktion – aktualisiere die Liste zuerst direkt über `setPosts`, sende die Änderung dann per `api.updatePost` an den Server und lade danach neu:

```tsx
async function updatePost(id: string, updatedItem: Partial<PostData>) {
  setPosts(
    posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
  )
  await api.updatePost(id, updatedItem)
  loadPosts()
}
```
