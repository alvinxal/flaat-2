# Design System

This document outlines the visual and interactive design principles for the FLAAT website to ensure consistency across all pages and components.

## Design Principles

1. **Clarity First** - Content takes precedence; UI elements support rather than compete
2. **Generous Spacing** - Large gaps between sections create breathing room and visual hierarchy
3. **Consistent Typography** - Font roles are clearly defined and used consistently
4. **Subtle Interactions** - Animations are brief (250ms) and easing-based
5. **Responsive-First** - Desktop layout includes sidebar; mobile/tablet stack content

---

## Color System

### Core Colors

| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#2eab60` | CTAs, highlights, focal points |
| `gray-800` | `#333333` | Primary body text |
| `gray-500` | `#605f5f` | Secondary/muted text |
| `gray-300` | `#e6e6e6` | Borders, dividers |
| `gray-100` | `#f4f4f4` | Panel backgrounds |
| `white` | `#ffffff` | Page background |

### CSS Variables

```css
--color-bg: #ffffff;
--color-panel: #f4f4f4;
--color-panel-strong: #e6e6e6;
--color-text: #333333;
--color-muted: #605f5f;
--color-soft: #aeaeae;
--color-border: #e6e6e6;
```

### Usage Guidelines

- **Headings & body text**: `gray-800` (#333333)
- **Muted/descriptive text**: `gray-500` (#605f5f) or use `text-muted` class
- **Labels & metadata**: `gray-800` with mono font
- **Borders**: `gray-300` or `border` token
- **Panel backgrounds**: `bg-panel` (#f4f4f4)
- **Primary actions**: `accent` (#2eab60)

---

## Typography

### Font Stack

| Role | Font | Variable | Usage |
|------|------|----------|-------|
| Primary | Bricolage Grotesque | `--font-sans` | Headings, UI elements, navigation |
| Display | Clash Display | `--font-display` | Hero titles, major headlines |
| Body | Inter | `--font-body` | Long-form text, descriptions |
| Mono | Fragment Mono | `--font-mono` | Labels, metadata, timestamps |

### Font Sizes

| Breakpoint | Body | H1 (Hero) | H2 (Section) | H3 (Card) |
|------------|------|----------|-------------|------------|
| Mobile | `text-lg` | `text-2xl` | `text-xl` | `text-lg` |
| Tablet | `text-lg` | `text-3xl` | `text-xl` | `text-lg` |
| Desktop | `text-lg` | `text-4xl` | `text-xl` | `text-lg` |

### Classname Conventions

```tsx
// Headings
<h1 className="text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium font-sans">
<h2 className="text-xl leading-tight font-semibold font-sans">
<h3 className="text-lg leading-normal font-medium font-sans">

// Body text
<p className="text-lg leading-[1.3] tracking-[-0.02em] font-body">

// Labels/metadata
<p className="font-mono text-xs tracking-widest uppercase">
```

---

## Spacing & Layout

### Breakpoints

| Name | Width | Min-width | Class suffix |
|------|-------|----------|------------|
| Mobile | < 810px | - | (default) |
| Tablet | 810px - 1023px | 810px | `tab:` |
| Desktop | ≥ 1024px | 1024px | `desk:` |

### Page Layout

```tsx
// Max content width
max-w-[1300px]

// Page padding
px-5 pb-8 tab:p-8 desk:pl-[260px] desk:px-10

// Section gaps
gap-[7.5rem]  // Between major sections
gap-8         // Within sections
gap-4         // Tight groupings
```

### Grid System

```tsx
// Project cards
grid grid-cols-1 gap-x-3 gap-y-10 tab:grid-cols-2

// Media aspect ratio
aspect-[1.53056]  // ~3:2 landscape
```

---

## Component Patterns

### Section Structure

```tsx
<section className="flex flex-col gap-4">
  <div className="flex items-center justify-between gap-4">
    <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
      {content.label}
    </p>
    <h2 className="m-0 text-xl leading-tight font-semibold font-sans">
      {content.title}
    </h2>
  </div>
  {/* Section content */}
</section>
```

### Card/Project Item

```tsx
<Link
  href={`/project/${slug}`}
  className="group flex flex-col gap-3 no-underline"
>
  <div className="relative aspect-[1.53056] overflow-hidden bg-panel">
    <Image fill className="object-cover transition-transform duration-250 ease-in-out group-hover:scale-[1.02]" />
  </div>
  <div className="flex flex-col gap-1">
    <h3 className="m-0 text-lg leading-normal font-medium font-sans">{title}</h3>
    <p className="m-0 text-muted text-lg leading-[1.3] tracking-[-0.02em] font-body">{desc}</p>
  </div>
</Link>
```

### Primary CTA Button

```tsx
<Link
  href="/#contact"
  className="inline-flex items-center gap-3 w-fit pb-[0.8rem] border-b border-black no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans"
>
  <span>{ctaText}</span>
</Link>
```

---

## Interactions & Animation

### Transition Defaults

```css
transition-transform duration-250 ease-in-out
```

### Hover Effects

| Element | Hover Behavior |
|---------|----------------|
| Images | `scale-[1.02]` |
| Cards/Links | Opacity or scale change |
| CTAs | Border color or underline |

### Avoid

- Complex animations
- Multiple simultaneous transitions
- Staggered delays > 100ms

---

## Common Patterns

### Responsive Visibility

```tsx
// Show only on desktop
<div className="hidden desk:flex">...</div>

// Show on mobile/tablet only
<div className="desk:hidden">...</div>
```

### Text Wrapping

```tsx
// Prevent orphan words
className="text-wrap-balance"
```

---

## Dos and Don'ts

### Do

- Use semantic HTML elements (`section`, `h1`-`h6`, `p`)
- Use CSS variables and Tailwind classes from this system
- Maintain consistent section gaps (7.5rem on desktop)
- Use mono font for labels and metadata
- Keep transitions brief (250ms)

### Don't

- Use arbitrary colors outside the defined palette
- Mix font families for the same role
- Add complex animations without justification
- Override breakpoint values (tab: 810px, desk: 1024px)
- Use inconsistent spacing values

---

## Resources

- [Tailwind CSS](https://tailwindcss.com)
- [Fontshare - Clash Display](https://www.fontshare.com/fonts/clash-display)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)