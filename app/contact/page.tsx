import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Footer } from "@/components/layout/footer";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

const CalEmbed = dynamic(
  () => import("@/components/contact/cal-embed").then((mod) => mod.CalEmbed),
  { ssr: false }
);

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
            title="Contact"
            description="Have a project in mind? Book a time to chat."
          />
          <div className="mt-24">
            <CalEmbed />
          </div>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
