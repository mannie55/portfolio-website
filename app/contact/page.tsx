import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

const CalEmbed = dynamic(() => import("@/components/contact/cal-embed").then((mod) => mod.CalEmbed), {
  ssr: false,
  loading: () => <div className="min-h-[700px] rounded-[20px] bg-surface-elevated animate-pulse" />
});

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch or book a call.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="py-24">
        <SectionHeading
          as="h1"
          title="LETS BUILD SOMETHING GREAT TOGETHER."
          description="Have a project in mind? Book a time to chat."
          className="flex flex-col items-center text-center"
        />
        <div className="mt-24">
          <CalEmbed />
        </div>
      </div>
    </PageContainer>
  );
}

