# Deploying The Living Body (auto-updating)

Goal: a permanent web address that **rebuilds itself every time you push a change**.
The pieces: your code lives on **GitHub**, and **Cloudflare Pages** watches it and
redeploys automatically. Both are free, and the site is just static files on a CDN, so it
costs nothing at any number of visitors.

You only do the setup (Part 1) once. After that, updates are Part 3.

---

## Part 1 — Put the project on GitHub (one time)

1. Make a free account at **github.com** if you don't have one.
2. Install **GitHub Desktop** (desktop.github.com) — the friendly, no-terminal way.
3. In GitHub Desktop: **File ▸ Add local repository**, and choose this `site` folder.
   - If it says it isn't a repository yet, click **create a repository** when offered.
4. It will list the files to include. The `.gitignore` here already keeps `node_modules`
   and `dist` out, so you should see the source files only (good).
5. Click **Commit to main**, then **Publish repository**.
   - Uncheck "Keep this code private" only if you're fine with it being public; private is
     also fine for deployment.

You now have a GitHub repo holding the source.

---

## Part 2 — Connect Cloudflare Pages (one time)

1. Make a free account at **dash.cloudflare.com**.
2. Go to **Workers & Pages ▸ Create ▸ Pages ▸ Connect to Git**.
3. Authorize GitHub and pick the repository you just published.
4. In the build settings, enter exactly:
   - **Framework preset:** Astro (if offered; otherwise "None")
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

After a minute you get a permanent URL like `the-living-body.pages.dev`. That's the link to
share with the school.

(Netlify works the same way if you prefer it — same build command and output directory.)

---

## Part 3 — Updating the live site (every time after)

Whenever the content or design changes:

1. If it's **new writing from Dijana**: she does **File ▸ Download ▸ Microsoft Word** on her
   Google Doc, then run the converter:
   ```
   python ../authoring/convert-docx-to-site.py  chapters.docx  src/data
   ```
2. Check it locally if you like: `npm run dev`.
3. In **GitHub Desktop**: write a short summary, **Commit to main**, then **Push origin**.
4. Cloudflare rebuilds automatically. The live URL updates in ~1 minute. Nothing else to do.

That's the whole loop: **convert → commit → push → it's live.**

---

## Custom domain (optional)

To use something like `thelivingbody.com` instead of `*.pages.dev`: buy the domain (~$10/yr),
then in the Cloudflare Pages project go to **Custom domains ▸ Set up a domain** and follow
the prompts. The free hosting underneath stays free.

---

## Notes

- You never deploy by hand-editing files on the host — the deploy always builds from the
  committed source.
- `node_modules` and `dist` are intentionally **not** in Git (see `.gitignore`); Cloudflare
  reinstalls and rebuilds them itself.
- Account creation, authorizing GitHub, and pushing have to be done by you — those steps
  need your login and can't be automated for you.
