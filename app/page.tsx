import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Projects } from "@/components/home/projects";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { PageContainer } from "@/components/layout/page-container";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/constants";
import { faqData } from "@/lib/mock/faq";

const Process = dynamic(() => import("@/components/home/process").then((mod) => mod.Process));
const FAQ = dynamic(() => import("@/components/home/faq").then((mod) => mod.FAQ));

export const metadata: Metadata = {
  title: "Nnamdi Ogbonna | Fullstack developer | webflow designer",
  description: "Helping modern businesses build credible digital experiences that earn trust, drive conversion, and power growth.",
};

export default async function Home() {
  const featuredStudies = await getFeaturedCaseStudies();

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "About",
        "url": `${siteConfig.url}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Case Studies",
        "url": `${siteConfig.url}/case-studies`,
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Contact",
        "url": `${siteConfig.url}/contact`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <PageContainer>
      <div className="flex flex-col">
        <Hero />

        <Projects studies={featuredStudies} />

        <Services />
        <Process />

        <FAQ />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nnamdi Ogbonna",
            "url": siteConfig.url,
            "email": "ogbonnannamdi.pro@gmail.com",
            "jobTitle": "Fullstack developer | webflow designer",
            "sameAs": [
              "https://github.com/mannie55/",
              "https://www.linkedin.com/in/nnamdiogbonna/"
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(navigationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </PageContainer>
  );
}
