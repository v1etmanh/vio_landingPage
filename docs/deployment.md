# Deployment

## Platform

Vercel project: `vio-landing-page-remake`

## Live URL

https://vio-landing-page-remake.vercel.app

This is a separate project and URL from the existing VIO production site.

## Deploy

The current checkout is linked locally through `.vercel/project.json`.

```powershell
npx vercel --prod
```

On another machine, link the project before deploying:

```powershell
npx vercel link --project vio-landing-page-remake
npx vercel --prod
```

The Vite build command is `npm run build` and the output directory is `dist`.

## Environment variables

No environment variables are currently required.

## Source upload

`.vercelignore` excludes local source media, Git history, dependencies, build output, and environment files. Keep raw assets in `assets_source/`; only optimized website assets belong in `public/`.

## Git integration

The initial automatic GitHub connection failed because the active Vercel account did not have repository access. Deployments currently run manually from this checkout.

## Rollback

```powershell
npx vercel rollback <deployment-url>
```
