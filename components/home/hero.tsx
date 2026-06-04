import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="py-section-sm">
      <p className="text-body-sm font-medium text-accent">
        {siteConfig.title}
      </p>
      <h1 className="mt-3 max-w-container-large text-h1 font-semibold">
        {siteConfig.author}
      </h1>
      <p className="mt-6 max-w-container-medium text-body-lg text-muted">
        {siteConfig.description}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/case-studies">View my work</Button>
        <Button href="/contact" variant="secondary">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
