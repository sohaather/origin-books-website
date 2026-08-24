# Origin Books Publishing — Website (Frontend)

A premium, editorial marketing website for Origin Books Publishing, built with
Vite, React, TypeScript, Tailwind CSS, React Router, and a React Three Fiber
3D book hero. **This is frontend only** — no backend, database, CRM, or
authentication is included yet.

## Running it locally

1. Install [Node.js](https://nodejs.org/) (v18 or newer).
2. Open this folder in VS Code (or any editor).
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the local dev server:

   ```bash
   npm run dev
   ```

5. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This creates a `dist/` folder with the production-ready static site.
Preview the production build locally with:

```bash
npm run preview
```

## Deploying

- **GitHub**: push this folder to a new repository.
- **Vercel**: import the GitHub repository into Vercel. It will detect Vite
  automatically. A `vercel.json` is included so client-side routes (like
  `/services` or `/blogs/some-post`) work correctly on refresh and direct
  visits.

## Project structure

```
src/
  content/       Centralized site data (business info, nav, services, FAQ, etc.)
  components/    Shared UI (Navbar, Footer, Layout, Reveal, SEO, 3D book)
  pages/         One file per route (Home, Services, Portfolio, About, Contact...)
  App.tsx        Route definitions
  main.tsx       App entry point
```

To update your phone number, business name, or other core details, edit:

```
src/content/business.ts
```

## What's intentionally missing (for now)

- Privacy Policy and Terms & Conditions content — pages exist at
  `/privacy-policy` and `/terms-and-conditions` with a "content pending"
  placeholder, ready for real legal text.
- Blog articles — `/blogs` and `/blogs/:slug` are fully built, but the three
  posts in `src/content/blogs.ts` are clearly-marked placeholders.
- Portfolio projects — `/portfolio` is fully built, but the six items in
  `src/content/portfolio.ts` are clearly-marked placeholders (no invented
  clients, sales, or awards).
- Testimonials — the homepage testimonials section will show a "coming soon"
  message until real, author-supplied quotes are added to
  `src/content/testimonials.ts`.
- CRM, backend, database, authentication, admin dashboard, and WhatsApp
  integration — intentionally out of scope for this stage.

## Notes on the 3D book

The hero section's 3D book is built with `@react-three/fiber` and `three`
using simple geometric shapes (no external 3D model files), styled with a
navy board and a brass foil title plate. It rotates slowly and tilts gently
with the mouse. On mobile devices and whenever a visitor has "reduce motion"
enabled in their OS settings, it's replaced with a lightweight static CSS
illustration instead, for performance and accessibility.
