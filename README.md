# jahnavid10.github.io

Personal CV / portfolio site for Jahnavi Dulala, served via GitHub Pages at
https://jahnavid10.github.io

## Structure

- `index.html` — page content
- `style.css` — styling (light/dark theme via CSS variables)
- `script.js` — theme toggle, mobile nav, scroll progress, reveal-on-scroll
- `i18n.js` — English/German language switch (translation dictionary + toggle)
- `assets/` — downloadable files (CVs, thesis report)

## Required files in `assets/`

| File | Used by | Status |
|---|---|---|
| `assets/CV_Jahnavi_Dulala_EN.pdf` | "Download CV (English)" button in the About section | ✅ present |
| `assets/CV_Jahnavi_Dulala_DE.pdf` | "Lebenslauf (Deutsch)" button in the About section | ⬜ still needed |
| `assets/Thesis_Report_Jahnavi_Dulala.pdf` | "Thesis Report (PDF)" link in the Master Thesis Researcher timeline entry | ⬜ still needed |

## Known placeholders to fill in

- Certification cards (Certifications section) currently link to `#`.
  Replace each `<a href="#" class="cert-link">` with the real credential
  verification URL (Coursera "Share" link, Google Cloud Skills Boost badge
  URL, Databricks credential URL).

## Updating content

Edit `index.html` directly — each section (About, Experience, Projects,
Skills, Education, Certifications, Contact) is clearly marked. The Master
Thesis report/repo links live inside the "Master Thesis Researcher" entry
in the Experience timeline, not a separate section.
Translatable text carries a `data-i18n="key"` attribute; its English and
German strings live in `i18n.js` under that same key — update both when you
change wording. No build step required; this is a static site.

## Deploying

Push to the `main` branch. GitHub Pages (Settings → Pages → Source: `main`
branch, `/ (root)`) rebuilds automatically — the site is live at
`https://jahnavid10.github.io` within a minute or two.
