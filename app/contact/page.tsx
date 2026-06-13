import type { Metadata } from "next";

import { CalEmbed } from "@/components/contact/cal-embed";
import { ContactForm } from "@/components/contact/contact-form";
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
            title="Contact"
            description="Have a project in mind? Send a message or book a time to chat."
          />
          <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <section className="lg:col-span-5 w-full">
              <h2 className="text-h5 font-semibold mb-6">Send a message</h2>
              <ContactForm />
            </section>
            
            <section className="lg:col-span-7 w-full">
              <h2 className="text-h5 font-semibold mb-6">Book a call</h2>
              <CalEmbed />
            </section>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
