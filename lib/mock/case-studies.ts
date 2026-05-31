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
];
