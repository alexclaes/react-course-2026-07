[Zurück zur Session-Übersicht](../readme.md)

# Übung A: Router einrichten

## Aufgabe: Router einrichten

### Schritt 1: Installiere den Router

```bash
npm install react-router
```

### Schritt 2: Den Router nutzen

Öffne `src/main.tsx` und importiere den `BrowserRouter`.

```tsx
import { BrowserRouter } from 'react-router'
```

Umschließe `<App />` mit `<BrowserRouter>` (innerhalb von `<StrictMode>`).

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```
