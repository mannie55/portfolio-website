import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { PageContainer } from "@/components/layout/page-container";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export default async function Home() {
  const featuredStudies = await getFeaturedCaseStudies();

  return (
    <PageContainer>
      <Hero />
      <FeaturedWork studies={featuredStudies} />
    </PageContainer>
  );
}
