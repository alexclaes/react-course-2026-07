---
marp: true
theme: course
paginate: true
lang: de
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Interaktivität hinzufügen

Session 03

---

<!-- _class: lead -->

# Was ist State?

---

## State ist

Applikationsdaten, die sich über die Laufzeit verändern.

(zum Beispiel nach Nutzerinteraktionen)

---

## Übungen

**03a**

<!-- _class: lead -->

---

# Was sind Event Handler?

---

## Was sind Event Handler?

**Werden zu UI-Elementen hinzugefügt:**
Assoziation mit spezifischen UI-Elementen durch Event-Listener.

**Reaktion auf Nutzeraktionen:**
Werden in Reaktion auf Nutzeraktionen verarbeitet (Klicks, Tastendruck).

---

<!-- _class: lead -->

# State Handling in React

---

<!-- _class: image -->

![Counter mit useState — 1. Komponente wird ausgeführt](assets/render-cycle-1.png)

---

<!-- _class: image -->

![Counter mit useState — 2. UI wird im Browser gerendert](assets/render-cycle-2.png)

---

<!-- _class: image -->

![Counter mit useState — 3. User interagiert mit dem UI](assets/render-cycle-3.png)

---

<!-- _class: image -->

![Counter mit useState — 4. Event Handler wird ausgeführt](assets/render-cycle-4.png)

---

<!-- _class: image -->

![Counter mit useState — 5. State-Update sorgt für erneutes Ausführen der Funktion](assets/render-cycle-5.png)

---

<!-- _class: image -->

![Counter mit useState — 6. Komponente wird erneut ausgeführt](assets/render-cycle-6.png)

---

<!-- _class: image -->

![Counter mit useState — 7. UI wird im Browser gerendert (mit neuem State-Wert)](assets/render-cycle-7.png)

---

## Übungen

**03b**

---

<!-- _class: lead -->

# React Hooks

---

## Was sind Hooks?

- Funktion einer React-Komponente erweitern.
- Logik, die im Hintergrund bleibt und ausgelagert ist
- Funktionen, die mit `use` beginnen

---

## Die Regeln von Hooks

Hooks werden immer auf oberster Ebene in einer Komponenten-Funktion aufgerufen

- 🔴 Nicht innerhalb von Schleifen
- 🔴 Nicht nach dem return-Statement
- 🔴 Nicht innerhalb von Event-Handlern
- 🔴 Nicht innerhalb sonstiger Funktionen
- 🔴 Nicht innerhalb von konditionaler Logik (IF-ELSE)

---

## Wie und wo Hooks aufrufen?

### Immer am Anfang einer Komponente

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // ... more code
}
```

---

## Übungen

**03c**
