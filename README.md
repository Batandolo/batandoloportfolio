# John Raymund Batandolo — Portfolio

A hand-written static portfolio site (HTML, CSS, vanilla JavaScript) for an IT student.
No framework, no build step, no dependencies — it publishes directly with **GitHub Pages**.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | Home: introduction, current focus, featured projects |
| `about.html` | Background, skills by category, education timeline, learning goals |
| `projects.html` | UniMart, Honey I'm Home, and the AI career assessment system |
| `contact.html` | Email link and message form (opens your email app) |
| `style.css` | Colours, typography, dark theme, responsive rules |
| `script.js` | Theme switch, mobile menu, scroll reveal, form behaviour |
| `images/` | Portrait illustration, three project placeholders, favicon |
| `robots.txt` | Allows search engines to index the site |
| `README.md` | This file |

## 1. Preview it locally

Double-click `index.html`, or open the folder in VS Code, install the **Live Preview**
extension by Microsoft, right-click `index.html` and choose *Show Preview*.

A local address such as `http://127.0.0.1:3000` is **not** the link you submit — it only works
on your computer.

Before uploading, resize the browser to phone width and test the menu button, the theme toggle,
and every link.

## 2. Images the site needs

Only five files, all already in `images/`:

| File | Used for | Recommended |
| --- | --- | --- |
| `images/project-1.png` | UniMart screenshot | 1600 × 1000 px, under ~300 KB |
| `images/project-2.jpg` | Honey, I'm Home screenshot (real) | 1600 × 900 px |
| `images/project-3.png` | AI career assessment screenshot | 1600 × 1000 px, under ~300 KB |
| `images/profile.jpg` | Hero portrait photo | 960 × 960 px square (the card crops the sides to 6 : 7) |
| `images/favicon.svg` | Browser tab icon | Already made; optional |

**To add your remaining screenshots:** overwrite `images/project-1.png` and `images/project-3.png`
with your captures using the same names. A `.jpg` works too — just change the matching `src` in
`index.html` and `projects.html`.

To change your photo later, overwrite `images/profile.jpg` with another square image (the card is
taller than it is wide, so the sides get cropped slightly).

No other images are required. Social preview images and a resume PDF are optional extras.

## 3. Before publishing

The email is set to **batandoloj@gmail.com** and the project buttons have been removed until you
have links for them.

**GitHub and LinkedIn** — add rows back inside the `<ul class="contact-list">` in `contact.html`
when your profiles exist:

```html
<li>
  <span class="contact-list-label">GitHub</span>
  <a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener">github.com/YOUR-USERNAME</a>
</li>
```

**Project links** — when a project has a live demo, video, or repository, add a button block at
the end of that project's `<div class="project-detail-body">` in `projects.html`:

```html
<div class="project-links">
  <a class="btn btn-sm" href="https://your-link">View live demo</a>
  <a class="btn btn-sm btn-ghost" href="https://github.com/you/repo">View code</a>
</div>
```

Only add links that actually work — a dead button is worse than no button.

**Also update:** the AI-tools sentence under *About → How this site was made* if you used other
tools, and the note about the screenshots on the projects page once real images are in.

## 4. Publish with GitHub Pages

1. Create a **public** repository named `portfolio` at github.com.
2. Open the repository → **Add file → Upload files**.
3. Drag in the four HTML files, `style.css`, `script.js`, `robots.txt`, and the whole `images`
   folder. Upload the *contents* of this folder — not the folder itself, and not a ZIP.
4. Commit with a message such as "Add my portfolio".
5. Confirm `index.html` sits at the top level of the repository.
6. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → **Save**.
7. Wait a minute or two (up to 10), then open
   `https://YOUR-USERNAME.github.io/portfolio/`.
8. Test that address in a private/incognito window and on your phone.

### Updating later

Edit the files locally, upload the changed files to the same paths in the same repository, and
commit again. Saving on your laptop alone does not update the live site.

### Common problems

| Symptom | Check |
| --- | --- |
| 404 | Repository is public, Pages is enabled, `index.html` is in the branch root |
| No styles or images | File and folder names match exactly — GitHub is case-sensitive |
| Old content still showing | Wait for the Pages build, then refresh in incognito |
| Contact button does nothing | The form opens your email app; a `mailto:` link needs a configured mail app |

## Notes for the submission

- **Live URL:** `https://YOUR-USERNAME.github.io/portfolio/`
- **Repository:** `https://github.com/YOUR-USERNAME/portfolio` (add this when the repo exists)
- **Hosting service:** GitHub Pages (free)
- **AI use:** the layout, CSS, and JavaScript were drafted with AI assistance, then reviewed,
  tested at desktop and phone widths, and filled with my own project content.
- **Screenshots:** take one desktop and one mobile screenshot of the published site.

The site has no analytics, cookies, or tracking. The only external request is Google Fonts,
which falls back to system fonts if blocked.
