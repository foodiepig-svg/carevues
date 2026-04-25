# carevues.com.au — Content & Deployment Plan

## Part 1: Content Calendar (Mental Health + Sleep Affiliate Blog)

### Niche Strategy
**"Better mental health & better sleep — for Australians"**
High commission affiliate programs, evergreen demand, strong intent-based search traffic in Australia.

---

### Affiliate Programs to Join (Apply Now — Approval Takes 1-7 Days)

| Program | Commission | Cookie | Why |
|---|---|---|---|
| **BetterHelp** | 40% recurring | 90 days | Australia's biggest therapy search |
| **Talkspace** | 30% recurring | 30 days | Lower barrier, broad appeal |
| **Eight Sleep** | $100-150/sale | 30 days | Premium, high ticket |
| **Withings** | 10% + 2% recurring | 30 days | Health monitors, trackers |
| **Noom** | 30% recurring | 30 days | Massive weight loss audience |
| **Sleep Number** | 8-12% | 30 days | Mattress + sleep tech |

---

### First 10 Blog Posts

#### Month 1 (Launch Posts)

**1. "BetterHelp Australia 2025 — Full Honest Review"**
- Target kw: `betterhelp australia`
- Affiliate link: BetterHelp (40% recurring)
- Angle: Honest review, price breakdown, how it works, who it's for
- CTA: "Start therapy today — [affiliate link]"

**2. "Is BetterHelp Legit? What 1,000+ Australian Reviews Say"**
- Target kw: `betterhelp review australia`
- Same affiliate link
- Angle: Trust-building, address the skepticism, before/after

**3. "Best Online Therapy Platforms in Australia (2025 Ranking)"**
- Target kw: `online therapy australia`, `online therapist australia`
- Compare: BetterHelp, Talkspace, Reclaim (AU-specific)
- Multiple affiliate links, capture all comparison traffic

**4. "How Much Does BetterHelp Cost in Australia? (2025 Pricing)"**
- Target kw: `betterhelp price australia`, `betterhelp cost`
- Affiliate link: BetterHelp
- Angle: Transparent pricing, discount codes if any, value for money

---

#### Month 2 (Sleep Category Expansion)

**5. "Eight Sleep Review 2025 — Does the Pod Actually Work?"**
- Target kw: `eight sleep review`, `eight sleep australia`
- Affiliate link: Eight Sleep ($100-150/sale)
- Angle: Tech-heavy review, who it's for, is it worth the price

**6. "Best Sleep Tracking Devices 2025 — Tested & Ranked"**
- Target kw: `best sleep tracker`, `sleep tracking device`
- Affiliate links: Withings, Oura, Apple Watch (via Amazon)
- Multiple products = multiple affiliate commissions

**7. "Withings Sleep Tracking Mat Review — The Budget Eight Sleep?"**
- Target kw: `withings sleep mat review`, `sleep mat australia`
- Affiliate link: Withings (10% + recurring)

---

#### Month 3 (Top of Funnel — Awareness)

**8. "Why Am I Always Tired? 12 Causes No One Talks About"**
- Target kw: `why am i always tired`, `chronic fatigue australia`
- Soft affiliate links: supplements, sleep aids, health monitors
- No hard sell — trust building, then retarget

**9. "Noom vs Weight Watchers 2025 — Which Actually Works?"**
- Target kw: `noom review australia`, `weight watchers australia`
- Affiliate link: Noom (30% recurring)
- Wide audience, high search volume

**10. "Online Mental Health Services in Australia — Free vs Paid"**
- Target kw: `free mental health support australia`, `online mental health australia`
- Affiliate links: BetterHelp, free government resources listed first
- Trust-building pillar post

---

### SEO Keywords to Target (Long-tail, Low Competition)

```
betterhelp australia review
is betterhelp worth it
how does betterhelp work australia
betterhelp vs talkspace
online therapy free australia
best sleep tracker for couples
eight sleep australia price
sleep tracking mat australia
mental health apps australia
noom australia cost
withings sleep vs eight sleep
natural sleep aids that work
anxiety self-help apps
```

---

## Part 2: Azure Deployment Plan

### Recommended Architecture: Azure Static Web Apps + Static Site

**Why Static Web Apps:**
- Free tier: 100GB bandwidth/month, custom domain, SSL, CDN
- Zero maintenance, scales automatically
- Perfect for a content blog — read-heavy, minimal dynamic needs
- $0 with Azure credits

**Stack:**
- **Frontend:** Astro (fast, SEO-friendly, easy affiliate link management)
- **Hosting:** Azure Static Web Apps (Free tier)
- **CMS:** Built-in Astro content (markdown files — no database needed)
- **Domain:** carevues.com.au → Azure Static Web Apps custom domain

---

### Azure Deployment Steps

#### Step 1: Create Astro Blog Locally

```bash
# Install Node.js first if not present
node --version  # needs v18+

# Create Astro blog
npm create astro@latest carevues -- --template minimal
cd carevues

# Add affiliate link helper (plain HTML anchors)
npm run dev  # test locally
```

#### Step 2: Add Content (10 Blog Posts)

Each post is a markdown file in `src/content/blog/`:
```
src/content/blog/betterhelp-australia-review.md
src/content/blog/best-online-therapy-australia.md
... etc
```

#### Step 3: Deploy to Azure Static Web Apps

```bash
# Install Azure SWA CLI
npm install -g @azure/static-web-apps-cli

# Login
az login

# Deploy
swa deploy
```

Or use GitHub Actions (recommended — auto-deploy on push):

```yaml
# .github/workflows/azure-static-web-apps.yml
name: Deploy to Azure Static Web Apps

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Azure Static Web Apps
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_SW_TOKEN }}
          app_location: "/"
          output_location: "/dist"
```

#### Step 4: Connect Custom Domain

In Azure Portal → Static Web Apps → Custom Domains:
1. Add `carevues.com.au`
2. Add DNS `CNAME` record at your domain registrar
3. SSL is auto-provisioned

---

### Estimated Azure Cost (with credits)

| Resource | Tier | Cost |
|---|---|---|
| Azure Static Web Apps | Free | $0 |
| Domain (optional) | .com.au ~$20/yr | ~$1.67/mo |
| **Total** | | **~$1.67/month** |

---

## Part 3: Revenue Projection

| Month | Est. Traffic | Est. Clicks | Est. Conversions | Est. Revenue |
|---|---|---|---|---|
| 1 | 100 visits | 10 | 0-1 | $0-40 |
| 3 | 500 visits | 50 | 2-3 | $80-150 |
| 6 | 2,000 visits | 200 | 8-12 | $320-600 |
| 12 | 5,000+ visits | 500+ | 20-30 | $800-1,500/mo |

Affiliate revenue compounds — content written once keeps earning.

---

## Part 4: Immediate Action Items

**Today:**
1. Apply to BetterHelp affiliate program → https://partners.betterhelp.com
2. Apply to Withings affiliate → https://withings.com/affiliate
3. Apply to Eight Sleep → https://eightsleep.com/affiliate

**This Week:**
4. Create Astro blog scaffold
5. Write first 3 blog posts (posts 1-3 above)
6. Deploy to Azure Static Web Apps (free tier)
7. Connect carevues.com.au domain

**Next Week:**
8. Write posts 4-7
9. Submit sitemap to Google Search Console
10. Set up analytics (Azure Monitor or free Plausible)

---

*Plan created: 2025-04-26*
