import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Projects } from "@/components/home/projects";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { PageContainer } from "@/components/layout/page-container";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

const Process = dynamic(() => import("@/components/home/process").then((mod) => mod.Process));
const FAQ = dynamic(() => import("@/components/home/faq").then((mod) => mod.FAQ));

export const metadata: Metadata = {
  title: "Nnamdi Ogbonna | Fullstack developer | webflow designer",
  description: "Helping modern businesses build credible digital experiences that earn trust, drive conversion, and power growth.",
};

export default async function Home() {
  const featuredStudies = await getFeaturedCaseStudies();

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
            "url": "https://mannie55.github.io/portfolio-website",
            "email": "ogbonnannamdi.pro@gmail.com",
            "jobTitle": "Fullstack developer | webflow designer",
            "sameAs": [
              "https://github.com/mannie55/",
              "https://www.linkedin.com/in/nnamdiogbonna/"
            ]
          }),
        }}
      />
    </PageContainer>
  );
}
