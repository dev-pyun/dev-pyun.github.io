---
name: 편채범 Portfolio — 계측 패널
description: An analogue instrument front panel where every number is read against an engraved baseline.
colors:
  panel: "#17191c"
  panel-raised: "#1e2126"
  panel-recess: "#101214"
  engrave: "#e8e4dc"
  engrave-2: "#b4b8bd"
  engrave-3: "#7d838a"
  score: "#2b2f35"
  score-2: "#3a4048"
  score-3: "#545c66"
  signal: "#c0362a"
  signal-pressed: "color-mix(in srgb, var(--signal) 84%, #000)"
  signal-ink: "#f2857a"
  signal-wash: "#2a1b1a"
typography:
  display:
    fontFamily: "Archivo, Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "3.25rem"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.03em"
    fontVariation: "wdth 82"
    fontFeature: "tabular-nums lining-nums"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "normal"
  body:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "0.14em"
    fontVariation: "wdth 88"
rounded:
  none: "0px"
  dot: "9999px"
spacing:
  hair: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "40px"
  section: "56px"
components:
  switch-live:
    backgroundColor: "{colors.signal}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  switch-live-hover:
    backgroundColor: "{colors.signal-pressed}"
    textColor: "#ffffff"
  switch-idle:
    backgroundColor: "transparent"
    textColor: "{colors.engrave-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  switch-idle-hover:
    textColor: "{colors.engrave}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.engrave-3}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
  chip-accent:
    backgroundColor: "transparent"
    textColor: "{colors.signal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
  chip-prose:
    backgroundColor: "transparent"
    textColor: "{colors.engrave-3}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
    size: "0.8125rem"
  card-project:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.engrave-2}"
    rounded: "{rounded.none}"
    padding: "24px"
  card-project-hover:
    backgroundColor: "{colors.panel-raised}"
  status-open:
    backgroundColor: "transparent"
    textColor: "{colors.engrave-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
  status-closed:
    backgroundColor: "transparent"
    textColor: "{colors.signal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
  status-held:
    backgroundColor: "transparent"
    textColor: "{colors.engrave-3}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
  table-header-cell:
    backgroundColor: "transparent"
    textColor: "{colors.engrave-2}"
    typography: "{typography.label}"
    padding: "10px"
  table-row-best:
    backgroundColor: "{colors.signal-wash}"
    textColor: "{colors.signal-ink}"
    padding: "10px"
---

# Design System: 편채범 Portfolio — 계측 패널

## Overview

**Creative North Star: "The Instrument Panel"**

This is an enamelled analogue instrument face read under a workshop lamp, with every designation silkscreened onto the metal. The ground is near-black warm steel, the lettering is condensed and cut, and the only other material is a hairline rule — the etched score in the enamel. Nothing floats, nothing glows, nothing is rounded. Density is high and deliberate: readings sit close to the scale that qualifies them, because separating them would break the instrument.

The governing conviction is that a number without its condition is unreadable. Every figure on this panel appears on a tick scale that carries the baseline it is measured against, engraved into the scale itself, plus the direction of "better" spelled out in words. This is not styling; it is enforced in the `Gauge` type signature, where `datum`, `datumLabel`, `datumAt` and `better` are all non-optional. A reading cannot be constructed without its reference.

Hierarchy is made from weight, case, reversal and rule — never from size. One body size serves the entire site. State is drawn as line pattern before hue, so the panel survives monochrome print and colour-vision deficiency. Colour is a single replaceable slot, not an identity. Confirmed rejections: the category-standard large-sans-name-over-three-metric-cards layout, and its predictable opposite, the quiet cream-paper serif personal site. A previous light-and-orange world was discarded outright and is not a fallback.

**Key Characteristics:**
- Dark only — one enamelled panel ground (#17191c), no light variant, no theme toggle
- One body size (0.9375rem) for the whole site; hierarchy from weight, case, reversal and rule
- Zero corner radius on every surface; the one round form is a 8px switch indicator dot
- No shadows anywhere; depth is tonal layering plus hairline scores in three depths
- A single accent token (`--signal`) drives limit marks, switches, engravings, focus ring and selection
- State is line pattern first, hue second
- Resting state is always the finished reading; motion only replays it

## Colors

An enamelled panel under warm overhead light: three near-black greys for the body, three paint-in-the-groove greys for engraving, three depths of etched hairline, and exactly one accent.

### Primary
- **Limit Mark Red** (`colors.signal`): The single replaceable accent, and the only saturated colour on the panel. It draws every limit mark and datum line on a tick scale, the engaged range switch, the section-division tick, the best row's cut edge in a data table, the focus-visible outline, and the text selection. Carries white text at 4.5:1+. This token is a product slot, not a brand colour: it is swapped per company applied to, and swapping it re-liveries the whole panel in one edit.
- **Pressed Red** (`colors.signal-pressed`): Derived from the accent by `color-mix`, never hand-set, so the one-token swap holds. Used only for the engaged switch's hover state.
- **Signal Ink** (`colors.signal-ink`): The accent's readable-on-panel form (4.5:1+ against the ground), used wherever the accent has to be *text* rather than a mark: the "기준" prefix, a scale label that beats its datum, accent chips, link text, and hover on titles and nav. The raw accent is never used as body-size text on the panel ground.
- **Signal Wash** (`colors.signal-wash`): The barely-there accent tint behind a data table's best row, which is always accompanied by a cut edge so the row never depends on tint alone.

### Neutral
- **Panel** (`colors.panel`): The enamelled body. Page ground and card face. `body` carries a single radial lamp fall-off from `#1d2126` at top centre, which is the only gradient in the system.
- **Raised Panel** (`colors.panel-raised`): One step lighter, used only as a project card's hover face.
- **Recessed Panel** (`colors.panel-recess`): One step darker, for the surfaces set *into* the panel: header bar, footer bar, figure mounts, scope-notice blocks, scrollbar track.
- **Engraved Paint** (`colors.engrave`): Filled paint in the etched line. Headings, readout digits, the lead sentence, a project's headline result.
- **Engraved, Second Pass** (`colors.engrave-2`): Body prose and table cells — the site's most-used text colour.
- **Engraved, Shallow Pass** (`colors.engrave-3`): Metadata, captions, notes, scale labels, and the thickest structural rule (`border-t-2`) above a gauge or nameplate.
- **Score / Score 2 / Score 3** (`colors.score`, `colors.score-2`, `colors.score-3`): Three depths of cut in the enamel. `score` is the default hairline and the 1px gap-grid mortar between cards; `score-2` is the mid-depth frame (chips, image borders, scrollbar thumb); `score-3` is the deep cut that divides instruments, plus the idle switch border, minor tick marks and link underlines.

### Named Rules
**The One Token Rule.** Exactly one accent exists and it lives at `--signal` in `app/globals.css`. Every accent-adjacent value derives from it or is a companion token in the same block; no component may print a colour. Audit test: swap `--signal` to a different hue and reload — if any mark, switch, engraving, focus ring or selection stays red, the rule is broken.

**The Pattern-Before-Hue Rule.** No state is ever communicated by colour alone. Open / closed / held are drawn as an authored SVG link rail — solid, cross-ticked, dotted — and the border style shifts with it (solid / dashed / dotted). A table's best row gets a cut left edge, not just a wash. Audit test: view any screen in greyscale; every state must still be readable.

**The Text-Accent Split Rule.** `signal` is for marks and filled switches; `signal-ink` is for accent text on the panel ground. Never use `signal` as body-size text and never use `signal-ink` as a fill.

## Typography

**Display Font:** Archivo (variable width axis, self-hosted at build via `next/font/google`), falling back to Pretendard Variable, then system-ui
**Body Font:** Pretendard Variable (loaded from CDN for Korean body quality), falling back to Apple SD Gothic Neo, Noto Sans KR, Segoe UI
**Label Font:** Archivo at 88% width — the same face as display, differently stretched

**Character:** Condensed industrial lettering against a humanist Korean text face. Archivo compressed to 82% and cut tight (-0.03em) reads as stamped-in digits; Pretendard at 1.7 line-height carries dense Korean technical prose comfortably. The pairing sounds like a machine labelled by hand.

### Hierarchy
- **Display** (Archivo 700, `wdth` 82%, tabular lining numerals, 0.86 line-height): The readout. Gauge values at 3.25rem (3.75rem from `sm`), page titles on About / Contact / not-found at 1.5rem, project detail titles at 1.75rem (2.125rem from `sm`), and small ordinals (01, 02) down to 0.75rem. Always a value or a display moment — never running prose.
- **Headline** (Pretendard 700, 1.6rem → 1.9rem, 1.45 line-height, -0.01em): The home value proposition only, capped at 52ch.
- **Title** (Pretendard 700, 1.0625rem, snug): Project card titles. Any other subhead drops to body size and earns rank from weight.
- **Body** (Pretendard 400, 0.9375rem, 1.7 line-height; prose blocks measured at 46–62ch): Everything else. Emphasis is `font-semibold` at the same size; long-form passages relax to 1.75 line-height. Korean line breaking is controlled by `word-break: keep-all` set on `html`, which is an accessibility requirement here, not a preference.
- **Label** (Archivo 600, 0.75rem, `wdth` 88%, 0.14em tracking, uppercase): The engraved designation plate. Section titles, field labels, metadata, nav items, switch text, status text, chips, table headers. Tracking widens to 0.16em for section titles, 0.2em for the maker's plate in the header, and tightens to 0.1em on scale labels.

### Named Rules
**The One Size Rule.** Body text is 0.9375rem everywhere, full stop. Hierarchy comes from weight, case, reversal and rule. Only two voices may leave that size: the engraved label plate (0.75rem) and the readout (a value or a display moment). Inventing an intermediate heading size is how this panel becomes a document.

**The Short-Label-Only Rule.** The uppercase engraved plate voice is for designations of a few words. A phrase or sentence never wears it — uppercase plus 0.14em tracking destroys Korean and long-form legibility. `Chip` carries a `prose` variant for exactly this reason: it keeps the stamped frame and drops the engraving. Audit test: if a plate-voiced string wraps to a second line, it is the wrong voice.

**The Literal-String Exception.** A string the reader is meant to copy or type — an email address, a URL — drops to `normal-case` even in plate voice, because uppercase misrepresents the value itself rather than merely styling it. The plate's family, weight, tracking and size are kept, so the row still reads as engraving. This is scoped to the footer address links; the header's GitHub link has not yet been brought in line.

**The Floor Rule.** 0.75rem (12px) is the smallest type in the system, sitting above the 11px functional floor. Nothing is set smaller, including captions and ordinals.

## Layout

A single centred column at `max-w-[68rem]`, shared by header, main and footer, with 20px gutters that open to 32px from `sm`. Main content is padded 48px vertically, 64px from `sm`. Only one breakpoint family is in use: `sm` (640px) for gutters, tick decimation and stacking, and `md` (768px) for column splits. There is no `lg` or `xl` behaviour — the panel simply reaches its maximum width and stops.

Grids are two- and three-column at `md` and collapse to one below. Card grids are built as **mortar grids**: `gap-px` over a `bg-score` container with a `border border-score`, so the 1px gaps read as etched seams between adjacent instruments rather than as whitespace. Two-column prose splits use a left border on the second column (`md:border-l md:border-score md:pl-8`) instead of a gap.

Vertical rhythm is carried by rules, not margins. `Score` / `Rule` set 40px above and below (`my-10`); sections open with a 56px top margin (`mt-14`) and a `border-t` plus 16px of padding. Inside a block the rhythm is 4 / 8 / 12 / 20px. Measure is always constrained: 46ch for intros, 52ch for the value proposition, 58–62ch for body prose, 24–30ch for display titles.

Data tables reserve a horizontal overflow region at `min-w-[30rem]` with a `mask-image` fade over the trailing 24px, marked `role="region"` with `tabIndex={0}` and a Korean label, so a narrow viewport shows that the rack continues and a keyboard can scroll it.

### Named Rules
**The Mortar Rule.** Adjacent cards are separated by a 1px score, never by a gap or a shadow. Use `gap-px` on a `bg-score` grid; the seam is the design.

**The Rule-Not-Margin Rule.** A new division is announced by a cut line with a designation above it. Do not create a division with empty space alone.

## Elevation & Depth

There are no shadows in this system — not one `box-shadow`, and no blur, glow or backdrop filter. Depth is entirely tonal and linear: three panel tones say whether a surface is the body (`panel`), lifted off it (`panel-raised`, hover only), or set into it (`panel-recess`, for header, footer, figure mounts and notice blocks), and three score tones say how deeply a line is cut. The only light in the system is a single radial lamp fall-off on `body`, brightening the top centre of the page.

Weight of rule encodes rank: a hairline `border-t border-score` separates peers, `border-score-3` divides instruments, and `border-t-2` (in `engrave-3`, or `signal` on the not-found page) tops a gauge or a nameplate. A 2px accent bar (`w-0.5 bg-signal`) is the panel's emphasis mark, used beside a headline result, a scope notice and a section title.

### Named Rules
**The No-Shadow Rule.** Surfaces are cut and painted, not lifted. Depth is tonal layering plus rule weight. A drop shadow, an offset shadow or a glow has no referent on an enamelled panel and does not belong on any future surface.

## Shapes

Zero radius everywhere. Every card, chip, status tag, switch, table cell, figure mount and notice block is a hard rectangle, because the whole vocabulary is stamped metal and silkscreen. The single exception is the 8px round indicator dot inside a range switch, which is a physical lamp and reads as one.

The recurring forms are four: the **tick scale** (41 marks with major/mid/minor heights, every other minor mark dropped below `sm` so the scale never aliases into a grey band), the **hairline score** in three depths, the **engraved plate** (an uppercase condensed designation, sometimes framed by a 1px border), and the **limit mark** (a 2px accent line, vertical beside content or standing in the scale). Borders do the work that fills and radii would do elsewhere: a chip is a frame with a transparent centre, not a pill.

## Components

Character line for the whole set: cut, framed, flat, and labelled — controls look like they were machined and then silkscreened.

### Buttons
Buttons appear as **range switches** (`Switch`), the panel's control vocabulary for primary actions.
- **Shape:** Hard rectangle (0 radius), 1px border, 10px/16px padding, engraved label voice, with an 8px round indicator dot at the leading edge.
- **Live (engaged):** Accent fill and accent border with white text; the dot is white with a 70%-white ring. Hover deepens to `signal-pressed`.
- **Idle:** Transparent with a `score-3` border and `engrave-2` text; the dot is an empty `score-3` ring. Hover lifts border to `engrave-3` and text to `engrave`.
- **Transitions:** Colour only, 200ms. Nothing moves, scales or lifts on hover anywhere in this system.
- **Focus:** Inherited global 2px accent outline at 3px offset. There is no per-component focus style.
- There is exactly one live switch per screen. A second accent fill would spend the accent's scarcity.

### Chips
- **Style:** 1px frame, transparent centre, 5px/8px padding, 0 radius. Default is `score-2` border with `engrave-3` text; `accent` is an accent border with `signal-ink` text.
- **`prose` variant:** Same frame, body voice at 0.8125rem instead of the uppercase engraving. Required for roles, descriptive tags and any multi-word phrase.
- Chips are read-only specification tags. They are not filters and never carry a selected state.

### Cards / Containers
- **Corner Style:** Square (0 radius).
- **Background:** `panel`, hovering to `panel-raised`; recessed containers use `panel-recess`.
- **Shadow Strategy:** None — see Elevation & Depth.
- **Border:** Supplied by the mortar grid (`gap-px` on `bg-score`), not by per-card borders. Internal divisions use `border-t border-score`.
- **Internal Padding:** 24px for project cards, 20px for grid cells, 12–16px for figure mounts and notices.
- **Project card anatomy:** status tag and period across the top, a bold 1.0625rem title that shifts to `signal-ink` on group hover, then a definition list under a hairline where the headline result is preceded by a 2px accent limit mark.

### Navigation
- **Style:** A recessed bar (`panel-recess`) under a `score-3` bottom rule, with the maker's plate at left — the name at 0.8125rem/0.2em tracking beside the role in `engrave-3` — and engraved-label links at right.
- **States:** Links rest at `engrave-2` and hover to `signal-ink` with a 200ms colour transition. There is no active/current-page indicator in the shipped build.
- **Mobile:** The nav wraps in place; there is no drawer or hamburger. The GitHub link is hidden below `sm`.
- **Footer:** The mirror of the header — recessed bar, `score-3` top rule, engraved links, and a rating-plate block with copyright and affiliation.
- **Skip link:** `본문으로 건너뛰기`, visually hidden until focused, then an accent-filled plate at top-left.

### Inputs / Fields
No inputs, no forms, no text fields exist in this build (contact is a terminal list of links). Do not synthesize an input style from the button vocabulary without deciding it deliberately.

### Gauge (signature component)
The instrument that carries the thesis. A gauge is a `border-t-2 border-engrave-3` head, an engraved designation, a large readout value with its unit in plate voice, a tick scale, a note, and the datum spelled out in full words under an accent `기준` prefix.

Its tick scale is 41 marks — full height `score-3` every tenth, mid `score-2` every fifth, short `score` otherwise, with odd minor marks hidden below `sm`. The reading is a filled band (`bg-engrave/12`) closed by a bright `engrave` right edge. The datum is a 2px accent line standing taller than the scale, positioned on the range and **always drawn**. Below, the scale engraves its own direction in words (`← 낮을수록 좋음` / `높을수록 좋음 →`) and the datum label, which turns `signal-ink` when the reading beats it. The whole scale is `aria-hidden`; the datum and direction are restated in prose for assistive tech.

**The Required Datum Rule.** `datum`, `datumLabel`, `datumAt` and `better` are non-optional props. The type signature *is* the thesis: a reading cannot be constructed without the baseline it is measured against, and no scale may assume which end is good. Future work must not relax these to optional, and must not add a gauge-like component that accepts a bare number.

### Status (signature component)
A link-rail tag whose pattern carries the state and whose colour merely agrees with it. `open` is an unbroken rail with a solid `engrave-3` border; `closed` is a cross-ticked rail with a dashed accent border and `signal-ink` text; `held` is a dotted rail with a dotted `engrave-3` border. The rail is authored SVG at 16×8 with 1.25 stroke in `currentColor`, marked `aria-hidden`, with the state named in text beside it. Home carries a legend explaining all three.

### DataTable
Tabular lining numerals throughout, plate-voiced headers between `score-3` rules, numeric columns right-aligned from a declared index. The best row takes `signal-wash`, `signal-ink` semibold text, an accent-tinted bottom border, and — the part that matters — a 2px accent cut on its leading cell, so the row is marked by a line and not only by tint.

## Do's and Don'ts

### Do:
- **Do** put every new number on a scale that carries its baseline, its unit and its direction. If you cannot name what it is measured against, it does not render.
- **Do** change accent colour by editing `--signal` in `app/globals.css` and nothing else.
- **Do** build hierarchy from weight (400 / 600 / 700), case, reversal and rule weight at the one body size (0.9375rem).
- **Do** use the `prose` chip variant for any phrase; reserve the uppercase engraved plate for designations of a few words.
- **Do** encode every state as a line pattern first — solid, cross-ticked, dotted, cut edge — and let colour only agree with it.
- **Do** separate adjacent cards with a 1px score using `gap-px` on a `bg-score` grid.
- **Do** ship the finished reading as the resting state. Animation replays a reading that is already complete and correct.
- **Do** keep prose measured at 46–62ch and leave `word-break: keep-all` in force for Korean.

### Don't:
- **Don't** print a colour value in a component. Every colour comes from a token in `app/globals.css`; the two literal `#000` values in `DataTable` are mask stencil stops, not palette, and are the only acceptable kind of exception.
- **Don't** add an intermediate heading size. Reaching for 1.25rem to make something feel important is the failure mode this system exists to prevent.
- **Don't** add a drop shadow, offset shadow, glow, blur or backdrop filter. The panel has no such material.
- **Don't** round a corner. The only round form is the switch's 8px indicator lamp.
- **Don't** rely on hue alone for meaning anywhere, including charts, tables and tags.
- **Don't** make `Gauge`'s datum props optional, and don't introduce a metric component that renders a number without a reference.
- **Don't** hide content behind animation, scroll position or JS availability. Nothing on this panel starts empty.
- **Don't** add a light theme or a theme toggle. The world is one enamelled panel under workshop light; a light variant is not planned and the toggle is deliberately absent.
- **Don't** add section numerals to project detail pages. They were removed deliberately: a sequence that counts only what one project happens to have identifies no stable stage across the rack. (Ordinals on About's capabilities and steps, and on Contact's terminals, are fixed enumerations of a complete set and are fine.)
- **Don't** move, scale or lift anything on hover. Hover is a 200ms colour change.
- **Don't** edit `content/projects.ts` for design reasons. Copy and figures have a single source, and visual work never touches it.
