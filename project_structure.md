portfolio/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, global shell)
│   ├── page.tsx                # Homepage (/)
│   ├── about/
│   │   └── page.tsx            # About (/about)
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies index (/case-studies)
│   │   └── [slug]/
│   │       └── page.tsx        # Individual case study (/case-studies/my-project)
│   ├── contact/
│   │   └── page.tsx            # Contact (/contact)
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Site nav
│   │   ├── footer.tsx
│   │   └── page-container.tsx  # Shared max-width / padding wrapper
│   ├── home/
│   │   ├── hero.tsx
│   │   └── featured-work.tsx
│   ├── about/
│   │   └── ...
│   ├── case-studies/
│   │   ├── case-study-card.tsx
│   │   └── case-study-grid.tsx
│   └── ui/                     # Reusable primitives (button, link, etc.)
│
├── content/
│   └── case-studies/
│       ├── project-one.mdx     # Or .md / .json — one file per study
│       └── project-two.mdx
│
├── lib/
│   ├── case-studies.ts         # Load + sort case study data
│   └── constants.ts            # Nav links, site metadata, social URLs
│
├── types/
│   └── case-study.ts           # Shared TypeScript types
│
└── public/
    └── images/
        └── case-studies/

How the routing maps to your pages
Page	Route	File
Homepage
/
app/page.tsx
About
/about
app/about/page.tsx
Case studies (list)
/case-studies
app/case-studies/page.tsx
Single case study
/case-studies/[slug]
app/case-studies/[slug]/page.tsx
Contact
/contact
app/contact/page.tsx
In the App Router, each folder under app/ is a route segment, and page.tsx is what renders for that URL.

Key architectural decisions
1. Shared layout vs. per-page layout
Put Header and Footer in the root app/layout.tsx so they appear on every page:

// app/layout.tsx (conceptual)
<body>
  <Header />
  <main>{children}</main>
  <Footer />
</body>
Keep page-specific sections (hero, about bio, contact form) in each route's page.tsx or in components/home/, components/about/, etc.

2. Case studies: index + detail pages
You'll almost certainly want two routes:

/case-studies — grid/list of all projects
/case-studies/[slug] — full write-up for one project
Store the content in content/case-studies/ and use a small loader in lib/case-studies.ts to read files and expose getAllCaseStudies() and getCaseStudyBySlug(slug).

That keeps pages thin:

// app/case-studies/page.tsx — fetches list, renders grid
// app/case-studies/[slug]/page.tsx — fetches one study by slug
3. Content format
For a portfolio, three common options:

Approach	Best when
MDX/Markdown files
You want to write case studies like blog posts
JSON/TS objects
Content is structured (title, role, tools, images)
CMS (Sanity, Contentful)
You want to edit content without touching code
For a personal portfolio, MDX or typed JSON in content/ is usually the sweet spot — simple, version-controlled, no external dependency.

4. Component organization
Group by feature/page, not by type:

components/home/hero.tsx — not components/sections/hero.tsx
components/ui/ — only for truly reusable pieces (Button, SectionHeading)
That makes it obvious where things live as the site grows.

5. Constants and nav
Centralize nav links in one place so Header and Footer stay in sync:

// lib/constants.ts
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
] as const;
What to build first (order of operations)
Routing skeleton — create the four page.tsx files with placeholder content
Layout shell — Header, Footer, PageContainer
Constants — nav links, site metadata (update app/layout.tsx metadata)
Case study data layer — types + one sample case study + dynamic route
Page-by-page UI — homepage first, then about, case studies, contact
What you can skip for now
app/(marketing)/ route groups — useful later if you add a blog or admin area, not needed yet
src/ directory — optional; your project already uses root-level app/, which is fine
Heavy abstractions — no need for a features/ or modules/ layer on a four-page site
Minimal starting point
If you want the smallest useful structure before designing anything:

app/
  layout.tsx
  page.tsx
  about/page.tsx
  case-studies/page.tsx
  case-studies/[slug]/page.tsx
  contact/page.tsx
components/layout/
  header.tsx
  footer.tsx
lib/constants.ts
That gives you all four pages, shared navigation, and room for case study detail pages without over-engineering.