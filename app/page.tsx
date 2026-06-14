import { FAQ } from "@/components/home/faq";
import { Projects } from "@/components/home/projects";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { PageContainer } from "@/components/layout/page-container";
import { Process } from "@/components/home/process";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

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
