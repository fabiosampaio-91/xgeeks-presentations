---
name: new-presentation
description: Scaffold a new self-contained slide-deck presentation in its own folder, reusing the synvert xgeeks deck design system, and publish it via GitHub Pages. Use when the user asks to "create a new presentation/deck/slides", "start a new slide deck", names a specific presentation to spin up (e.g. "create a team-offsite deck", "I need slides for the Q3 review"), or implies they need a new deck even without using the exact word "presentation". Always invoke this skill proactively when the user names a topic or event and the context is this presentations repo — don't wait for them to say "skill".
---

# new-presentation

Scaffold a new deck in this multi-presentation repo. Each presentation is a self-contained subfolder at the repo root with a single `index.html` that carries the full xgeeks design system inline — no build step, no external CSS/JS (only Google Fonts).

## What you need before starting

Four things — ask for any that are missing before touching any files:

- **Title** — human-readable deck name (e.g. "Team Offsite 2026"). Ask if not supplied.
- **Audience** — which profile applies (see section below). Ask if not clear from context.
- **Slug** — derive from the title automatically (lowercase, hyphens, no spaces, e.g. `team-offsite-2026`). Never ask.
- **Description** — one sentence for the `<meta>` tag and gallery card. Derive from title + audience if not supplied; user can refine later.

## Audience profiles

The audience controls **tone, structure, component choices, and how much context to front-load**. Pick the closest match; a deck can blend two profiles if the user is explicit about it.

---

### Business
*C-level, decision-makers, investors, commercial partners.*

- **Tone:** Confident, direct, data-led. Every slide answers "so what?" Lead with the recommendation, back with evidence, never bury the lede.
- **Structure:** Opportunity → recommendation → evidence → next actions. Front-load the most important slide (often slide 2). Close with a concrete ask.
- **Components to lean on:** `.kpi` (big numbers), `.card.is-accent` (key callout), `.smx` (decision matrix), `.rule-strip` (numbered principles), `.tag-row` (action items), `.grid-4` (metrics row).
- **Slide count:** 8–15. Dense but scannable; avoid slides that are only decorative.
- **Cover framing:** Headline states the opportunity or outcome in concrete terms (€, %, × multiplier). Subhead frames the business case in one sentence.
- **Avoid:** Long narrative slides, community-story framing, vague "we believe" language without numbers behind it.

---

### Community
*Local meetup audiences, open-source communities, grassroots tech events.*

- **Tone:** Warm, personal, story-driven. Peer-to-peer — we're all in this together. Real moments over polished corporate voice.
- **Structure:** Open with a human moment or question → share the journey → what we learned → invite participation. Leave breathing room.
- **Components to lean on:** `.pull-quote` (memorable line), `.card` (story beats), `.grid-3` (three-act structure), `.lanes` (contrast two perspectives), `.msg` (quoted voices).
- **Slide count:** 6–12. Pacing matters; don't overfill — the speaker carries the room.
- **Cover framing:** A question, a provocative statement, or a shared experience the audience recognises. Subhead sets the scene, not the agenda.
- **Avoid:** Heavy data tables, corporate KPI rows, jargon-heavy chrome labels.

---

### Events
*Large conferences, international audiences, keynotes, brand-building talks.*

- **Tone:** Inspiring, authoritative, broad appeal. Build to a single memorable idea. The deck supports a live narrative — it doesn't replace it.
- **Structure:** Strong hook (surprising stat or question) → core insight → why it matters now → the vision → one clear call to action.
- **Components to lean on:** `h2.display` with `<em>` serif emphasis, `.pull-quote` (the signature line), `.kpi` (big anchoring numbers), `.grid-3` (three pillars), `.card.is-accent` (the key idea).
- **Slide count:** 10–18. Paced for a live room; each slide should land in under 90 seconds of speech.
- **Cover framing:** Bold, memorable headline — one idea, maximum impact. The serif `<em>` emphasis should carry the emotional weight.
- **Avoid:** Bullet-list slides, dense tables, anything that requires the audience to read while listening.

---

### Marketing
*Brand campaigns, product launches, lead generation, partner pitches.*

- **Tone:** Punchy, benefit-led, clear CTAs. Every word earns its place. Speak to a specific audience pain and solve it fast.
- **Structure:** Hook (pain or desire) → solution → proof (social, data, case) → CTA. Keep it tight.
- **Components to lean on:** `.kpi` (proof points), `.card.is-accent` (the offer), `.doors` (multiple value props), `.rule-strip` (reasons to believe), `.tag-row` (benefits or steps).
- **Slide count:** 6–10. The audience will not scroll slowly — assume fast consumption.
- **Cover framing:** Benefit headline ("What X gives you"), not capability headline ("X does Y"). Subhead names the target audience explicitly.
- **Avoid:** Internal jargon, org-chart-style diagrams, anything that feels like an internal strategy doc.

---

### Technical
*Engineering teams, developers, architects, technical evaluators.*

- **Tone:** Precise, peer-to-peer, respect the audience's expertise. Show your work — diagrams, trade-offs, and real numbers beat hand-wavy claims.
- **Structure:** Context/problem → approach/architecture → trade-offs considered → implementation → results/benchmarks. It's fine to go deep.
- **Components to lean on:** `.dt` (data table), `.smx` (comparison matrix), `.schema` (architecture diagram), `.lanes` (two approaches), `.gantt` (timeline/phases), `.crm` (structured data view).
- **Slide count:** 10–20. Technical audiences tolerate more density; still, one concept per slide.
- **Cover framing:** Clear problem statement + the approach in a single line. No marketing language.
- **Avoid:** Vague outcome slides without data, `.pull-quote` as the primary content, decorative components that don't carry information.

---

### Internal / Leadership
*Team retrospectives, planning sessions, leadership reviews, OKR check-ins.*

- **Tone:** Direct, honest, action-focused. The audience knows the context — skip the setup, get to the point, own both wins and gaps.
- **Structure:** Where we are (status + data) → what we learned → what we're doing next → who owns what and by when.
- **Components to lean on:** `.gantt` (timeline/milestones), `.smx` (status matrix), `.rule-strip` (decisions), `.tag-row` (owners + actions), `.kpi` (current vs target), `.lanes` (two tracks or two options).
- **Slide count:** 8–15. Match the meeting length — these are working sessions, not performances.
- **Cover framing:** State of play + date. No spin, no inspirational preamble unless the context calls for it.
- **Avoid:** Marketing language, vague outcome statements, slides that don't lead to a decision or action.

## Steps

### 1. Create the folder and copy the template

```bash
mkdir -p <slug>
cp _template/index.html <slug>/index.html
```

The template already has the complete xgeeks design system (all CSS tokens, every component class, the reveal animation, keyboard navigation). You are customising content only — never touch the `<style>` or `<script>` blocks.

### 1b. Look for source content in `Sources/<slug>/`

Before writing any slide content, check whether `Sources/<slug>/` exists:

```bash
ls Sources/<slug>/
```

If the folder exists, read every file in it. Supported formats: **PDF, Markdown, plain text, CSV, images (PNG, JPG, GIF, WebP, …)** — any mix is fine. Skip any `.docx` or `.xlsx` files if present.

**PDF**
- ≤ 10 pages: read in one call.
- > 10 pages: read in chunks of up to 20 pages using the `pages` parameter (`"1-20"`, `"21-40"`, …) — required, otherwise the Read tool errors.

**CSV, Markdown, plain text**
- Read directly with the Read tool.

**Images (screenshots, photos, diagrams)**
- Read directly with the Read tool — Claude is multimodal and will interpret the visual content.
- Use screenshots to extract: slide structures, data visualisations, UI states, diagrams, or any text visible in the image.
- If an image is ambiguous, describe what you extracted and how you used it so the user can correct any misreads.

These files are the **source of truth** for this deck's content. Use them to:

- Derive the deck title, description, and cover kicker (event name, date, audience).
- Decide how many slides you need and what each slide covers.
- Pull specific numbers, names (of organisations — not individuals' PII), and outcomes directly from the source rather than leaving placeholder text.
- Respect the public/private rule from `CLAUDE.md`: never copy individual contact details, per-deal pricing, or signed-contract contents into the deck even if they appear in the source files.

If `Sources/<slug>/` does not exist, continue with placeholders as normal.

### 2. Customise the new deck

Apply the chosen **audience profile** before writing a single word of content — it determines tone, which components to reach for, how many content slides to aim for, and how to frame the cover and close. Refer back to the profile whenever you're deciding between two approaches.

Read `<slug>/index.html` then make these targeted edits:

| What | Where in the file | Target value |
|---|---|---|
| `<title>` | `<head>` | `{Title} · synvert xgeeks` |
| `<meta name="description">` | `<head>` | One-sentence description |
| Chrome left label (every slide) | `class="chrome__left"` | `SECTION LABEL <span class="dot"></span> SUBLABEL` with real labels matching the profile's language register |
| Cover kicker | slide `s1` `.kicker` | Audience · date · version line |
| Cover `h1.display` | slide `s1` | Headline framed for the profile (outcome for Business, human moment for Community, bold idea for Events…) |
| Cover `.subhead` | slide `s1` | Supporting sentence in the profile's tone |
| Cover `.cover-meta` | slide `s1` | `<span>N slides</span><span>Date</span>` |
| Content slides | `s2`–`s(N-1)` | Structured and populated using the profile's recommended components and slide count guidance |
| Closing `h2.display` | last slide | Closing headline matching the profile (ask for Business, invitation for Community, vision for Events…) |
| Closing `.pull-quote` | last slide | The one line that should stay with the audience |
| Closing `.cover-meta` | last slide | `<span>synvert xgeeks</span><span>Date · Occasion</span>` |

**Remove** the `<!-- EDIT: ... -->` comments as you update each section — they're scaffolding, not permanent. Keep the structural `<!-- NNN Slide title -->` comments; they help navigate the file.

**Never change:** the inline `<style>` block, the `<script>` block, or the `.deck-progress` nav (update the nav entries to match the actual slide count once content is settled).

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
