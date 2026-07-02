---
marp: true
theme: course
paginate: true
lang: de
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Managing State

Session 05

---

<!-- _class: lead -->

# State zwischen Komponenten teilen

---

<!-- _class: image -->

![Komponentenbaum: App mit Content/Header, verschachtelte Komponenten, "Is User logged in?"](assets/lifting-state-up-1.png)

---

<!-- _class: lead -->

# Lifting State Up!

---

<!-- _class: image-headline -->

## Lifting State Up: zum ersten gemeinsamen Vorfahren

![Lifting State Up](assets/lifting-state-up-2.png)

---

<!-- _class: image-headline -->

## Daten und Funktionen via Props herunterreichen

![Props fließen abwärts](assets/lifting-state-up-3.png)

---

<!-- _class: lead -->

# Objekte in Arrays in State

---

<!-- _class: image-headline -->

## Setup

![Setup: initialTodos-Array mit Objekten (id, title, completed) und useState](assets/array-setup.png)

---

<!-- _class: image-headline -->

## Hinzufügen

![Hinzufügen: neues Array mit Spread und neuem Objekt (uid(), newItem)](assets/array-add.png)

---

## Übungen

**05a**

---

<!-- _class: image-headline -->

## Ändern

![Ändern: .map() über todos mit id-Vergleich und Merge der Änderungen](assets/array-update.png)

---

## Übungen

**05b**

---

<!-- _class: image-headline -->

## Löschen

![Löschen: .filter() entfernt Element mit passender id](assets/array-delete.png)

---

## Übungen

**05c**

---

<!-- _class: lead -->

# Prop-Drilling

---

## Das Problem von Prop-Drilling

- State und Funktionen liegen weit oben — z. B. in `App`
- Jede Zwischenebene muss Props entgegennehmen und weitergeben
- Komponenten in der Mitte transportieren Daten, die sie selbst nicht brauchen
- Tieferer Komponentenbaum → viele unnötige Props → unübersichtlicher Code

---

<!-- _class: lead -->

# Eine Lösung: React Context

---

## React Context

- Alternative zum Durchreichen über viele Ebenen
- Ein **Provider** stellt Daten für einen Teilbaum bereit
- Tief liegende Komponenten lesen per **Hook** direkt aus dem Context
- Geteilte Daten ohne Prop-Drilling durch die Zwischenebenen

---

## Übungen

**05d** und **05e**
