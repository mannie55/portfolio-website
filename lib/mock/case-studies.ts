import type { CaseStudy } from "@/types/case-study";

export const mockCaseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-redesign",
    title: "E-Commerce Platform Redesign",
    summary:
      "Led a full redesign of a legacy e-commerce platform, improving conversion by 34% and reducing checkout abandonment.",
    coverImage: "/images/case-studies/ecommerce-redesign.svg",
    role: "Lead Frontend Developer",
    client: "RetailCo",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    publishedAt: "2025-11-15T00:00:00.000Z",
    featured: true,
    body: [
      {
        type: "heading",
        level: 2,
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "RetailCo's existing storefront was built on a monolithic stack with slow page loads and a confusing checkout flow. Cart abandonment sat at 72%, and mobile traffic — over 60% of visits — converted at half the desktop rate.",
      },
      {
        type: "heading",
        level: 2,
        text: "Approach",
      },
      {
        type: "paragraph",
        text: "We rebuilt the customer-facing experience on Next.js with a component-driven design system. Key decisions included server-rendered product pages for SEO, optimistic cart updates, and a streamlined three-step checkout integrated with Stripe.",
      },
      {
        type: "list",
        items: [
          "Audited the existing funnel and identified three drop-off points",
          "Built a shared UI kit aligned with the brand refresh",
          "Implemented A/B tests on checkout before full rollout",
          "Migrated product catalog incrementally to avoid downtime",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/ecommerce-redesign.svg",
        alt: "E-commerce platform product listing page mockup",
        caption: "New product listing with improved filtering and mobile layout",
      },
      {
        type: "heading",
        level: 2,
        text: "Outcome",
      },
      {
        type: "paragraph",
        text: "Within eight weeks of launch, conversion rate increased by 34%, average page load dropped from 4.2s to 1.1s, and mobile revenue grew by 48%. The component library was adopted across two other internal products.",
      },
    ],
  },
  {
    slug: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    summary:
      "Designed and built a real-time analytics dashboard for clinic administrators to track patient flow and resource allocation.",
    coverImage: "/images/case-studies/healthcare-dashboard.svg",
    role: "Full-Stack Developer",
    client: "MedFlow",
    tools: ["React", "Node.js", "PostgreSQL", "D3.js"],
    publishedAt: "2025-08-20T00:00:00.000Z",
    featured: true,
    body: [
      {
        type: "heading",
        level: 2,
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "Clinic administrators at MedFlow relied on spreadsheets and manual reports to understand patient volume, wait times, and staff utilization. Decisions were reactive rather than data-driven.",
      },
      {
        type: "heading",
        level: 2,
        text: "Approach",
      },
      {
        type: "paragraph",
        text: "We partnered with clinic staff to map their daily workflows, then built a dashboard that surfaces the metrics they actually use — wait times by department, appointment no-show rates, and provider utilization.",
      },
      {
        type: "list",
        items: [
          "Conducted stakeholder interviews across three clinic locations",
          "Designed wireframes validated with end users before development",
          "Built real-time data pipeline from existing EHR exports",
          "Created role-based views for admins vs. department heads",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/healthcare-dashboard.svg",
        alt: "Healthcare analytics dashboard with charts and metrics",
        caption: "Main dashboard showing patient flow and department metrics",
      },
      {
        type: "heading",
        level: 2,
        text: "Outcome",
      },
      {
        type: "paragraph",
        text: "Administrators now access live data instead of waiting for weekly reports. Average patient wait time dropped 22% in the first quarter, and the dashboard is used daily across all five clinic locations.",
      },
    ],
  },
  {
    slug: "saas-onboarding",
    title: "SaaS Onboarding Experience",
    summary:
      "Reimagined the first-run experience for a B2B SaaS product, increasing trial-to-paid conversion by 28%.",
    coverImage: "/images/case-studies/saas-onboarding.svg",
    role: "Product Engineer",
    client: "FlowStack",
    tools: ["Next.js", "Framer Motion", "Prisma", "Vercel"],
    publishedAt: "2025-05-10T00:00:00.000Z",
    featured: false,
    body: [
      {
        type: "heading",
        level: 2,
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "FlowStack's trial users were dropping off before completing setup. Only 18% of sign-ups reached the 'aha moment' of creating their first workflow, and trial-to-paid conversion lagged behind industry benchmarks.",
      },
      {
        type: "heading",
        level: 2,
        text: "Approach",
      },
      {
        type: "paragraph",
        text: "We redesigned onboarding as a guided, progressive flow rather than a blank canvas. Users now pick a template, connect one integration, and run a sample workflow — all within the first five minutes.",
      },
      {
        type: "list",
        items: [
          "Mapped the activation funnel and identified the top three drop-off steps",
          "Built an interactive product tour with contextual tooltips",
          "Added template gallery with one-click setup",
          "Instrumented analytics to measure each onboarding step",
        ],
      },
      {
        type: "image",
        src: "/images/case-studies/saas-onboarding.svg",
        alt: "SaaS onboarding flow with template selection",
        caption: "New onboarding flow with template-first approach",
      },
      {
        type: "heading",
        level: 2,
        text: "Outcome",
      },
      {
        type: "paragraph",
        text: "Trial activation rate rose from 18% to 41%. Trial-to-paid conversion improved by 28%, and support tickets related to 'getting started' dropped by 60% in the first month after launch.",
      },
    ],
  },
  {
    slug: "staff-os",
    title: "HR & payroll management",
    summary:
      "Designing a high-converting marketing website for a UK-based HR, payroll, and employee management platform targeting fast-growing teams.",
    coverImage: "/images/case-studies/staffos_hero.png",
    role: "Design & development",
    industry: "HR & payroll SaaS",
    projectType: "concept project",
    client: "StaffOS",
    clientLogo: "/images/case-studies/staffos logo.svg",
    tools: ["Figma", "Webflow"],
    publishedAt: "2026-06-08T00:00:00.000Z",
    featured: true,
    metrics: [
      {
        value: "3×",
        description: "Estimated scroll depth vs. average SaaS landing page",
      },
      {
        value: "~40%",
        description: "Projected reduction in bounce rate from clearer value hierarchy",
      },
      {
        value: "5 sections",
        description: "Conversion-focused content zones with dedicated CTAs",
      },
      {
        value: "100%",
        description: "Mobile-responsive, no layout breakage across viewports",
      },
    ],
    body: [
      {
        type: "section",
        title: "Background",
        content: [
          "StaffOS is a UK-based HR, payroll, and workforce management platform designed for growing teams.",
          "The brief was to build a landing page that spoke directly to the people making the buying decision, HR managers and founders while reducing the friction that typically causes drop-off on SaaS marketing sites.",
          "The product needed to feel modern, trustworthy, and immediately legible.",
        ],
      },
      {
        type: "challenges",
        title: "The challenge",
        items: [
          {
            number: "01",
            title: "Clear value",
            description:
              "The challenge was communicating StaffOS's core value in under five words, before the visitor scrolled at all.",
          },
          {
            number: "02",
            title: "Trust gap with new visitors",
            description:
              "HR and payroll tools handle sensitive data without social proof or familiar integrations surfaced early, there's no reason to stay.",
          },
          {
            number: "03",
            title: "Ambiguous audience targeting",
            description:
              "The page needed to speak to both founders of lean startups and HR managers at mid-size companies without diluting the message for either.",
          },
          {
            number: "04",
            title: "Weak conversion architecture",
            description:
              "A single bottom-of-page CTA loses most qualified traffic. The site needed touchpoints placed to catch visitors at every level of intent.",
          },
        ],
        images: [
          "/images/case-studies/staffos_workflow_mobile.png",
          "/images/case-studies/staffos_pricing_mobile.png",
          "/images/case-studies/staffos_features_mobile.png",
        ],
      },
      {
        type: "solution",
        title: "The solution",
        items: [
          {
            id: "01",
            title: "Hero built around the pain point, not the product",
            description:
              'The headline "Manage your team without HR chaos" names the exact frustration rather than listing features. It\'s followed immediately by a personalised dashboard preview ("Hi Chris") to create a sense of ownership before sign-up — a technique borrowed from onboarding best practices.',
          },
          {
            id: "02",
            title: "Trust signals layered throughout the page",
            description:
              "Integration logos are placed directly below the hero fold, signalling ecosystem compatibility. Testimonials are structured with names, roles, and realistic quotes — not generic five-star copy. The pricing section uses transparent, side-by-side tiers with clear feature lists and no hidden caveats.",
          },
          {
            id: "03",
            title: "Dual-audience messaging via section framing",
            description:
              "Integration logos (GitHub, NASA, Google, Fedora, GitLab, Upwork) are placed directly below the hero fold, signalling ecosystem compatibility. Testimonials are structured with names, roles, and realistic quotes — not generic five-star copy. The pricing section uses transparent, side-by-side tiers with clear feature lists and no hidden caveats.",
          },
          {
            id: "04",
            title: "Multi-touchpoint CTA architecture",
            description:
              'CTAs are placed at the hero, mid-page ("Scale outlines"), feature section, pricing table, and a final full-width conversion banner — each adapted to the visitor\'s likely intent at that scroll depth. Free trial framing reduces commitment anxiety throughout.',
          },
        ],
        gallery: {
          top: [
            {
              src: "/images/case-studies/staffos_testimonials.png",
              alt: "Staffos testimonials",
            },
            {
              src: "/images/case-studies/staffos_features_desktop.png",
              alt: "Staffos features",
            },
          ],
          bottom: [
            {
              src: "/images/case-studies/staffos_faq.png",
              alt: "Staffos FAQ",
            },
            {
              src: "/images/case-studies/staffos_email_capture.png",
              alt: "Staffos email capture",
            },
          ],
        },
        quote: {
          text: "Every design decision ties back to one thing making HR feel fast, not frustrating.",
          author: "Nnamdi",
          role: "Fullstack developer",
        },
      },
      {
        type: "outcomes",
        title: "Key outcomes",
        items: [
          {
            id: "outcome-1",
            title: "Clear, scannable value hierarchy",
            description:
              "A visitor can understand what StaffOS does, who it's for, how it works, what it costs, and what others think all without scrolling back up.",
            icon: "/images/components/check_icon.svg",
            iconAlt: "Value hierarchy icon",
            iconWrapper: false,
          },
          {
            id: "outcome-2",
            title: "Pricing transparency as a conversion lever",
            description:
              'The side-by-side Free vs Pro layout with concrete feature lists removes the "contact us for pricing" drop-off that plagues most B2B SaaS pages.',
            icon: "/images/components/check_icon.svg",
            iconAlt: "Pricing transparency icon",
            iconWrapper: false,
          },
          {
            id: "outcome-3",
            title: "FAQ section designed to handle objections in-page",
            description:
              'The "Everything you need to know about StaffOS" accordion reduces support burden and pre-qualifies leads before they hit the CTA.',
            icon: "/images/components/check_icon.svg",
            iconAlt: "FAQ section icon",
            iconWrapper: false,
          },
          {
            id: "outcome-4",
            title: "Fully responsive layout",
            description:
              "Every section adapts cleanly across mobile, tablet, and desktop without content reflow or broken grids.",
            icon: "/images/components/check_icon.svg",
            iconAlt: "Check icon",
            iconWrapper: false,
          },
        ],
      },
      {
        type: "tech-stack",
        title: "Technology stack",
        items: [
          "Webflow",
          "Figma",
          "Responsive design",
          "CRO principles",
          "SaaS landing pages",
        ],
      },
    ],
  },
];
