# Accredian Enterprise Clone

A responsive partial clone of the Accredian Enterprise landing page built with Next.js App Router and Tailwind CSS.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

4. Create a production build:

```bash
npm run build
```

## Approach

- Built the page as a collection of reusable sections and shared data models instead of hardcoding everything in one page file.
- Used App Router with a clean component structure and a small mock API route for the optional lead capture form.
- Focused on matching the overall layout, hierarchy, and feel of the reference while keeping the UI polished and responsive.

## AI Usage

AI helped with:

- Structuring the initial implementation plan
- Drafting section content and refining layout patterns
- Generating a first pass of component scaffolding and responsive styling ideas

Manually improved:

- Final component organization and section breakdown
- Layout tuning, spacing, and visual hierarchy choices
- Copy cleanup, responsiveness adjustments, and API form behavior
- README structure and submission-oriented documentation

## Improvements With More Time

- Add richer motion and scroll-linked interactions
- Replace placeholder visuals with brand-aligned assets closer to the original page
- Add persistence for lead submissions using a real database or backend
- Expand accessibility testing and add end-to-end coverage

## Submission Notes

- Framework: Next.js App Router
- Styling: Tailwind CSS
- Bonus: lead capture form via Next.js API route
- Ready to deploy on Vercel as a standard Next.js project
