import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CaseStudySummary } from "@/types/case-study";

type FeaturedWorkProps = {
  studies: CaseStudySummary[];
};

export function FeaturedWork({ studies }: FeaturedWorkProps) {
  return (
    <section
      className="relative flex w-full flex-col items-start py-12"
      aria-labelledby="case-studies-heading"
    >
      <header className="flex w-full items-start justify-between gap-6">
        <SectionHeading
          id="case-studies-heading"
          title="CASE STUDIES"
          className="uppercase"
        />
        <PillButton
          href="/case-studies"
          label="View more"
          variant="white"
        />
      </header>

      <div className="mt-10 flex w-full flex-col gap-10">
        {studies.map((study) => (
          <article
            key={study.slug}
            className="flex flex-col items-center gap-10 rounded-[1.25rem] border border-border-lighter p-6 md:flex-row lg:gap-20"
          >
            <div className="flex flex-1 flex-col items-start gap-8">
              <div className="flex w-full flex-col items-start gap-4">
                <h3 className="font-heading text-[1.75rem] leading-tight text-white/90">
                  {study.title}
                </h3>
                <ul
                  className="flex flex-wrap gap-3"
                  aria-label={`${study.title} technologies`}
                >
                  {study.tools.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex rounded-full bg-surface-elevated px-4 py-2"
                    >
                      <span className="text-body-xs text-white/90">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex w-full flex-col gap-6">
                <p className="text-body leading-relaxed text-foreground-muted">
                  {study.summary}
                </p>
                
                <PillButton
                  href={`/case-studies/${study.slug}`}
                  label="View Project"
                  variant="outline"
                  className="w-fit"
                />
              </div>
            </div>
            
            <div className="relative aspect-[4/3] w-full max-w-[37.875rem] flex-1 overflow-hidden rounded-lg md:aspect-auto">
              <Image
                src={study.coverImage}
                alt={study.title}
                width={606}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
