# trevorjonesbass.com

Personal artist website for Trevor Jones, Chicago-based bassist.

Built with [Astro 4](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Deployed on [Netlify](https://netlify.com).

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

---

## How to Update Content

All bio, credits, and copy live in `/src/data/` as JSON files. You never need to touch page code to update these.

### Add a New Theater Credit

Open `src/data/theater.json` and add an entry to the `"credits"` array:

```json
{
  "show": "Into the Woods",
  "venue": "The Marriott Theatre",
  "city": "Lincolnshire, IL",
  "role": "Bassist",
  "year": "2025",
  "note": "Optional extra note — leave this out if you don't need it"
}
```

**Fields:**
- `show` — production title (required)
- `venue` — theater name (required)
- `city` — city and state (required)
- `role` — your role, e.g. "House Bassist", "Substitute" (required)
- `year` — year or range, e.g. `"2025"` or `"2024–2025"` (required)
- `note` — any clarifying note shown beneath the show title (optional)

To promote a credit as a **featured** production (shown in its own section above the table), add it to the `"featured"` array instead. Featured credits also require a `"description"` field:

```json
{
  "show": "Sweeney Todd",
  "venue": "The Marriott Theatre",
  "city": "Lincolnshire, IL",
  "role": "House Bassist",
  "year": "2025",
  "description": "A brief sentence or two describing the production and your role in it."
}
```

---

### Update the Bio

Open `src/data/bio.json`.

- **Bio paragraphs** — edit the `"bio"` array. Each string is one paragraph. Add or remove paragraphs freely.
- **Highlights** — edit the `"highlights"` array. Each string is one bullet point shown on the About page.
- **Endorsements** — edit the `"endorsements"` array. Each object needs `brand`, `role`, and `category`.
- **Organizations** — edit the `"organizations"` array.

---

### Add a Music Credit

Open `src/data/music.json`.

- **New orchestral ensemble** → add to `"orchestral"` array. Fields: `ensemble`, `location`, `type`, optional `note`.
- **New festival** → add to `"festivals"` array. Fields: `name`, `location`, `year`.
- **New notable moment** → add to `"notable"` array. Fields: `event`, `location`, `year`, optional `description`.
- **New project** → add to `"projects"` array. Fields: `name`, `role`, `description`, optional `url`.

---

### Update Consulting Copy

Open `src/data/consulting.json`. Edit the `"description"`, `"whatToExpect"` items, or `"availability"` note directly.

---

## Deployment

The site deploys automatically to Netlify when you push to the `main` branch.

**Manual deploy:**
```bash
npm run build
# Then drag the `dist/` folder into the Netlify dashboard, or:
netlify deploy --prod --dir dist
```

**Netlify Forms** — the contact form is wired to Netlify Forms automatically. After the first deploy, find submissions at:
`Netlify Dashboard → Your Site → Forms → contact`

---

## Domain

Point `trevorjonesbass.com` to Netlify via:
1. Netlify Dashboard → Domain Management → Add custom domain
2. Set your registrar's nameservers to Netlify's, or add the CNAME/A records Netlify provides.

---

## Design System

| Token | Value | Use |
|---|---|---|
| Background | `#0a0908` | Page background |
| Parchment | `#F4F0E8` | Body text |
| Bauhaus Red | `#D40000` | Primary accent, CTAs |
| Bauhaus Blue | `#1B4FD8` | Secondary highlights |
| Bauhaus Yellow | `#F0C000` | Emphasis moments |
| Heading font | Cormorant Garamond | All headings |
| UI font | DM Mono | Labels, navigation, captions |

---

## Project Structure

```
src/
├── data/
│   ├── bio.json          ← bio, highlights, endorsements
│   ├── theater.json      ← theater credits
│   ├── music.json        ← bands, orchestras, festivals
│   └── consulting.json   ← consulting page copy
├── layouts/
│   └── Layout.astro      ← shared HTML shell, fonts, scroll-reveal
├── components/
│   ├── Nav.astro
│   ├── Footer.astro
│   └── ContactForm.astro ← Netlify Forms integration
└── pages/
    ├── index.astro
    ├── about.astro
    ├── theater.astro
    ├── music.astro
    ├── consulting.astro
    └── contact.astro
public/
├── favicon.svg
└── robots.txt
```
