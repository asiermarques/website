# asiermarques.com

A self-hosted link-in-bio page built with [Eleventy](https://www.11ty.dev/).

## Requirements

- Node.js 18+
- npm

## Getting started

```bash
npm install      # install dependencies
npm run dev      # local dev server with live reload at http://localhost:3000
npm run build    # build the static site into _site/
```

## Project structure

```
src/
├── _data/
│   └── site.json        # all content: name, tagline, socials, link sections
├── _includes/
│   ├── head.njk         # <head> metadata
│   ├── header.njk       # avatar, name, tagline
│   ├── socials.njk      # social icon row
│   └── linksection.njk  # reusable macro that renders a titled link group
├── index.njk            # page layout, assembles the includes
├── styles.css           # all styling
└── asier.jpg            # avatar
eleventy.config.js       # Eleventy config (input src/, output _site/)
```

## Editing content

Almost everything is driven by `src/_data/site.json` — no template edits needed for routine updates.

- **`socials`** — map of network → profile URL, rendered as the icon row.
- **`links`** — the main list of links.
- **`conferences`** — links under the "Conferences & communities I organize" heading.
- **`beyond`** — links under the "Beyond work" heading.

Each link is an object: `{ "label": "Display text", "url": "https://..." }`.

To add or rename a section heading, edit the `linkSection(...)` calls in `src/index.njk`. The macro takes a links array and an optional title.

## Build output

`npm run build` writes the static site to `_site/`. Deploy the contents of that directory to any static host.
