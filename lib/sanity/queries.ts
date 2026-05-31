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
  client?: string;
  tools?: string[];
  publishedAt: string;
  featured?: boolean;
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
};

const caseStudyFields = `
  "slug": slug.current,
  title,
  summary,
  coverImage,
  role,
  client,
  tools,
  publishedAt,
  featured,
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
    client: doc.client,
    tools: doc.tools ?? [],
    publishedAt: doc.publishedAt,
    featured: doc.featured ?? false,
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
