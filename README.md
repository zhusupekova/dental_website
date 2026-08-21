# Bishkek Clinic Website Template

Modern responsive website template for a private dentistry clinic or a multi-specialty private clinic in Bishkek.

Live demo:
https://bishkek-dental-clinic-template.salamatovnasezim3.chatgpt.site

GitHub Pages:
https://zhusupekova.github.io/dental_website/

## What Is Included

- Landing page with hero, services, doctors, first-visit flow, reviews, prices, FAQ, contacts, map, and appointment form.
- Service detail pages: `/services/[slug]`.
- Doctor detail pages: `/doctors/[slug]`.
- Static pages: `/about`, `/prices`, `/contacts`.
- Sticky mobile action bar for WhatsApp, phone call, and appointment request.
- Local SEO content for Bishkek, district, address, working hours, and services.
- Schema.org markup for `MedicalClinic`, `Dentist`, `LocalBusiness`, and FAQ.
- Open Graph image for link previews.

## Tech Stack

- Vinext / React
- TypeScript
- Tailwind CSS runtime with custom CSS design system
- `lucide-react` icons

## Requirements

- Node.js `>=22.13.0`

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Editing Clinic Data

Most template content is centralized in:

```text
app/content.ts
```

Change these values first:

- `clinic`: clinic name, logo text, address, phone, WhatsApp, Instagram, map.
- `photos`: hero, reception, equipment, doctor, and patient images.
- `services`: service cards, service slugs, descriptions, and prices.
- `doctors`: doctor profiles, photos, experience, education, and specializations.
- `reviews`: review cards.
- `prices`: popular service prices.
- `faqs`: FAQ content and FAQ schema source.

## Important Files

```text
app/page.tsx
app/components.tsx
app/watermelon-enhancements.tsx
app/globals.css
app/services/[slug]/page.tsx
app/doctors/[slug]/page.tsx
app/about/page.tsx
app/prices/page.tsx
app/contacts/page.tsx
```

## Design Notes

The design is calm, medical, trustworthy, and mobile-first. It avoids aggressive sales banners, excessive animation, and heavy medical jargon.
