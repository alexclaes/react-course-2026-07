---
marp: true
theme: course
paginate: true
lang: de
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Beschreiben des UI

Session 02

---

<!-- _class: lead -->

# Hierarchie von Komponenten

---

<!-- _class: columns -->

<div class="columns-wrap">
<div>

```jsx
function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <NavLink />
      <NavLink />
    </nav>
  );
}

function NavLink() {
  return (
    <a href="...">
      <Icon /> Some label here
    </a>
  );
}
```

</div>
<div>

- App
  - NavBar
    - NavLink
      - Icon
    - NavLink
      - Icon

</div>
</div>

---

<!-- _class: lead -->

# Props

---

<!-- _class: image-headline -->

## Daten an Komponenten reichen

![Daten an Komponenten reichen](assets/props.png)

---

## Übungen

**02a** und **02b**

---

<!-- _class: lead -->

# Besondere Prop: children

---

<!-- _class: image -->

![Alles zwischen Start- und End-Tag: <UserCard> mit Inhalt vs. UserCard mit {children} Prop](assets/children-prop.png)

---

## Übungen

**02c** und **02d**

---

<!-- _class: lead -->

# Externe Pakete

---

## Pakete via npm installieren

- Nicht alles selbst bauen: fertige Bibliotheken aus dem npm-Registry nutzen
- Installation mit npm install
- Beispiel: **Mantine** — UI-Komponenten wie `Button`, `Card`, `Group`
- Import in React-Komponenten und direkt in JSX verwenden

---

## Übungen

**02e**

---

<!-- _class: lead -->

# Daten aus Arrays rendern

---

<!-- _class: image -->

![.map(): fruits.map((fruit) => <li>{fruit}</li>) mit Hinweis, .map() nie ohne key Prop](assets/map-without-key.png)

---

<!-- _class: image -->

![Immer key Prop verwenden: Array von Objekten mit id und key={fruit.id}](assets/map-with-key.png)

---

## Übungen

**02f**

---

<!-- _class: lead -->

# Conditional Rendering

---

<!-- _class: image -->

![Inhalte bedingt rendern: IF mit && Operator vs IF-ELSE mit ternary ?:](assets/conditional-rendering.png)

---

## Übungen

**02g**
