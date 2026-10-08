# Make the website sound like you

Live site: https://jayashruthi.com

The website lives in your existing folder, `~/mindful-machine-portfolio`, and its GitHub repository is `shrut10/NoctraMind-Site`.

## Start with `content/site.js`

This is the main file for changing the wording. You can open it in any text editor.

| What you want to change | Find this in `content/site.js` |
| --- | --- |
| Your name, introduction, email and social links | `profile` |
| The homepage announcement and its button wording | `home.newsTitle`, `home.newsText`, `home.newsButton` |
| Other homepage headings and sentences | `home` |
| IntentLab’s explanation, motivation and results | `intentlab` |
| The NeuroTechX listing on the homepage and project page | `intentlab.recognition`, `intentlab.recognitionDetail` and their adjacent links |
| Existing project names, descriptions and GitHub links | `projects` |
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
- `app/styles/globals.css`: colours, fonts, borders, spacing and button styling. The colours are at the very top.
- `public/social-card.svg` and `public/social-card.png`: the preview image used when the site is shared. If you edit the SVG, regenerate the PNG with `npm run social-image`.
- `app/sitemap.js`: add any new page URLs and change `lastModified` when making a substantive update.

The field uses original pixel sprites drawn on a canvas, inspired by the creatures in Black Mirror’s Plaything. It uses no extracted game artwork and runs as a small local behaviour simulation, without a language model. Fonts are served from the website itself.

## Preview your changes

Use Node.js 22. In a terminal:

```sh
cd ~/mindful-machine-portfolio
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
