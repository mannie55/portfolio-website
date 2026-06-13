import { CTASection } from "@/components/home/cta-section";
import { FAQ } from "@/components/home/faq";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { Footer } from "@/components/layout/footer";
import { PageContainer } from "@/components/layout/page-container";
import { Process } from "@/components/home/process";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export default async function Home() {
  const featuredStudies = await getFeaturedCaseStudies();

  return (
    <>
      <PageContainer>
        <div className="flex flex-col">
          <Hero />

          <Services />
          <Process />

          <Testimonials />
          <FAQ />
        </div>
      </PageContainer>
      
      {/* 100vh Combined Block for CTA and Footer */}
      <div className="mx-auto flex min-h-screen w-full max-w-container-xxlarge flex-col px-page py-12 xl:px-0">
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
