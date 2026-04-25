# carevues.com.au

Honest Australian health and wellness reviews — mental health + sleep tech affiliate blog.

## Quick Start

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build     # production build
npm run preview   # preview production build
```

## Deploy to Azure Static Web Apps

### Option 1: GitHub Actions (recommended — auto-deploys on push)

1. Push this repo to GitHub
2. Create an Azure Static Web App in the Azure Portal
3. Copy the `AZURE_SW_TOKEN` secret into your GitHub repo → Settings → Secrets
4. Push to `main` — it deploys automatically

### Option 2: CLI (one-time deploy)

```bash
npm install -g @azure/static-web-apps-cli
swa deploy
```

## Adding Blog Posts

Copy any existing `.astro` file in `src/pages/blog/` as a template. Each post has:
- A clear affiliate link (`https://partners.betterhelp.com/go/referral/carevues`)
- A CTA box at the bottom
- An affiliate disclosure

## Affiliate Programs Active

| Program | Link | Commission |
|---|---|---|
| BetterHelp | `partners.betterhelp.com/go/referral/carevues` | 40% recurring |
| Talkspace | talkspace.com/affiliate | 30% recurring |
| Eight Sleep | eightsleep.com/affiliate | $100-150/sale |

## Content Plan

See `blog-content-plan.md` for the full 10-post content calendar and SEO keyword targets.
