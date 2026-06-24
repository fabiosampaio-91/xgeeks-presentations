---
name: new-presentation
description: Scaffold a new self-contained slide-deck presentation in its own folder, reusing the synvert xgeeks deck design system, and publish it via GitHub Pages. Use when the user asks to "create a new presentation/deck/slides", "start a new slide deck", names a specific presentation to spin up (e.g. "create a team-offsite deck", "I need slides for the Q3 review"), or implies they need a new deck even without using the exact word "presentation". Always invoke this skill proactively when the user names a topic or event and the context is this presentations repo — don't wait for them to say "skill".
---

# new-presentation

Scaffold a new deck in this multi-presentation repo. Each presentation is a self-contained subfolder at the repo root with a single `index.html` that carries the full xgeeks design system inline — no build step, no external CSS/JS (only Google Fonts).

## What you need before starting

Three things:

- **Slug** — lowercase, hyphen-separated folder name (e.g. `team-offsite-2026`, `q3-review`). Derive from the title; never use spaces or uppercase.
- **Title** — human-readable deck name (e.g. "Team Offsite 2026").
- **Description** — one sentence for the `<meta>` tag and gallery card.

If the user hasn't given you a title, ask. Derive the slug automatically. Leave description as a placeholder if not supplied — the user can fill it in.

## Steps

### 1. Create the folder and copy the template

```bash
mkdir -p <slug>
cp _template/index.html <slug>/index.html
```

The template already has the complete xgeeks design system (all CSS tokens, every component class, the reveal animation, keyboard navigation). You are customising content only — never touch the `<style>` or `<script>` blocks.

### 2. Customise the new deck

Read `<slug>/index.html` then make these targeted edits:

| What | Where in the file | Target value |
|---|---|---|
| `<title>` | `<head>` | `{Title} · synvert xgeeks` |
| `<meta name="description">` | `<head>` | One-sentence description |
| Chrome left label (every slide) | `class="chrome__left"` | `SECTION LABEL <span class="dot"></span> SUBLABEL` with real labels |
| Cover kicker | slide `s1` `.kicker` | Audience · date · version line |
| Cover `h1.display` | slide `s1` | Headline with `<em>serif</em>` and `<span class="accent">accent</span>` |
| Cover `.subhead` | slide `s1` | Supporting sentence |
| Cover `.cover-meta` | slide `s1` | `<span>4 slides</span><span>Date</span>` |
| Closing `h2.display` | last slide | Closing headline |
| Closing `.pull-quote` | last slide | Memorable final line |
| Closing `.cover-meta` | last slide | `<span>synvert xgeeks</span><span>Date · Occasion</span>` |

**Remove** the `<!-- EDIT: ... -->` comments as you update each section — they're scaffolding, not permanent. Keep the structural `<!-- NNN Slide title -->` comments; they help navigate the file.

**Never change:** the inline `<style>` block, the `<script>` block, or the `.deck-progress` nav element count (it matches the 4 starter slides; the user will update it when they add or remove slides).

### 3. Add the gallery entry

Open root `index.html`. Find the `<!-- COPY THIS BLOCK -->` comment and insert a new `.deck-card` immediately before it:

```html
<a class="deck-card" href="<slug>/">
  <div class="deck-slug"><slug></div>
  <div class="deck-title"><Title></div>
  <div class="deck-desc"><One-sentence description.></div>
  <div class="deck-meta"><span>4 slides</span><span><Date or occasion></span></div>
  <div class="deck-arrow">View deck →</div>
</a>
```

Update the slide count and date to match reality once the deck has real content.

### 4. Report back

Tell the user:

- The deck is at `<slug>/index.html`
- Preview locally: `open <slug>/index.html` or `python3 -m http.server` from the repo root then visit `http://localhost:8000/<slug>/`
- What still needs filling in (slide body content, real slide count, gallery description if left as placeholder)
- Commit & push when ready — GitHub Pages auto-deploys to `<pages-url>/<slug>/`

## Design system quick reference

All component classes are already in the template. Pick from these; don't invent new ones:

`.card` (`.is-accent` / `.is-warm`) · `.kpi` · `.grid-2` / `.grid-3` / `.grid-4` · `.lanes` / `.lane.a` / `.lane.b` · `.rule-strip` · `.dt` (data table) · `.smx` (state matrix) · `.schema` · `.bench` / `.person` · `.doors` / `.door` · `.tiers` / `.tier` · `.board` / `.acct` · `.crm` · `.gantt` · `.msg` / `.pull-quote` · `.heat` / `.tag-pill`

**Two-track colour code** — warm coral (`--warm`) = Track A, accent green (`--accent`) = Track B. Keep this consistent throughout the deck.

Full vocabulary and token list are in `CLAUDE.md`.
