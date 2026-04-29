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

## Component Structure

- `app/page.tsx` composes the landing page by rendering section components in sequence.
- `components/sections/` contains the main page sections such as hero, stats, edge, testimonials, lead form, and footer-adjacent content.
- `components/` contains shared UI pieces like the header, footer, section heading, and partner logo renderer.
- `data/site.ts` stores the structured content used across the page so the components remain focused on layout and presentation.

This structure made it easier to iterate section by section, keep the code readable, and adjust content or layout without rewriting large files.

## API Integration

The project includes a mock API integration:

- Frontend form: `components/sections/lead-section.tsx`
- API route: `app/api/lead/route.ts`

The current API:

- accepts a `POST` request
- validates `name`, `email`, and `company`
- returns success/error JSON
- does not persist data permanently

## Explanation

Manual improvements made:

- section and component organization
- section-by-section visual tuning to better match the reference
- responsive alignment fixes and spacing cleanup
- card, footer, testimonial, and stats layout refinements
- local illustration wiring for segmentation cards
- mock API behavior and README polish

Most of the meaningful work still came from manual implementation and iteration. I treated AI output as a starting point, then adjusted the code myself until the layout, responsiveness, and styling behaved the way I wanted.

## Challenges Faced

- Matching the layout closely to the reference while still keeping the code reusable and responsive.
- Fine-tuning sections like the stats area, edge timeline, testimonials, and footer so they looked visually balanced across different screen sizes.
- Handling iterative UI fixes where a layout looked reasonable in code but needed manual browser-side adjustments to feel correct.
- Resolving dev-runtime and cached build issues during rapid iteration.


## Features Implemented

- Lead capture form
- Mock API integration through Next.js route handlers
- Responsive layout optimization across sections
- Basic SEO through Next.js metadata
- Interactive UI elements such as sticky navigation, section linking, and polished CTA/footer presentation

## screenshot