# Accredian Enterprise Landing Page

A responsive partial clone of the Accredian Enterprise website built with Next.js App Router, Tailwind CSS, reusable components, and a mock API route for lead capture.

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript
- Lucide React

## Features

- Multi-section landing page inspired by the Accredian Enterprise reference
- Sticky navigation with section-based scrolling
- Responsive desktop and mobile layout
- Reusable data-driven components
- Partner logo strip, testimonials, CTA banner, and footer
- Mock lead form submission via Next.js API route

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

4. Create a production build:

```bash
npm run build
```

## Project Structure

```text
app/
  api/lead/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  footer.tsx
  header.tsx
  partner-logo.tsx
  section-heading.tsx
  sections/
data/
  site.ts
public/
  images/segments/
```

## Approach Taken

- Broke the page into reusable sections instead of building everything inside one large page component.
- Centralized most section content in `data/site.ts` so text, metrics, cards, and footer content are easy to update.
- Recreated the key reference sections with a focus on layout clarity, responsiveness, and maintainable code structure.
- Added a mock API integration for the enquiry form so the submission requirement is covered even without a database.

## API Integration

The project includes a mock API integration:

- Frontend form: [components/sections/lead-section.tsx](/d:/coding/DSA/internship/Accredian/components/sections/lead-section.tsx)
- API route: [app/api/lead/route.ts](/d:/coding/DSA/internship/Accredian/app/api/lead/route.ts)

The current API:

- accepts a `POST` request
- validates `name`, `email`, and `company`
- returns success/error JSON
- does not persist data permanently

## AI Usage Explanation

AI helped with:

- planning the page structure and implementation flow
- generating an initial component scaffold
- refining some copy and layout ideas
- accelerating iterative UI adjustments while matching the reference

Manual improvements made:

- section-by-section visual tuning to better match the reference
- responsive alignment fixes and spacing cleanup
- card, footer, testimonial, and stats layout refinements
- local illustration wiring for segmentation cards
- mock API behavior and README polish

## Improvements With More Time

- connect the lead form to a real database or CRM
- add stronger accessibility testing and keyboard-state polish
- replace simplified illustrations with production-quality brand assets
- add animation/motion polish where it improves the experience
- tighten section-by-section visual matching even further

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Let Vercel detect the app as a Next.js project.
4. Deploy with the default build settings.

No environment variables are required for the current mock API version.

## Verification

The project has been verified with:

```bash
npm run lint
npm run build
```
