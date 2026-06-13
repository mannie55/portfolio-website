import type { CaseStudySectionBlock } from "@/types/case-study";

type CaseStudySectionProps = {
  block: CaseStudySectionBlock;
};

export function CaseStudySection({ block }: CaseStudySectionProps) {
  return (
    <section
      aria-labelledby={`${block.title.toLowerCase()}-heading`}
      className="relative flex w-full max-w-container-xxlarge flex-col items-center gap-8 py-12"
    >
      <header className="relative flex h-[1.8125rem] w-full items-center gap-2.5">
        <div className="relative flex h-[1.8125rem] w-fit min-w-[5.6875rem] flex-col items-center justify-center rounded-full border border-border bg-surface-elevated px-4 py-2">
          <h2
            id={`${block.title.toLowerCase()}-heading`}
            className="text-[0.625rem] md:text-body-xs font-sans font-normal text-foreground whitespace-nowrap"
          >
            {block.title}
          </h2>
        </div>
        <div
          aria-hidden="true"
          className="relative h-px grow rounded-full bg-border"
        />
      </header>
      <div className="relative w-full max-w-[42.125rem]">
        <div className="space-y-6">
          {block.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-[1.4] text-muted font-light"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
