# Make the website sound like you

Live site: https://jayashruthi.com

The website lives in `/Users/shruthi/Documents/ChatGPT/Career/portfolio-refresh`, and its GitHub repository is `shrut10/NoctraMind-Site`.

## Start with `content/site.js`

This is the main file for changing the wording. [Open the copy file on GitHub](https://github.com/shrut10/NoctraMind-Site/edit/main/content/site.js), or open it in any text editor. Change the words, then commit to `main` to update the live site through Vercel.

The quickest places to start are `profile.introduction` (the homepage intro), `profile.welcome` (the short line below it), and `ui.projectsIntro` (the projects page tagline).

| What you want to change | Find this in `content/site.js` |
| --- | --- |
| Your name, introduction, email and social links | `profile` |
| The homepage announcement and its button wording | `home.newsTitle`, `home.newsText`, `home.newsButton` |
| Other homepage headings and sentences | `home` |
| Menu labels, buttons, section headings and page taglines | `ui` |
| GeneCraft’s page, screenshot caption and download link | `genecraft` |
| IntentLab’s explanation, motivation and results | `intentlab` |
| The NeuroTechX listing on the homepage and project page | `intentlab.recognition`, `intentlab.recognitionDetail` and their adjacent links |
| Other project names, descriptions, thumbnails and GitHub links | `projects` |
| Essay titles, summaries and links | `posts` |
| About page | `about` |
| Contact page | `contact` |

Change the words inside the quotes; leave property names and commas in place. For a sentence containing a straight apostrophe, use double quotes around it, for example:

```js
newsText: "I'm exploring how imagined hand movements can become computer commands.",
```

You can use paragraphs that sound like you. Keep the measured results, dataset attribution and limits accurate: the experiment uses **recorded** EEG and its 61.1% figure is participant-macro balanced accuracy. If a new model changes the results, update the project and this page together.

## Other text and the design

- `app/page.jsx`: homepage section labels and link labels.
- `app/projects/intentlab/page.jsx`: extra project section headings, technical explanation and resource links.
- `app/projects/page.jsx`: projects page introduction and featured-project layout.
- `app/blog/page.jsx`: writing page introduction and note about the PDF.
- `app/ClientLayout.jsx`: menu and footer wording.
- `app/layout.jsx`: the default browser-tab title and search description. Other page files contain their own `metadata`.
- `components/ThrongletField.jsx`: the canvas sprites, walking and hunger behaviour, Feed button and animation controls.
- `app/styles/globals.css`: colours, fonts, borders, spacing and button styling. The main palette and wood colours are at the very top; wooden menu styles are near the end.
- `public/landscape.svg`: original pixel landscape behind the pages.
- `components/FeaturedProject.jsx`: the GeneCraft and IntentLab feature layouts; their text comes from `content/site.js`.
- `public/projects/`: your GeneCraft screenshot, an actual capture of the IntentLab demo, and the published model-comparison figure.
- `public/social-card.svg` and `public/social-card.png`: the preview image used when the site is shared. If you edit the SVG, regenerate the PNG with `npm run social-image`.
- `app/sitemap.js`: add any new page URLs and change `lastModified` when making a substantive update.

The field uses original pixel sprites drawn on a canvas, inspired by the creatures in Black Mirror’s Plaything. It uses no extracted game artwork and runs as a small local behaviour simulation, without a language model. Fonts are served from the website itself.

## Preview your changes

Use Node.js 22. In a terminal:

```sh
cd /Users/shruthi/Documents/ChatGPT/Career/portfolio-refresh
npm ci
npm run dev
```

Open the local address shown in the terminal (usually http://localhost:3000). Saved changes appear in the preview. Stop the preview with Ctrl+C.

Before publishing:

```sh
npm run lint
npm run build
```

## Publish to the existing website

Commit and push your changes to the repository’s `main` branch. Vercel’s connected project, `noctra-mind-site`, builds the update for **jayashruthi.com**. You can also edit `content/site.js` directly on GitHub and commit there; pull those changes locally before your next local edit.

Check the Vercel deployment status before assuming an update is live. A failed build leaves the previous successful version online. GitHub Actions separately checks the code, build and production dependencies.

To reverse a published change, revert its commit and push, or restore an earlier successful deployment in Vercel. Avoid force-pushing or deleting the repository.

## The separate IntentLab demo

The demo has its own repository and deployment. Its introduction, headings and explanations are in [web/index.html](https://github.com/shrut10/intentlab-bci/edit/main/web/index.html). Find the exact words visible on the page and change the text between the HTML tags. Keep `id` attributes and control values intact.

- Main title: search `Imagining left.`
- Intro: search `I trained a model`.
- Notes: search `What I wanted to test`, `Where it falls short`, or `What still needs testing`.
- Messages after a prediction: `web/app.js`.
- Palette and fonts: `web/base.css`; demo layout, borders and buttons: `web/pixel.css`.
- Full map: [IntentLab editing guide](https://github.com/shrut10/intentlab-bci/blob/main/docs/EDITING.md).

Local folder: `/Users/shruthi/Documents/ChatGPT/Career/intentlab-bci`. Pushing its `main` branch updates `intentlab-bci.vercel.app` independently of this portfolio.

## Current project selection

Reviewed against public GitHub sources on 18 October 2026. GeneCraft and IntentLab are the two lead projects. The reproducible neural-network versus polynomial comparison follows, then the housing group project and PageRank. Small exercises and repositories without a clear standalone presentation are left off this curated page; all work remains accessible through GitHub.

This is a curated snapshot, so a new repository is added by editing the `genecraft`, `intentlab` or `projects` objects in `content/site.js` rather than appearing automatically. For the model comparison, the polynomial's validation MSE is 0.0307308 and the neural network's is 0.035906: about 14.4% lower relative to the neural network. The repository README's approximately 17% uses the other denominator.

Use actual screenshots or published figures. Omit `image` and `imageAlt` on ordinary project cards when there is no suitable image. The original GeneCraft screenshot remains at full resolution on its project page.
