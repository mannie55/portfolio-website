import type { CaseStudyTechStackBlock } from "@/types/case-study";

type CaseStudyTechStackProps = {
  block: CaseStudyTechStackBlock;
};

export function CaseStudyTechStack({ block }: CaseStudyTechStackProps) {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="relative flex w-full max-w-container-xxlarge flex-col items-center gap-8 py-12"
    >
      {/* Header */}
      <header className="relative flex h-[1.8125rem] w-full items-center gap-2.5">
        <div className="relative flex h-[1.8125rem] w-fit min-w-[6.125rem] flex-col items-center justify-center rounded-full border border-border bg-surface-elevated px-4 py-2">
          <h2
            id="tech-stack-heading"
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

      {/* Tech Stack List */}
      <ul className="flex w-full max-w-[73.625rem] flex-wrap gap-4 md:gap-8">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-center rounded-full bg-surface-hover px-6 py-3 border border-border transition-colors hover:bg-surface-elevated"
          >
            <span className="whitespace-nowrap text-base font-light text-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
