import { mockCaseStudies } from "@/lib/mock/case-studies";
import type { CaseStudy, CaseStudySummary } from "@/types/case-study";

function toSummary(study: CaseStudy): CaseStudySummary {
  const {
    slug,
    title,
    summary,
    coverImage,
    showcaseImage,
    role,
    client,
    tools,
    publishedAt,
    featured,
  } = study;
  return {
    slug,
    title,
    summary,
    coverImage: showcaseImage || coverImage,
    role,
    client,
    tools,
    publishedAt,
    featured,
  };
}

function sortByDate(studies: CaseStudy[]): CaseStudy[] {
  return [...studies].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

async function getCaseStudiesFromSource(): Promise<CaseStudy[]> {
  if (process.env.USE_SANITY === "true") {
    const { getCaseStudiesFromSanity } = await import("@/lib/sanity/queries");
    return getCaseStudiesFromSanity();
  }

  return mockCaseStudies;
}

export async function getAllCaseStudies(): Promise<CaseStudySummary[]> {
  const studies = await getCaseStudiesFromSource();
  return sortByDate(studies).map(toSummary);
}

export async function getFeaturedCaseStudies(): Promise<CaseStudySummary[]> {
  const studies = await getCaseStudiesFromSource();
  return sortByDate(studies.filter((study) => study.featured)).map(toSummary);
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  const studies = await getCaseStudiesFromSource();
  return studies.find((study) => study.slug === slug) ?? null;
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const studies = await getCaseStudiesFromSource();
  return studies.map((study) => study.slug);
}

export async function getAdjacentCaseStudies(slug: string): Promise<{
  previous: CaseStudySummary | null;
  next: CaseStudySummary | null;
}> {
  const studies = sortByDate(await getCaseStudiesFromSource()).map(toSummary);
  const index = studies.findIndex((study) => study.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? studies[index - 1] : null,
    next: index < studies.length - 1 ? studies[index + 1] : null,
  };
}
