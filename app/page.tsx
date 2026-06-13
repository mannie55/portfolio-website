import { CTASection } from "@/components/home/cta-section";
import { FAQ } from "@/components/home/faq";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { Footer } from "@/components/layout/footer";
import { PageContainer } from "@/components/layout/page-container";
import { DiscoveryComponent } from "@/components/ui/discovery-component";
import { AssetComponent } from "@/components/ui/asset-component";
import { ScopeComponent } from "@/components/ui/scope-component";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export default async function Home() {
  const featuredStudies = await getFeaturedCaseStudies();

  return (
    <>
      <PageContainer>
        <div className="flex flex-col">
          <Hero />

          {/* Component Preview */}
          <div className="flex flex-col items-center justify-center gap-12 bg-slate-50 py-20 lg:flex-row lg:flex-wrap">
            <div className="w-full max-w-[20rem]">
              <DiscoveryComponent />
            </div>
            <div className="w-full max-w-[30rem]">
              <AssetComponent />
            </div>
            <div className="w-full max-w-[20rem] rounded-[1.25rem] border border-black/10 shadow-sm overflow-hidden">
              <ScopeComponent />
            </div>
          </div>

          <Services />
...

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
