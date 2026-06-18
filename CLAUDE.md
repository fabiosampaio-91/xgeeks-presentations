# CLAUDE.md — kcd-sponsor-engagement

Working rules for any AI agent (or human) editing this repo.

## What this repo is

The **public** GitHub Pages site for synvert xgeeks' KCD Sponsor → Business Development plan.
Live at: https://fabiosampaio-91.github.io/kcd-sponsor-engagement/

It contains **only** published web assets (HTML/CSS/JS) and aggregated, role-based markdown.
The sensitive source-of-truth — signatory names, route-in contacts, signed-contract contents,
per-deal sponsorship values, meeting notes — lives in `private/PRIVATE-account-playbook.md`
(git-ignored) and a private companion repo.

## ⚠️ This repo is PUBLIC and Google-indexable

**Never commit private or sensitive content.** Specifically, do not add:

- **Signatory or contact PII** — personal names tied to roles, emails, phone numbers, LinkedIn
  URLs of sponsor contacts.
- **Signed-contract contents** or any document from the source `Sources/` folders.
- **Sponsor pricing / per-deal values, internal cost numbers, effort estimates.** The site
  carries only aggregated totals (e.g. "~€59K across 14 sponsors") and qualitative framing.
- **Meeting notes / transcripts.**

When naming an account, name the **company and a role** ("CEO", "Head of Digital Tech Office",
"engineering leadership") — never an individual's contact details. Anything pushed here may be
cached or indexed even after deletion. If unsure, leave it out.

## Files

```
index.html          Slide-deck presentation (primary leadership view)
analysis.html       Document view (full long-form plan)
assets/styles.css   Shared stylesheet (document view) — xgeeks brand palette
assets/nav.js       Sticky-TOC active-section highlighter
action-plan.md      Engagement action plan (public, aggregated)
methodology.md      Inputs, research, sources, method
private/            🔒 git-ignored — never published
```

## Brand

xgeeks palette only: Techno Green `#00EBB6`, Dark Space `#002E33`, coral `#FF966E`, greys.
Keep it simple and on-brand; no heavy branding work.

## How to update

This is a deployment/presentation target. To update:

1. Make the change here (or in the private source), keeping the public/private boundary.
2. Sanity-check the diff for any PII / pricing / contract content (see warning above).
3. Commit &amp; push. GitHub Pages redeploys from `main` automatically.

Commit or push **only when asked**.
