import Image from "next/image";
import type { CaseStudyOutcomesBlock } from "@/types/case-study";

type CaseStudyOutcomesProps = {
  block: CaseStudyOutcomesBlock;
};

export function CaseStudyOutcomes({ block }: CaseStudyOutcomesProps) {
  return (
    <section
      aria-labelledby="key-outcomes-heading"
      className="relative flex w-full max-w-container-xxlarge flex-col items-center gap-8 py-12"
    >
      {/* Header */}
      <header className="relative flex h-[1.8125rem] w-full items-center gap-2.5">
        <div className="relative flex h-[1.8125rem] w-fit min-w-[6.125rem] flex-col items-center justify-center rounded-full border border-border bg-surface-elevated px-4 py-2">
          <h2
            id="key-outcomes-heading"
            className="text-[0.625rem] md:text-xs font-sans font-normal text-foreground whitespace-nowrap"
          >
            {block.title}
          </h2>
        </div>
        <div
          aria-hidden="true"
          className="relative h-px grow rounded-full bg-border"
        />
      </header>

      {/* Outcomes List */}
      <div className="flex flex-col items-center w-full max-w-[73.625rem] gap-8">
        <div className="flex flex-col w-full gap-5">
          {block.items.map((outcome) => (
            <article
              key={outcome.id}
              className="flex flex-col md:flex-row items-start justify-center gap-4 py-8 border-b border-border last:border-0"
            >
              <div className="relative h-8 w-8 shrink-0">
                <Image
                  src={outcome.icon}
                  alt={outcome.iconAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-4 max-w-[36.1875rem]">
                <h3 className="text-2xl leading-7 text-foreground font-normal">
                  {outcome.title}
                </h3>
                <p className="text-base leading-[1.4] text-muted font-light">
                  {outcome.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
