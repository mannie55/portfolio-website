import type { CaseStudy } from "@/types/case-study";

export const mockCaseStudies: CaseStudy[] = [
  {
    slug: "staff-os",
    title: "HR & payroll management",
    summary:
      "Designing a high-converting marketing website for a UK-based HR, payroll, and employee management platform targeting fast-growing teams.",
    coverImage: "/images/case-studies/staffos_hero.png",
    supportingImage: "/images/case-studies/staffos_pricing.png",
    breadcrumbLabel: "Case study — landing page",
    role: "Design & development",
    industry: "HR & payroll SaaS",
    projectType: "concept project",
    client: "StaffOS",
    projectName: "StaffOS",
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
