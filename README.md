# Twisha Mehta — Academic Website

A six-page academic site for Twisha Mehta, Ph.D. Research Scholar, Department of Humanities and Social Sciences, IIT Tirupati. Plain HTML/CSS/JS — no build tools, no framework, no npm install. It deploys directly on GitHub Pages as static files.

All biographical, academic, and publication content was taken directly from her existing Google Site (`sites.google.com/iittp.ac.in/twishamehta`). Nothing about her research, education, or positions has been invented.

---

## 1. What's in this folder

```
twisha-mehta-site/
├── index.html                    → About (home page)
├── research.html                 → Intellectual Pursuits
├── journey.html                  → Academic Journey
├── experience.html                → Experience
├── skills.html                   → Skills
├── publications.html             → Publications & Conferences + Collaborations + Gallery + CV
├── css/
│   └── style.css                 → all styling, colours, type, layout — one file
├── assets/
│   ├── js/
│   │   └── main.js               → mobile nav, scroll reveal, back-to-top, Reach Out modal
│   ├── icons/
│   │   └── seal.svg              → the monogram seal (also the browser favicon)
│   ├── images/
│   │   ├── portrait.jpg          → ADD: her photograph goes here (see §4)
│   │   └── conferences/          → ADD: conference photos go here (see §5)
│   └── cv-twisha-mehta.pdf       → ADD: her CV as a PDF (see §6)
└── README.md                     → this file
```

Every page shares the same navy sidebar (desktop) / top bar (mobile), the same footer, and the same **Reach Out** button and contact form — so editing `css/style.css` or `assets/js/main.js` once updates the whole site.

---

## 2. What's new / interactive in this version

- **Reach Out contact form** — a maroon floating button (bottom-right, every page) opens a pop-up form: name, email, a "nature of query" dropdown (Academic Collaboration, Conference/Speaking Invitation, Student Query, Media/Press, General), and a message box. Submitting it opens the visitor's own email app with a message pre-filled and addressed to `twishamehta03@gmail.com` — nothing to configure, works immediately on GitHub Pages with no backend or server. Escape key, clicking outside, or the ✕ closes it; focus returns to whatever was clicked to open it.
- **Scroll-reveal animation** — pursuit cards, timeline entries, collaboration cards, gallery slots, and list items fade and rise into place as you scroll to them, once each, and are skipped entirely if the visitor's system has "reduce motion" turned on.
- **Back-to-top button** — appears bottom-left after scrolling past the header on any page.
- **"By the Numbers" strip** on the About page — four counts (degrees, research positions, publications, institutional collaborations) pulled directly from what's already listed elsewhere on the site, not invented figures.
- **Animated sparkline** in the About-page hero, referencing her own Question Hour / Lok Sabha research — draws itself in on page load.

---

## 3. Publishing it on GitHub Pages — step by step

### Step 1 — Create the repository
1. Go to [github.com](https://github.com) and sign in (create a free account first if she doesn't have one).
2. Click the **+** icon top-right → **New repository**.
3. Repository name: something simple and permanent, e.g. `twisha-mehta` or `twisha-mehta-site`. This name becomes part of the final URL.
4. Set visibility to **Public** (GitHub Pages requires a public repo on the free plan).
5. Do **not** tick "Add a README file" — this project already has one.
6. Click **Create repository**.

### Step 2 — Upload the files (preserving folder structure)
This is the step most likely to go wrong, so follow it exactly.
1. On the new, empty repository page, click **uploading an existing file** (or **Add file → Upload files**).
2. Open your file explorer / Finder to this folder (`twisha-mehta-site`).
3. Select **all items inside it** — `index.html`, `research.html`, `journey.html`, `experience.html`, `skills.html`, `publications.html`, `README.md`, and the **`css` folder** and **`assets` folder** as whole folder icons — and drag them all together onto GitHub's upload box in one drag.
   - Chrome and Edge preserve folder structure when you drag folder icons directly from the file explorer window onto the browser.
   - Do **not** open the `css` or `assets` folders and drag only the files inside them — that flattens the structure and breaks all the CSS/JS/image paths.
4. Wait for the upload box to finish staging every file, then scroll through the staged list. Confirm you see paths **with folder prefixes**, such as:
   - `css/style.css`
   - `assets/js/main.js`
   - `assets/icons/seal.svg`
   - `assets/images/conferences/.gitkeep`
   If instead you see `style.css`, `main.js`, etc. listed with no folder prefix, **do not commit** — go to the troubleshooting fix below first.
5. Scroll down, add a commit message such as `Initial upload of academic site`, and click **Commit changes**.

### Step 3 — Turn on GitHub Pages
1. In the repository, click **Settings** (top tab bar).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **main** and folder **/ (root)**, then click **Save**.
5. Wait 1–2 minutes. Refresh the Pages settings screen — a green banner will appear with the live URL, in the form:
   `https://<your-github-username>.github.io/<repository-name>/`
6. Visit that URL. Hard-refresh with **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac) to bypass any cached version.

### Step 4 — Confirm everything loaded
Check, page by page:
- The navy sidebar/top bar and gold seal appear (confirms `css/style.css` loaded).
- The sparkline draws itself in on the About page hero (confirms `assets/js/main.js` loaded).
- Clicking **Reach Out** opens the pop-up form (same JS file).
- All six pages are reachable from the sidebar.

If the page looks like plain unstyled black-and-white text with no navy theme, the `css` folder didn't upload correctly — go to the troubleshooting fix below.

---

## 4. Troubleshooting: files got flattened during upload

If GitHub shows `style.css`, `main.js`, `seal.svg`, etc. sitting loose at the repository root instead of inside their folders, fix each one with the rename trick — no re-upload needed:

1. Click the loose file (e.g. `style.css`) to open it.
2. Click the pencil (✏) **edit** icon, top-right of the file view.
3. In the filename field at the top of the editor, change the name to include its correct folder path:
   - `style.css` → `css/style.css`
   - `main.js` → `assets/js/main.js`
   - `seal.svg` → `assets/icons/seal.svg`
4. Scroll down, write a commit message like `Move file into correct folder`, and click **Commit changes**. GitHub creates the folder automatically from the slash in the filename.
5. Repeat for every misplaced file.
6. Go back to the repository's main page — folders always sort above individual files, so `assets` and `css` should now appear at the top of the file list.
7. Revisit the live site and hard-refresh.

**To avoid this next time:** always drag the `css` and `assets` folder *icons* themselves from your file explorer directly onto GitHub's upload box, rather than opening them and selecting the files inside.

---

## 5. Adding her photograph

1. Save the photo as `portrait.jpg` (or `.png`) and place it in `assets/images/`.
2. Open `index.html`, find this block near the top of the About section:
   ```html
   <figure class="portrait-frame">
     <div class="plate">
       <svg ...>...</svg>
     </div>
     <figcaption>Portrait — replace with photograph<br>(assets/images/portrait.jpg)</figcaption>
   </figure>
   ```
3. Replace the entire `<div class="plate">...</div>` block with:
   ```html
   <img src="assets/images/portrait.jpg" alt="Twisha Mehta">
   ```
4. Optionally delete or edit the `<figcaption>` line underneath.
5. Commit the change on GitHub (edit `index.html` directly in the browser, or re-upload it).

---

## 6. Adding conference photographs to the gallery

1. Add image files to `assets/images/conferences/` — e.g. `iasp-2026.jpg`, `colloquium-2026.jpg`.
2. Open `publications.html` and find `<div class="gallery-grid">` near the bottom (Section 05, "Conference Gallery").
3. Replace one of the placeholder blocks:
   ```html
   <div class="gallery-slot">
     <svg ...>...</svg>
     <span>Research Colloquium<br>IIT Tirupati, 2026</span>
   </div>
   ```
   with an actual photo:
   ```html
   <figure class="gallery-slot" style="border-style:solid; padding:0;">
     <img src="assets/images/conferences/colloquium-2026.jpg"
          alt="Describe what's happening in the photo"
          style="width:100%;height:100%;object-fit:cover;">
   </figure>
   ```
4. Copy that pattern to add more photos — the grid re-flows automatically, three per row on desktop.

---

## 7. Adding named collaborators

The source Google Site only ever names **institutions** Twisha has worked with (NHRC, NITI Tantra, the MP's office, Sabar Institute, etc.) — never individual co-authors, advisors, or faculty collaborators. Rather than invent names, the "Institutional Collaborations" section on `publications.html` reflects exactly what's verifiable today.

To add a named person once details are available, open `publications.html`, find `<div class="collab-grid">`, and add a new card following this pattern:

```html
<div class="collab-card">
  <div class="collab-org">Dr./Prof. Full Name</div>
  <div class="collab-role">Affiliation · nature of the collaboration</div>
</div>
```

---

## 8. Adding her CV

Save the CV as a PDF named exactly `cv-twisha-mehta.pdf` and upload it to the `assets/` folder (same level as the `css` and `images` folders). The **Download CV** button already on `publications.html` points to `assets/cv-twisha-mehta.pdf`, so no code changes are needed — it will simply start working once the file exists at that path.

---

## 9. About the Reach Out form (technical note)

Because this is a static site with no server, the form can't silently deliver a message in the background. Instead, submitting it builds a `mailto:` link — the visitor's own email app opens with the subject, body, and reply-to details pre-filled, and they hit send from their own account. This works everywhere with zero setup.

If a fully silent, in-page submission (no email client popping open) is wanted later, that requires a third-party form backend such as [Formspree](https://formspree.io) or [Getform](https://getform.io) — free tiers exist for low volume. That would mean changing the `<form>`'s `action` attribute and removing the JavaScript `mailto:` handler in `assets/js/main.js`. Flag this if it's wanted and it can be wired in.

---

## 10. Adjusting colours or fonts later

All design tokens live at the top of `css/style.css` under `:root { ... }` — `--navy`, `--gold`, `--maroon`, `--paper`, and the three font variables. Changing a value there updates it everywhere on the site, since every page shares this one stylesheet.

Fonts (Fraunces, Source Sans 3, IBM Plex Mono) load from Google Fonts via CDN in each page's `<head>` — no local font files to manage.

---

## 11. Accessibility notes

- Keyboard-navigable throughout, with a visible focus outline on links, buttons, and form fields.
- The Reach Out modal traps focus sensibly, supports **Escape** to close, and returns focus to the triggering button on close.
- All animation (sparkline draw-in, scroll reveal, smooth-scroll) is skipped automatically for visitors with `prefers-reduced-motion` enabled in their OS/browser settings.
