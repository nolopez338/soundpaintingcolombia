# SoundPaintingColombia

SoundPaintingColombia is a project repository for a theater and performance group working with soundpainting, live composition, movement, music, and collective creation.

This repository contains two main types of material:

1. A static website for public presentation and future digital expansion.
2. Project documents supporting artistic, administrative, cultural, technical, and communication work.

## GitHub Pages deployment

The website is designed for GitHub Pages. The main entry point must remain at the repository root:

```text
index.html
```

Do not move `index.html` into a subfolder. GitHub Pages can serve the root-level `index.html` directly as the homepage.

## Repository structure

```text
soundpaintingcolombia/
├── index.html
├── README.md
├── .gitignore
├── pages/
│   └── soundpainting-sign-guide.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   ├── audio/
│   ├── video/
│   └── fonts/
├── data/
├── documents/
│   ├── proposals/
│   ├── budgets/
│   ├── artistic-materials/
│   ├── administrative/
│   ├── technical-requirements/
│   ├── press-and-communication/
│   └── references/
├── drafts/
├── archive/
└── project-management/
    ├── notes/
    ├── timelines/
    └── task-lists/
```

## Opening the website locally

You can open the site directly in a browser by opening `index.html`.

For a local development server, run one of the following commands from the repository root:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Where to place new website files

- Place CSS files in `css/`.
- Place JavaScript files in `js/`.
- Place secondary HTML pages in `pages/`.
- Place reusable images in `assets/images/`.
- Place icons and favicon files in `assets/icons/`.
- Place audio files in `assets/audio/`.
- Place video files in `assets/video/`.
- Place web fonts in `assets/fonts/`.
- Place structured content files such as JSON or CSV in `data/`.

When adding or moving website files, update relative paths in `index.html` and any pages under `pages/`.

## Where to place new documents

Use `documents/` for stable project materials:

- `documents/proposals/` for grant, festival, venue, and partnership proposals.
- `documents/budgets/` for budgets and financial planning documents.
- `documents/artistic-materials/` for scripts, artistic statements, repertory notes, and creative materials.
- `documents/administrative/` for organizational, legal, or administrative files.
- `documents/technical-requirements/` for riders, stage plans, equipment lists, and technical specifications.
- `documents/press-and-communication/` for press kits, biographies, announcements, and communication materials.
- `documents/references/` for research references and external source materials.

Use `drafts/` for incomplete or unstable work. Use `archive/` for outdated materials that should be preserved but are no longer active.

## Project management

Use `project-management/` for internal coordination:

- `project-management/notes/` for meeting notes and general planning notes.
- `project-management/timelines/` for schedules, calendars, and milestones.
- `project-management/task-lists/` for task tracking and operational checklists.

## Maintenance conventions

- Keep root-level files limited to high-level project files and folders.
- Use lowercase folder names with hyphens for multiword names.
- Use descriptive filenames that explain the content and purpose of the file.
- Avoid duplicating files across folders. If a file is uncertain but may be useful, place it in `archive/` or `drafts/` instead of deleting it.
- Keep public website assets separate from project documents.
- Check website paths after moving CSS, JavaScript, images, icons, or secondary pages.
- Preserve `index.html` at the repository root for GitHub Pages compatibility.
