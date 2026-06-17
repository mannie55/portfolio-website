import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { sanityClient } from "@/lib/sanity/client";
import type { CaseStudy, CaseStudyBlock } from "@/types/case-study";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
  return builder.image(source).width(1200).url();
}

type SanityCaseStudy = {
  slug: string;
  title: string;
  summary: string;
  coverImage: SanityImageSource;
  role: string;
  industry?: string;
  projectType?: string;
  client?: string;
  clientLogo?: SanityImageSource;
  tools?: string[];
  publishedAt: string;
  featured?: boolean;
  metrics?: { value: string; description: string }[];
  body?: SanityPortableTextBlock[];
};

type SanityPortableTextBlock = {
  _type: string;
  _key: string;
  style?: string;
  listItem?: string;
  children?: { _type: string; text: string }[];
  asset?: SanityImageSource;
  caption?: string;
  // Section block properties
  title?: string;
  content?: string[];
  // Challenges block properties
  items?: any[];
  images?: SanityImageSource[];
  bottomImage?: SanityImageSource;
  // Solution block properties
  collageImage?: SanityImageSource;
  gallery?: {
    top?: { asset: SanityImageSource; alt?: string }[];
    bottom?: { asset: SanityImageSource; alt?: string }[];
  };
  quote?: {
    text: string;
    author: string;
    role: string;
  };
};

const caseStudyFields = `
  "slug": slug.current,
  title,
  summary,
  coverImage,
  role,
  industry,
  projectType,
  client,
  clientLogo,
  tools,
  publishedAt,
  featured,
  metrics,
  body
`;

export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(publishedAt desc) { ${caseStudyFields} }`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] { ${caseStudyFields} }`;

function portableTextToBlocks(
  blocks: SanityPortableTextBlock[] = [],
): CaseStudyBlock[] {
  const result: CaseStudyBlock[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      result.push({ type: "list", items: [...listItems] });
      listItems = [];
    }
  };

  for (const block of blocks) {
    // 1. Standalone image block
    if (block._type === "image" && block.asset) {
      flushList();
      result.push({
        type: "image",
        src: urlFor(block.asset),
        alt: block.caption ?? "Case study image",
        caption: block.caption,
      });
      continue;
    }

    // 2. Custom block: Section
    if (block._type === "sectionBlock") {
      flushList();
      result.push({
        type: "section",
        title: block.title ?? "",
        content: block.content ?? [],
      });
      continue;
    }

    // 3. Custom block: Challenges
    if (block._type === "challengesBlock") {
      flushList();
      result.push({
        type: "challenges",
        title: block.title ?? "",
        items: (block.items ?? []).map((item: any) => ({
          number: item.number ?? "",
          title: item.title ?? "",
          description: item.description ?? "",
        })),
        images: (block.images ?? []).map((img: any) => urlFor(img)),
        bottomImage: block.bottomImage ? urlFor(block.bottomImage) : undefined,
      });
      continue;
    }

    // 4. Custom block: Solution
    if (block._type === "solutionBlock") {
      flushList();
      result.push({
        type: "solution",
        title: block.title ?? "",
        items: (block.items ?? []).map((item: any) => ({
          id: item.id ?? "",
          title: item.title ?? "",
          description: item.description ?? "",
        })),
        collageImage: block.collageImage ? urlFor(block.collageImage) : undefined,
        gallery: {
          top: (block.gallery?.top ?? []).map((img: any) => ({
            src: urlFor(img),
            alt: img.alt ?? "Gallery image",
          })),
          bottom: (block.gallery?.bottom ?? []).map((img: any) => ({
            src: urlFor(img),
            alt: img.alt ?? "Gallery image",
          })),
        },
        quote: {
          text: block.quote?.text ?? "",
          author: block.quote?.author ?? "",
          role: block.quote?.role ?? "",
        },
      });
      continue;
    }

    // 5. Custom block: Outcomes
    if (block._type === "outcomesBlock") {
      flushList();
      result.push({
        type: "outcomes",
        title: block.title ?? "",
        items: (block.items ?? []).map((item: any) => ({
          id: item.id ?? "",
          title: item.title ?? "",
          description: item.description ?? "",
          icon: urlFor(item.icon),
          iconAlt: item.iconAlt ?? "Outcome icon",
          iconWrapper: item.iconWrapper ?? false,
        })),
      });
      continue;
    }

    // 6. Custom block: Tech Stack
    if (block._type === "techStackBlock") {
      flushList();
      result.push({
        type: "tech-stack",
        title: block.title ?? "",
        items: block.items ?? [],
      });
      continue;
    }

    // 7. Standard rich text block (headings / paragraphs)
    if (block._type !== "block") {
      continue;
    }

    const text =
      block.children
        ?.map((child) => child.text)
        .join("")
        .trim() ?? "";

    if (!text) {
      continue;
    }

    if (block.listItem === "bullet") {
      listItems.push(text);
      continue;
    }

    flushList();

    if (block.style === "h2") {
      result.push({ type: "heading", level: 2, text });
    } else if (block.style === "h3") {
      result.push({ type: "heading", level: 3, text });
    } else {
      result.push({ type: "paragraph", text });
    }
  }

  flushList();
  return result;
}

function mapSanityCaseStudy(doc: SanityCaseStudy): CaseStudy {
  return {
    slug: doc.slug,
    title: doc.title,
    summary: doc.summary,
    coverImage: urlFor(doc.coverImage),
    role: doc.role,
    industry: doc.industry,
    projectType: doc.projectType,
    client: doc.client,
    clientLogo: doc.clientLogo ? urlFor(doc.clientLogo) : undefined,
    tools: doc.tools ?? [],
    publishedAt: doc.publishedAt,
    featured: doc.featured ?? false,
    metrics: doc.metrics,
    body: portableTextToBlocks(doc.body),
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
