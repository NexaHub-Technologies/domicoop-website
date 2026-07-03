# DOMICOP Marketing Website — Implementation Guide

A build-ready spec for the public marketing site that introduces the **DOMICOP
Cooperative Society** app to prospective members and societies. It carries the
exact design language, tokens, and signature motifs already established in the
admin portal, so the marketing site, the member app, and the admin portal read
as one product.

> Scope: a public, content-led site (home + a handful of secondary pages).
> Not the app itself. Legal pages (`/privacy`, `/terms`) should point at — or
> mirror — the app's existing `/privacy` route.

---

## 1. Purpose & audience

| | |
| --- | --- |
| **Primary audience** | Prospective **members** of a cooperative thrift & credit society, and **society administrators** evaluating DOMICOP to run their co-op. |
| **The site's one job** | Build trust and get the right person to the right next step: *download the app* (members) or *request access / talk to us* (societies). |
| **Tone** | Institutional but warm. Precise, plain-spoken, never hypey. We talk about stewardship, standing, and keeping an honest ledger — not "revolutionary fintech." |
| **Proof over adjectives** | Every claim is backed by something concrete (a number, a screenshot, a named safeguard). |

---

## 2. Brand foundation

**Identity.** DOMICOP is a cooperative thrift & credit society platform. Its
world is passbooks, ledgers, member numbers (`DOMICOP-0001`), monthly
contributions in naira, loans, and annual dividends — communal saving with a
paper trail.

**Thesis line (hero).** *"A cooperative is only as strong as its ledger."*
Reuse this as the site's north star; the hero should open on it.

**The four pillars** (the product's spine — structure feature content around
these, in this order):

1. **Members** — enrolment & standing
2. **Contributions** — monthly savings
3. **Loans** — credit & disbursement
4. **Dividends** — annual surplus

**Signature motif — the passbook ledger line.** A label connected to a value by
a **dotted leader**, the classic bookkeeping device. This is the one element the
site is remembered by. Use it for the pillar list, stat rows, and any
label→value pairing. Do not over-apply it — one or two moments per page.

```
Members ·······································  enrolment & standing
Contributions ·································  monthly savings
Loans ·········································  credit & disbursement
Dividends ·····································  annual surplus
```

**Spend boldness in one place.** The gold accent + the serif display + the
ledger motif are the personality. Everything else stays quiet and disciplined.

---

## 3. Recommended tech stack

Match the app so tokens and components port directly:

- **Framework**: TanStack Start (React 19) — same as the app — **or** Astro if
  you prefer a purely static content site. Either way the token layer below is
  identical (Tailwind v4, CSS-first).
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), CSS-first `@theme`.
- **UI primitives**: shadcn/ui + Radix (buttons, accordion for FAQ, dialog).
- **Icons**: Huge Icons (`@hugeicons/react` + `@hugeicons/core-free-icons`).
- **Fonts**: **Fraunces** (display, serif) + **Geist Variable** (body, sans).
- **Charts** (if any illustrative stat viz): Recharts.

Deployment: any static/SSR host. The site must be crawlable (SSR/SSG), so avoid
`ssr: false` on marketing routes.

---

## 4. Design tokens (copy-paste ready)

These are the **exact** tokens from the app (`src/styles.css`), plus a small
marketing-only extension that gives the two brand accents a usable range. Drop
this into the site's global stylesheet.

### 4.1 Fonts

Load Fraunces (Geist ships via `@fontsource-variable/geist`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap"
/>
```

### 4.2 Theme block

```css
@import "tailwindcss";
@import "@fontsource-variable/geist";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Type */
  --font-sans: "Geist Variable", sans-serif;
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;

  /* Brand accents (the two signature hues) */
  --color-coop-ink: #071431;   /* deep navy — brand surfaces */
  --color-coop-gold: #e6a93b;  /* gold — restrained accent */

  /* Marketing-only extended scales (derived from the two accents) */
  --color-cobalt-50:  #eef4ff;
  --color-cobalt-100: #d9e6ff;
  --color-cobalt-300: #7aa5f2;
  --color-cobalt-500: #2f6be0; /* primary action */
  --color-cobalt-600: #1e55be;
  --color-cobalt-700: #003d9a;
  --color-navy-800:   #0c245a;
  --color-navy-900:   #071431;
  --color-gold-400:   #efc06a;
  --color-gold-500:   #e6a93b;
  --color-gold-600:   #c98f27;

  /* Semantic (shadcn) — map to CSS vars below */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --color-destructive: var(--destructive);

  /* Radius scale */
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --primary: oklch(0.488 0.243 264.376);        /* cobalt/indigo */
  --primary-foreground: oklch(0.97 0.014 254.604);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --border: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --primary: oklch(0.424 0.199 265.638);
  --primary-foreground: oklch(0.97 0.014 254.604);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --border: oklch(1 0 0 / 10%);
  --ring: oklch(0.556 0 0);
  --destructive: oklch(0.704 0.191 22.216);
}

@layer base {
  body { @apply bg-background text-foreground font-sans; }
}
```

### 4.3 Color usage rules

| Role | Token | Where |
| --- | --- | --- |
| Page background | `background` / `foreground` | body; theme-aware (light + dark) |
| **Brand surface** | `#071431` (`coop-ink` / `navy-900`) | hero panels, footer, dark bands — **always dark**, in both themes |
| **Primary action** | `#2f6be0` (`cobalt-500`) → gradient to `#003d9a` | buttons, links, active states |
| **Accent** | `#e6a93b` (`gold-500`) | thin rules, ledger bullets, emblem ring, one highlight per section — **never** for body text or large fills |
| Muted text / dividers | `muted-foreground` / `border` | captions, hairlines |

Gold is a seasoning, not a sauce: hairline rules, list bullets, the underline
under an eyebrow. If gold covers more than ~5% of a section, pull it back.

### 4.4 Elevation & motion

```css
/* shadows */
--shadow-card: 0 1px 2px rgb(7 20 49 / 0.04), 0 8px 24px rgb(7 20 49 / 0.06);
--shadow-cta:  0 12px 32px rgb(47 107 224 / 0.25);

/* motion */
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--dur-fast: 150ms;
--dur-base: 250ms;
```

Motion is restrained: fade/translate-up reveals on scroll (≤ 16px, ≤ 400ms),
hover lifts of 1–2px, one orchestrated hero entrance. **Respect
`prefers-reduced-motion`** — disable transforms, keep opacity.

---

## 5. Typography system

| Role | Family | Weight | Tailwind |
| --- | --- | --- | --- |
| Display / H1–H2 | Fraunces (`font-display`) | 500 | `font-display font-medium tracking-tight` |
| Section eyebrow | Geist | 700, uppercase, tracked | `text-xs font-bold uppercase tracking-[0.2em]` |
| Body | Geist (`font-sans`) | 400 | `leading-relaxed text-muted-foreground` |
| Labels / data | Geist | 600 | `text-sm font-semibold` |

**Scale** (mobile → desktop): H1 `text-4xl → text-6xl`, H2 `text-2xl → text-4xl`,
H3 `text-xl`, body `text-base → text-lg`, caption `text-sm`. Keep line length
≤ ~70ch. Use tabular figures for any naira amounts.

Eyebrow color: `text-[#003d9a] dark:text-[#b2c5ff]`. Serif headings only for
display; never set body copy in Fraunces.

---

## 6. Core components

Concrete, token-driven snippets. Extend from these; keep classes consistent
with the app.

### 6.1 Ledger line (signature)

```tsx
function LedgerLine({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-baseline gap-3 text-sm">
      <span className="font-medium text-foreground">{label}</span>
      <span className="mb-1 flex-1 border-b border-dotted border-current/25" />
      <span className="text-muted-foreground">{value}</span>
    </li>
  )
}
```

On the dark brand panel use `text-white/90` / `border-white/25` / `text-white/45`
(as in the app's `AuthLayout`).

### 6.2 Emblem / logo

Reuse the theme-swapped logo from the app (`/light-logo.png`, `/dark-logo.png`)
or the gradient emblem:

```tsx
<div className="flex items-center justify-center rounded-2xl
  bg-gradient-to-br from-[#2f6be0] to-[#0c245a] ring-1 ring-[#e6a93b]/60">
  {/* BankIcon or the logo image */}
</div>
```

### 6.3 Primary button

```tsx
<a className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br
  from-[#2f6be0] to-[#003d9a] px-5 py-3 text-sm font-semibold text-white
  shadow-[var(--shadow-cta)] transition-all hover:brightness-110
  active:scale-[0.99]">
  Get the app <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
</a>
```

Secondary button: `border border-border bg-background hover:bg-muted`.

### 6.4 Feature / pillar card

```tsx
<div className="rounded-2xl border border-border bg-card p-6
  shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5">
  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl
    bg-[#2f6be0]/10 text-[#2f6be0] dark:bg-[#2f6be0]/20 dark:text-[#b2c5ff]">
    {/* pillar icon */}
  </div>
  <h3 className="font-display text-xl font-medium tracking-tight">Contributions</h3>
  <p className="mt-2 leading-relaxed text-muted-foreground">…</p>
</div>
```

### 6.5 Section shell

```tsx
<section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
  <p className="text-xs font-bold uppercase tracking-[0.2em]
    text-[#003d9a] dark:text-[#b2c5ff]">How it works</p>
  <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">…</h2>
  {/* content */}
</section>
```

Also needed: sticky **top nav**, dark **footer** (navy brand surface), **stat
row**, **FAQ accordion** (Radix), **CTA band**, **app-store badge** row.

---

## 7. Page map & sections

### Global chrome

- **Nav** (sticky, `backdrop-blur`): logo + wordmark · links (Features,
  Security, For Societies, Pricing?, FAQ) · primary CTA "Get the app".
  Collapses to a sheet menu on mobile.
- **Footer** (navy `#071431`, always dark): logo, one-line mission, column
  links (Product / Company / Legal), app-store badges, `© {year} DOMICOP
  Cooperative Society`. Legal column links to `/privacy` and `/terms`.

### Home (`/`) — section order

```
┌──────────────────────────────────────────────────────────────┐
│ HERO  (navy brand surface, gold rule, ambient glows)          │
│   eyebrow · H1 "A cooperative is only as strong as its ledger" │
│   subcopy · [Get the app] [For societies]                     │
│   right: app screenshot in a device frame OR the 4 ledger      │
│          pillars as dotted-leader lines                        │
├──────────────────────────────────────────────────────────────┤
│ TRUST STRIP  — "Built on" Paystack · Supabase · Expo (logos)   │
├──────────────────────────────────────────────────────────────┤
│ HOW IT WORKS  — 3 real steps (Join → Contribute → Grow)        │
│   numbered ONLY because it's a genuine sequence                │
├──────────────────────────────────────────────────────────────┤
│ THE FOUR PILLARS  — 4 feature blocks, alternating image/text   │
│   Members · Contributions · Loans · Dividends                  │
├──────────────────────────────────────────────────────────────┤
│ SECURITY & TRUST  — encryption, hashed passwords, role-based   │
│   admin access, "we don't sell your data" → link to /privacy   │
├──────────────────────────────────────────────────────────────┤
│ FOR SOCIETIES (admins)  — the portal: approvals, disbursement, │
│   dividends, announcements → CTA "Request access"              │
├──────────────────────────────────────────────────────────────┤
│ SOCIAL PROOF  — member/treasurer quote(s), a real stat or two  │
├──────────────────────────────────────────────────────────────┤
│ FAQ  — accordion (payments, security, eligibility, fees)       │
├──────────────────────────────────────────────────────────────┤
│ DOWNLOAD CTA BAND  (navy)  — app-store + play badges           │
└──────────────────────────────────────────────────────────────┘
```

**Hero copy direction.** Eyebrow: `DOMICOP · Cooperative Society`. H1 (serif):
the thesis line. Sub: *"The modern way to run a thrift & credit society —
members, contributions, loans and dividends, kept in balance and on the record."*
Primary CTA → app download; secondary → For Societies.

### Secondary pages

| Route | Purpose | Notes |
| --- | --- | --- |
| `/features` | Deep-dive on the four pillars | Reuse pillar blocks, add screenshots |
| `/security` | Trust & data handling | Mirror the safeguards; link to `/privacy` |
| `/for-societies` | Admin/portal pitch | Approvals, Paystack disbursement, dividends, broadcast |
| `/pricing` | If applicable | Simple tiers; otherwise fold into For Societies |
| `/about` | The cooperative story | Optional |
| `/contact` | Talk to us / request access | Simple form → email; never put PII in URLs |
| `/privacy`, `/terms` | Legal | Match the app's `/privacy`; keep one canonical copy |

Every page: eyebrow → serif H2 → content, on the `max-w-6xl` shell. Reading
pages (legal) use `max-w-3xl`.

---

## 8. Copy principles

- Name things the way a member does: *"your contributions,"* *"apply for a
  loan,"* *"your dividend"* — never internal terms.
- Buttons say what happens and keep the same verb through the flow ("Get the
  app" → app store; "Request access" → the form that requests access).
- Amounts in **naira (₦)**; be specific with examples, but never invent
  precise financial claims you can't stand behind.
- Empty/again states and forms: direct, in the brand's voice, no filler.

---

## 9. Assets

- **Logo**: `light-logo.png` (dark surfaces) and `dark-logo.png` — theme-swapped,
  as the app's `Logo` component does. Provide SVG for crispness where possible.
- **Favicon / touch icon**: the emblem on the cobalt→navy gradient.
- **App-store badges**: official Apple "Download on the App Store" + Google Play
  badges (use the official artwork; don't recreate).
- **Screenshots**: real app frames (members list, contributions, dashboard) in
  simple device mockups. Blur/anonymise any personal data.
- **OG image**: navy background, serif thesis line, gold rule, logo.

---

## 10. Quality floor (non-negotiable)

- Responsive from 320px up; the brand panel/hero collapses gracefully.
- Visible keyboard focus (`ring`), semantic landmarks, alt text on imagery.
- Colour contrast ≥ WCAG AA (cobalt-500 on white passes; gold is accent-only,
  never small text on light).
- `prefers-reduced-motion` respected.
- Light **and** dark themes both styled (navy brand surfaces stay dark by
  design; everything else follows the theme).
- SEO: per-page `<title>`/description, canonical, sitemap, OG/Twitter cards,
  fast LCP (optimise hero image, preconnect fonts).

---

## 11. Implementation checklist

1. Scaffold the site (TanStack Start or Astro) with Tailwind v4.
2. Paste the **§4 token block** into the global stylesheet; add the Fraunces
   `<link>`; wire a light/dark theme toggle (default to system).
3. Build **§6 core components** (ledger line, button, card, section shell, nav,
   footer, FAQ accordion, CTA band, badge row).
4. Assemble the **Home** sections in the §7 order with real copy (§8 voice).
5. Add secondary pages; point legal links at the canonical `/privacy`.
6. Drop in assets (§9); generate the OG image.
7. Pass the **§10 quality floor**; run Lighthouse (target ≥ 95
   Performance/Best-Practices/SEO).
8. Ship behind a real domain; submit that URL as the app-store marketing/support
   URL.

---

### Quick reference — the five things that make it "DOMICOP"

1. **Fraunces** serif for display, **Geist** for body.
2. **Ink navy `#071431`** brand surfaces (always dark).
3. **Cobalt `#2f6be0`→`#003d9a`** gradient for actions.
4. **Gold `#e6a93b`** as a hairline/bullet accent only.
5. The **passbook ledger dot-leader** and the four pillars — Members,
   Contributions, Loans, Dividends.
