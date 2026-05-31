import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="py-8 sm:py-12">
      <p className="text-sm font-medium text-accent">{siteConfig.title}</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {siteConfig.author}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
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
