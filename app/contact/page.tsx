import type { Metadata } from "next";
import { CTASection } from "@/components/home/cta-section";
import { CalEmbed } from "@/components/contact/cal-embed";
import { Footer } from "@/components/layout/footer";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";


export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch or book a call.",
};

export default function ContactPage() {
  return (
    <>
      <PageContainer>
        <div className="py-24">
          <SectionHeading
            as="h1"
            title="LETS BUILD SOMETHING GREAT TOGETHER."
            description="Have a project in mind? Book a time to chat."
          />
          <div className="mt-24">
            <CalEmbed />
          </div>
        </div>
      </PageContainer>
      
      {/* 100vh Combined Block for CTA and Footer */}
      <div className="mx-auto flex min-h-screen w-full max-w-container-xxlarge flex-col px-page py-24 xl:px-0">
        <CTASection title="got a project in mind?" />
        <Footer />
      </div>
    </>
  );
}
