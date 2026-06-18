# BD CRM — specification

A simple, populatable business-development database that combines **everything we hold** — KCD
contacts *and* the contacts accumulated across our national meetups over the years. It is the
engine that powers the outreach: it decides who gets which message, by whom, and when, and it lets
us report € pipeline influenced.

> Public spec only — **structure, not data.** Real names/emails/values are populated in the private
> instance (spreadsheet or CRM tool), never in this repo.

---

## 1. Label system

**Top-level labels:** `KCD` · `Meetup`

**Sub-labels:**

| `KCD` | `Meetup` |
|---|---|
| `KCD – sponsor` | `Meetup – speaker` |
| `KCD – speaker` (2024, 2025) | `Meetup – attendee` (flagged interesting) |
| `KCD – bulk-ticket buyer` (Siemens, NOS, …) | `Meetup – organizer / partner / venue` |
| `KCD – prospect` (cold-reach / inbound) | |

A contact can carry more than one label (e.g. a person who is both a `KCD – speaker` and a
`Meetup – speaker`).

---

## 2. Per-contact fields

| Field | Values / notes |
|---|---|
| `name` | 🔒 private |
| `company` | |
| `role` | job title |
| `email` / `linkedin` | 🔒 private |
| `source_label` | one or more labels from §1 |
| `segment` | `client` · `partner` · `competitor/neutral` (+ `dual` flag) |
| `sponsor_state` | `closed` · `negotiating` · `no` · `no-reply` · `past-only` · `never` |
| `role_in_deal` | `target` (signs / holds budget) · `route-in` (warm path) |
| `account_tier` | `T1-warm` · `T1-reach` · `T2` · `T3` |
| `contact_heat` | `hot` · `warm` · `cold` |
| `owner` | who runs this contact (Fábio = organizer track only; Ivan/managers = business track) |
| `last_touch` | date |
| `next_step` | free text |
| `notes` | conversation signals captured on-site / in calls |

The `sponsor_state` field drives the **state matrix** (analysis §5.1): it tells you whether the
business track may open, which hand-off pattern to use, and the tone.

---

## 3. Seed sources (populate from)

1. **Bulk-ticket buyers** — last year + this year (e.g. Siemens, NOS). Label `KCD – bulk-ticket buyer`.
2. **Speakers** — all years from the 2024 + 2025 speaker DB. Label `KCD – speaker`.
3. **Sponsor DBs** — the tracking DB + 2024/2025 onboarding & billing ledgers. Label `KCD – sponsor`,
   with `sponsor_state` and signatory/route-in roles.
4. **Meetup history** — organizers, partners, venues, speakers and flagged attendees accumulated
   across meetups Braga→Lisbon. Label `Meetup – *`.

---

## 4. CSV header template (copy to start the sheet)

```csv
name,company,role,email,linkedin,source_label,segment,dual,sponsor_state,role_in_deal,account_tier,contact_heat,owner,last_touch,next_step,notes
```

Keep the populated CSV/spreadsheet in the **private** instance only (it contains PII). This repo
holds the spec, not the data.
