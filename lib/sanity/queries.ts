import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityClient } from "@/lib/sanity/client";
import type { CaseStudy, CaseStudyBlock } from "@/types/case-study";

const builder = createImageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
  return builder.image(source).width(1200).url();
}

type SanityCaseStudy = {
  slug: string;
  title: string;
  publishedAt: string;
  featured?: boolean;
  showcaseImage?: SanityImageSource;
  projectOverview?: {
    clientLogo?: SanityImageSource & { alt?: string };
    projectName?: string;
    summaryHeadline?: string;
    summaryDescription?: string;
    company?: string;
    industry?: string;
    myRole?: string;
    stack?: string;
    projectType?: string;
    stats?: { value: string; label: string }[];
    heroImages?: { image: SanityImageSource; alt?: string }[];
  };
  backgroundSection?: {
    body?: any[];
  };
  challengesSection?: {
    challenges?: { title: string; description: string }[];
    screenshots?: { image: SanityImageSource; alt?: string }[];
  };
  solutionSection?: {
    solutionPoints?: { title: string; description: string }[];
    solutionImages?: { image: SanityImageSource; alt?: string }[];
    quote?: {
      quoteText: string;
      attribution?: string;
    };
  };
  keyOutcomesSection?: {
    outcomes?: { title: string; description: string }[];
  };
  techStackSection?: {
    stackItems?: { label: string }[];
  };
};

const caseStudyFields = `
  "slug": slug.current,
  title,
  publishedAt,
  featured,
  showcaseImage,
  projectOverview {
    clientLogo,
    projectName,
    summaryHeadline,
    summaryDescription,
    company,
    industry,
    myRole,
    stack,
    projectType,
    stats,
    heroImages
  },
  backgroundSection {
    body
  },
  challengesSection {
    challenges,
    screenshots
  },
  solutionSection {
    solutionPoints,
    solutionImages,
    quote
  },
  keyOutcomesSection {
    outcomes
  },
  techStackSection {
    stackItems
  }
`;

export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(publishedAt desc) { ${caseStudyFields} }`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] { ${caseStudyFields} }`;

function mapSanityCaseStudy(doc: SanityCaseStudy): CaseStudy {
  const overview = doc.projectOverview;
  
  // 1. Resolve basic metadata
  const summaryHeadline = overview?.summaryHeadline ?? doc.title ?? "";
  const summaryDescription = overview?.summaryDescription ?? "";
  
  // Showcase Image and Cover Image
  const showcaseImage = doc.showcaseImage ? urlFor(doc.showcaseImage) : undefined;
  const firstHeroImage = overview?.heroImages?.[0]?.image;
  const coverImage = firstHeroImage ? urlFor(firstHeroImage) : "";
  
  const clientLogo = overview?.clientLogo ? urlFor(overview?.clientLogo) : undefined;
  const client = overview?.company;
  const projectName = overview?.projectName;
  const industry = overview?.industry;
  const role = overview?.myRole;
  const projectType = overview?.projectType;
  
  // 2. Resolve tools (from tech stack)
  const tools = doc.techStackSection?.stackItems?.map((item) => item.label) ?? [];
  
  // 3. Resolve metrics
  const metrics = overview?.stats?.map((stat) => ({
    value: stat.value,
    description: stat.label,
  })) ?? [];
  
  // 4. Resolve body blocks sequentially
  const body: CaseStudyBlock[] = [];
  
  // Section 2: Background
  if (doc.backgroundSection?.body && doc.backgroundSection.body.length > 0) {
    const paragraphs = doc.backgroundSection.body
      .map((block: any) => {
        if (block._type !== "block") return "";
        return block.children?.map((c: any) => c.text).join("").trim() ?? "";
      })
      .filter(Boolean);
    
    body.push({
      type: "section",
      title: "Background",
      content: paragraphs,
    });
  }
  
  // Section 3: Challenges
  if (doc.challengesSection?.challenges && doc.challengesSection.challenges.length > 0) {
    body.push({
      type: "challenges",
      title: "The challenge",
      items: doc.challengesSection.challenges.map((challenge, index) => ({
        number: (index + 1).toString().padStart(2, "0"),
        title: challenge.title,
        description: challenge.description,
      })),
      images: doc.challengesSection.screenshots?.map((shot) => urlFor(shot.image)) ?? [],
    });
  }
  
  // Section 4: Solution
  if (doc.solutionSection?.solutionPoints && doc.solutionSection.solutionPoints.length > 0) {
    const images = doc.solutionSection.solutionImages?.map((img) => ({
      src: urlFor(img.image),
      alt: img.alt ?? "Solution image",
    })) ?? [];
    
    // Frontend grid expects split gallery top (2 items) and bottom (remaining items)
    const topGallery = images.slice(0, 2);
    const bottomGallery = images.slice(2);
    
    body.push({
      type: "solution",
      title: "The solution",
      items: doc.solutionSection.solutionPoints.map((point, index) => ({
        id: (index + 1).toString().padStart(2, "0"),
        title: point.title,
        description: point.description,
      })),
      gallery: {
        top: topGallery,
        bottom: bottomGallery,
      },
      quote: {
        text: doc.solutionSection.quote?.quoteText ?? "",
        author: doc.solutionSection.quote?.attribution ?? "Client",
        role: "",
      },
    });
  }
  
  // Section 5: Key Outcomes
  if (doc.keyOutcomesSection?.outcomes && doc.keyOutcomesSection.outcomes.length > 0) {
    body.push({
      type: "outcomes",
      title: "Key outcomes",
      items: doc.keyOutcomesSection.outcomes.map((outcome, index) => ({
        id: `outcome-${index + 1}`,
        title: outcome.title,
        description: outcome.description,
        icon: "/images/components/check_icon.svg",
        iconAlt: "Check icon",
        iconWrapper: false,
      })),
    });
  }
  
  // Section 6: Technology Stack
  if (doc.techStackSection?.stackItems && doc.techStackSection.stackItems.length > 0) {
    body.push({
      type: "tech-stack",
      title: "Technology stack",
      items: doc.techStackSection.stackItems.map((item) => item.label),
    });
  }
  
  return {
    slug: doc.slug,
    title: summaryHeadline,
    summary: summaryDescription,
    coverImage,
    showcaseImage,
    role: role ?? "",
    industry,
    projectType,
    client,
    clientLogo,
    projectName,
    tools,
    publishedAt: doc.publishedAt,
    featured: doc.featured ?? false,
    metrics,
    body,
  };
}

export async function getCaseStudiesFromSanity(): Promise<CaseStudy[]> {
  const docs = await sanityClient.fetch<SanityCaseStudy[]>(allCaseStudiesQuery);
  return docs.map(mapSanityCaseStudy);
}

export async function getCaseStudyFromSanityBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  const doc = await sanityClient.fetch<SanityCaseStudy | null>(
    caseStudyBySlugQuery,
    { slug },
  );
  return doc ? mapSanityCaseStudy(doc) : null;
}
