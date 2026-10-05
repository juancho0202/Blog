# Blog

Static markdown blog built with Nuxt 4.

## Requirements

- Node.js 22+
- pnpm

## Scripts

- `pnpm dev` — run the development server
- `pnpm build` — build for production
- `pnpm generate` — generate static output
- `pnpm preview` — preview production output
- `pnpm lint` — run ESLint
- `pnpm lint:fix` — run ESLint with autofix
- `pnpm typecheck` — run Nuxt type checking

## Writing posts

Create posts in `content/blog/` using the filename format:

- `YYYY-MM-DD-slug.md`

The blog collection validates frontmatter with this schema:

- `title` (required string)
- `description` (required string, max 200 chars)
- `date` (required date, coercible from string)
- `updated` (optional date)
- `tags` (string array, defaults to `[]`)
- `draft` (boolean, defaults to `false`)
- `cover` (optional string)

When querying published posts, filter drafts out explicitly:

```ts
const publishedPosts = await queryCollection('blog')
  .where('draft', '!=', true)
  .all()
```

To keep URLs as `/blog/slug` (without the date prefix), set `path` in frontmatter:

```yaml
path: /blog/my-post-slug
```

`path` is a Nuxt Content built-in field, so it is intentionally not part of the collection schema above.


## Deployment

This project is deployed to [Netlify](https://juan-munoz-blog.netlify.app/) and no longer uses GitHub Pages.

Netlify automatically builds and deploys the site on every push to `main`. The site is served at the root path (`/`).

- CI workflow for pull requests (lint, typecheck): `.github/workflows/ci.yml`
