# Pro Healthy — Digital Design Portfolio

A premium, conversion-optimized portfolio website for Pro Healthy digital design studio.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion
- **Deployment**: Vercel (recommended) / Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push repository to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Deploy — zero config required for Next.js

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

Or use the included `netlify.toml` — it configures everything automatically.

## Environment Variables

No environment variables required for the base portfolio.

To add a real contact form backend, create a `.env.local` file:

```
CONTACT_FORM_ENDPOINT=your_endpoint_here
```

## Project Structure

```
src/
  app/              # Next.js App Router (layout, page, globals.css)
  components/
    ui/             # Reusable primitives: Button, Badge, Card, Icon, SectionHeader, ScrollToTop
    sections/       # Page sections: Nav, Hero, SocialProofBar, Services, Portfolio,
                    #   About, Process, Testimonials, CallToAction, Contact, Footer
  data/             # Content: meta.js, projects.js, services.js, testimonials.js, process.js
public/
  images/           # Static assets (add og-cover.jpg, project images here)
  fonts/            # Custom fonts if self-hosting
```

## Customization

All content lives in `src/data/` — update those files to personalize the site without touching component code.

| File | What it controls |
|---|---|
| `meta.js` | Site name, email, WhatsApp, social links |
| `projects.js` | Portfolio case studies |
| `services.js` | Service offerings |
| `testimonials.js` | Client testimonials |
| `process.js` | How-we-work steps |

Design tokens (colors, fonts, radii) are all in `tailwind.config.js`.
