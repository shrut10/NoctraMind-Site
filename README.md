# Shruthi’s portfolio

My projects and writing, at **[jayashruthi.com](https://jayashruthi.com)**.

A Next.js portfolio with a pixel-art design, original illustrations, locally hosted fonts and a featured page for [IntentLab](https://jayashruthi.com/projects/intentlab), my imagined-movement EEG experiment.

## Run locally

Use Node.js 22, then:

```sh
npm ci
npm run dev
```

## Check and build

```sh
npm run lint
npm run build
npm start
```

All pages are pre-rendered. Client JavaScript handles navigation and a canvas field of six wandering creatures inspired by Thronglets. Visitors can drop apples, pause the animation, or use their reduced-motion preference to start with a still scene. There is no contact form backend; email links open the visitor’s email application.

## Edit the website

Most wording lives in **`content/site.js`**. See **[EDITING.md](EDITING.md)** for the file map, preview steps and publishing instructions.

## Deployment

The `main` branch is connected to the existing Vercel project `noctra-mind-site`, serving `jayashruthi.com`. GitHub Actions runs lint, production build and a production dependency audit. Environment variables are not required for this portfolio; IntentLab’s API is hosted separately.

## Design

Original pixel sprites and SVG icons, Pixelify Sans headings, DM Sans body text, square buttons and solid offset shadows. No third-party game artwork. Keyboard focus styles, a skip link, a mobile menu with Escape support and reduced-motion styling are included.
