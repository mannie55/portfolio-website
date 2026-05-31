import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyBody } from "@/components/case-studies/case-study-body";
import { CaseStudyHeader } from "@/components/case-studies/case-study-header";
import { CaseStudyNav } from "@/components/case-studies/case-study-nav";
import { PageContainer } from "@/components/layout/page-container";
import {
  getAdjacentCaseStudies,
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/lib/case-studies";
import { siteConfig } from "@/lib/constants";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      images: [{ url: study.coverImage, alt: study.title }],
      type: "article",
      publishedTime: study.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.summary,
      images: [study.coverImage],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const { previous, next } = await getAdjacentCaseStudies(slug);

  return (
    <PageContainer>
      <CaseStudyHeader study={study} />
      <CaseStudyBody blocks={study.body} />
      <CaseStudyNav previous={previous} next={next} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: study.title,
            description: study.summary,
            image: study.coverImage,
            datePublished: study.publishedAt,
            author: { "@type": "Person", name: siteConfig.author },
          }),
        }}
      />
    </PageContainer>
  );
}
