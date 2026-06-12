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
        <div className="py-12">
          <SectionHeading
            as="h1"
            title="Contact"
            description="Have a project in mind? Send a message or book a time to chat."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <section>
              <h2 className="text-h5 font-semibold">Send a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </section>
            <section>
              <h2 className="text-h5 font-semibold">Book a call</h2>
              <div className="mt-6">
                <CalEmbed />
              </div>
            </section>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
