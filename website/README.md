# Shopno Chitra — Website

Official website for Shopno Chitra, a wedding photography studio based in Mohammadpur, Dhaka.

Captured with heart — wedding, ceremony and couple photography across Bangladesh and beyond.

## Stack

- Static HTML pages (Webflow-exported design system) in `index.html` and `public/pages/`
- Express + Vite dev/production server (`server.ts`) for routing and inquiry handling

## Scripts

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at http://localhost:8080 |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run start` | Run the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |

## Pages & routes

| Route | File |
| --- | --- |
| `/` | `index.html` |
| `/packages` | `public/pages/packages.html` |
| `/contact` | `public/pages/contact.html` |
| `/privacy` | `public/pages/privacy.html` |
| `/terms` | `public/pages/terms.html` |
| `/coming-soon` | `public/pages/coming-soon.html` |

`public/sitemap.xml` and `public/robots.txt` are served as static files. Update the domain
in these files (and the canonical/og URLs) if the production domain changes.

## Booking form

The "Book a call" form on all pages posts JSON to `/api/book-a-call`. Inquiries are appended
to `data/inquiries.jsonl` (git-ignored) and logged to the server console. `/api/contact`
is an alias endpoint.

## Contact

- Email: shopnochitra@gmail.com
- Phone / WhatsApp: +880 1830-711094
- Studio: Mohammadpur, Dhaka, Bangladesh

---

Designed & developed by [R M Abir](https://rmabir71.vercel.app/)
