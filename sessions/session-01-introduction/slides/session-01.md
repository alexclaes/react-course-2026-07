---
marp: true
theme: course
paginate: true
lang: de
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Einführung in React

Session 01

---

<!-- _class: lead -->

# Was ist eine UI-Komponente?

---

## Was ist eine UI-Komponente?

- Bausteine des User Interfaces
  - Kapselt Funktionen, Styles und Elemente
- Modular
  - Unabhängig von anderen Komponenten
- In sich geschlossen
  - Bringt sämtlichen Code selbst mit, um lauffähig zu sein
- Wiederverwendbar
  - Kann mehrfach an verschiedenen Stellen genutzt werden
- Interface
  - Erhält Daten oder Funktionserweiterungen über ein klares Interface

---

## Übungen

- **01a** und **01b**

---

<!-- _class: lead -->

# Was ist React?

---

## Was ist React?

- Erstellen von User Interfaces basierend auf vielen, individuellen Bausteinen → Komponenten
  - z. B. Thumbnail, UserCard, Video, LikeButton
- Kombination von Komponenten zu Ansichten, Seiten, Apps
- Spezielle Auszeichnungssprache: JSX
  - HTML innerhalb von JavaScript-Dateien
  - HTML mit Superkräften: Funktionalität und Rendering von Daten vereint
- Interaktivität und UI-Updates
  - Komponenten erhalten Daten und beschreiben, was angezeigt werden soll

---

<!-- _class: lead -->

# Unterschiede zwischen HTML und JSX

---

<!-- _class: columns -->

## className-Attribut

<div class="columns-wrap">
<div>

**HTML**

```html
<div class="wrapper"></div>
```

</div>
<div>

**JSX**

```jsx
<div className="wrapper">
```

</div>
</div>

---

<!-- _class: columns -->

## Explizit selbstschließende Tags

<div class="columns-wrap">
<div>

**HTML**

```html
<img src="..." alt="..." />
```

</div>
<div>

**JSX**

```jsx
<img src="..." alt="..." />
```

</div>
</div>

---

<!-- _class: columns -->

## Immer ein Root-Element: React Fragment

<div class="columns-wrap">
<div>

**HTML**

```html
<p>One</p>
<p>Two</p>
<p>Three</p>
```

</div>
<div>

**JSX**

```jsx
<>
  <p>One</p>
  <p>Two</p>
  <p>Three</p>
</>
```

</div>
</div>

---

<!-- _class: columns -->

## Komponenten-Konventionen

<div class="columns-wrap">
<div>

**Lowercase**

- `div`
- `ul`
- `header`
- `nav`
- …

Komponenten, die von React bereitgestellt werden.

Erzeugen klassische HTML-Elemente.

</div>
<div>

**Uppercase**

- `App`
- `IconButton`
- `VideoPlayer`
- `MenuBar`
- …

Komponenten, die wir selbst erstellen.

Erzeugt die Struktur unserer App.

</div>
</div>

---

<!-- _class: lead -->

## Übungen

**01c** bis **01f**
