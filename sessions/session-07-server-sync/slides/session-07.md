---
marp: true
theme: course
paginate: true
lang: de
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Server Sync

Session 07

---

<!-- _class: lead -->

# UI in React aktualisieren

---

<!-- _class: image -->

![Counter mit Props und State: useState(0), handleIncrease(), button onClick](assets/react-component.png)

---

<!-- _class: lead -->

# Aktualisierung der Anzeige <br>erfordert IMMER ein State-Update

---

## Auslösen von State-Updates

**Events**
Ausgelöst durch Nutzerinteraktion

- `<button onClick>`
- `<form onSubmit>`
- `<input onChange>`

---

<!-- _class: image -->

![Counter: handleIncrease mit setCount und button onClick={handleIncrease}](assets/ui-update-event.png)

---

<!-- _class: columns -->

## Auslösen von State-Updates

<div class="columns-wrap">
<div>

**Events**
Ausgelöst durch Nutzerinteraktion

- `<button onClick>`
- `<form onSubmit>`
- `<input onChange>`

</div>
<div>

**Seiteneffekte**
Ausgelöst durch React selbst, nachdem eine Komponente gerendert wurde

Werden automatisch ausgeführt, ohne Nutzerinteraktion

`useEffect` Hook

</div>
</div>

---

<!-- _class: image -->

![Counter mit useEffect, der beim Mounten setCount(42) aufruft](assets/ui-update-effect.png)

---

<!-- _class: lead -->

# Timeline eines Seiteneffekts

---

<!-- _class: image -->

![Timeline: erste Anzeige (count=0) → useEffect → setCount(42) → Anzeige (count=42)](assets/effect-timeline-2.png)

---

<!-- _class: lead -->

# Dieses Muster wird genutzt, um Daten von einem Server / einer API zu laden

---

<!-- _class: image -->

![Timeline: erste Anzeige → useEffect → fetch() → setTodos(todosFromServer) → aktualisierte Anzeige](assets/effect-timeline-1.png)

---

<!-- _class: image -->

![TodoList: useState([]), async loadTodos() mit fetch(), useEffect, .map() mit key={todo.id}](assets/effect-example.png)

---

## Übungen

**07a** bis **07f**
