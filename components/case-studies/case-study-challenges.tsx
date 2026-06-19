import Image from "next/image";
import type { CaseStudyChallengeBlock } from "@/types/case-study";

type CaseStudyChallengesProps = {
  block: CaseStudyChallengeBlock;
};

export function CaseStudyChallenges({ block }: CaseStudyChallengesProps) {
  return (
    <section
      aria-labelledby={`${block.title.toLowerCase().replace(/\s+/g, "-")}-heading`}
      className="relative flex w-full max-w-container-xxlarge flex-col items-center gap-8 py-12"
    >
      {/* Header */}
      <header className="relative flex h-[1.8125rem] w-full items-center gap-2.5">
        <div className="relative flex h-[1.8125rem] w-fit min-w-[6.125rem] flex-col items-center justify-center rounded-full bg-surface-elevated px-4 py-2">
          <h2
            id={`${block.title.toLowerCase().replace(/\s+/g, "-")}-heading`}
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

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[69.125rem]">
        {block.items.map((item) => (
          <article
            key={item.number}
            className="relative flex flex-col justify-between gap-6 h-full min-h-[18.5rem] p-4 rounded-[1.25rem] bg-surface"
          >
            <div className="flex flex-col gap-2">
              <div className="text-h5 leading-[1.75rem] text-border-lighter font-sans">
                {item.number}
              </div>
              <h3 className="text-h6 font-medium leading-[1.625rem] text-foreground">
                {item.title}
              </h3>
            </div>
            <p className="text-body-sm leading-relaxed text-muted font-light">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      {/* Mobile Mockups Row */}
      <div className="flex flex-col md:flex-row items-center gap-[0.6875rem] w-full justify-center mt-8">
        {block.images.map((src, index) => (
          <figure
            key={index}
            className={`flex items-center justify-center p-5 border border-border-light bg-transparent w-full md:flex-1 max-w-[21.25rem]
              ${index === 0 ? "rounded-t-[20px] md:rounded-tr-none md:rounded-tl-[20px] md:rounded-bl-[20px]" : ""}
              ${index === block.images.length - 1 ? "rounded-b-[20px] md:rounded-bl-none md:rounded-tr-[20px] md:rounded-br-[20px]" : ""}
              ${index > 0 && index < block.images.length - 1 ? "rounded-none" : ""}
            `}
          >
            <div className="relative w-full max-w-[18.75rem] aspect-[300/533]">
              <Image
                src={src}
                alt={`StaffOS mobile screen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
