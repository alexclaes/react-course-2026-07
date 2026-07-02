[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung F**

# Löschen mit dem Server synchronisieren

## Aufgabe: `deletePost` mit dem Server verbinden

Öffne `src/App.tsx`. Der `api`-Import ist bereits vorhanden. Ersetze die `deletePost`-Funktion – entferne den Beitrag zuerst direkt über `setPosts`, sende die Löschung dann per `api.deletePost` an den Server und lade danach neu:

```tsx
async function deletePost(id: string) {
  setPosts(posts.filter((item) => item.id !== id))
  await api.deletePost(id)
  loadPosts()
}
```
