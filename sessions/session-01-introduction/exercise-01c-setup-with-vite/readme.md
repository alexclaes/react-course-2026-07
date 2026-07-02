[Zurück zur Session-Übersicht](../readme.md)

**Session 01 - Übung C**

## Aufgabe 1: Erstelle ein neues Projekt mit `vite`

Öffne das Arbeitsverzeichnis in deiner IDE mit dem integrierten Terminal:

```
workspace
```

Erstelle ein neues Projekt mit `vite`:

```
npm create vite@latest
```

Nutze die folgenden Einstellungen:

- Projektname: `message-board`
- Framework: `React`
- Variant: `TypeScript`

Starte den lokalen Entwicklungsserver und öffne `http://localhost:5173/`:

```
npm run dev
```

## Aufgabe 2: Die Projektstruktur erkunden

### Schritt 1: Projektübersicht

Untersuche die Verzeichnisse und Dateien in der Codebasis:

| Pfad           | Beschreibung                                                                                                        |
|----------------| ------------------------------------------------------------------------------------------------------------------- |
| `node_modules` | Alle via `npm` installierten Abhängigkeiten. Hier niemals Änderungen vornehmen. Sollte nicht per `git` comitted werden. | 
| `public`       | Dieses Verzeichnis wird zum Speichern von Asset-Dateien verwendet, die im Browser geladen werden können.            |
| `index.html`   | Diese Datei ist die HTML-Seite, die im Browser geladen wird. In der Regel musst du hier keine Änderungen vornehmen. |
| `src`          | Dieses Verzeichnis wird zum Speichern deines gesamten Codes verwendet.                                              |
| `src/App.tsx`  | Diese Datei enthält die `App` React-Component: Den Startpunkt aller React-Apps.                                     |

### Schritt 2: Den React-Code verstehen

Öffne die Datei `src/App.tsx` und lies den Code.

## Aufgabe 3: Die App anpassen

### Schritt 1: Das JSX ändern

Ändere in `src/App.tsx` den Inhalt der Überschrift zu **"Message Board"**:

```tsx
<h1>Message Board</h1>
```

## Aufgabe 4: Aufräumen

Ersetze den Inhalt der Datei `src/App.tsx` durch:

```tsx
export default function App() {
  return (
    <h1>Message Board</h1>
  )
}
```

Entferne in `src/main.tsx` die Zeile, die `./index.css` importiert.

Lösche die folgenden Dateien und Verzeichnisse:

- `src/App.css`
- `src/index.css`
- `src/assets/`
