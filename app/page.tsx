import dynamic from "next/dynamic";
import { Projects } from "@/components/home/projects";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { PageContainer } from "@/components/layout/page-container";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

const Process = dynamic(() => import("@/components/home/process").then((mod) => mod.Process));
const FAQ = dynamic(() => import("@/components/home/faq").then((mod) => mod.FAQ));

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
    </PageContainer>
  );
}
