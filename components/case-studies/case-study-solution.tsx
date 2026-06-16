import Image from "next/image";
import type { CaseStudySolutionBlock } from "@/types/case-study";

type CaseStudySolutionProps = {
  block: CaseStudySolutionBlock;
};

export function CaseStudySolution({ block }: CaseStudySolutionProps) {
  return (
    <section
      aria-labelledby="solution-heading"
      className="relative flex w-full max-w-container-xxlarge flex-col items-center gap-12 py-12"
    >
      {/* Header */}
      <header className="relative flex h-[1.8125rem] w-full items-center gap-2.5">
        <div className="relative flex h-[1.8125rem] w-fit min-w-[6.125rem] flex-col items-center justify-center rounded-full bg-surface-elevated px-4 py-2">
          <h2
            id="solution-heading"
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

      {/* Solution Items */}
      <div className="flex flex-col items-center w-full max-w-[73.625rem] gap-8">
        <div className="flex flex-col w-full gap-5">
          {block.items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col md:flex-row items-start justify-center gap-4 py-8"
            >
              <div className="text-[1.69375rem] leading-7 text-border-lighter font-sans font-normal min-w-[2rem]">
                {item.id}
              </div>
              <div className="flex flex-col gap-4 max-w-[36.1875rem]">
                <h3 className="text-h5 leading-7 text-foreground font-normal">
                  {item.title}
                </h3>
                <p className="text-base leading-[1.4] text-muted font-light">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        {block.collageImage && (
          <div className="relative w-full aspect-[1242/481] mt-8">
            <Image
              src={block.collageImage}
              alt="Solution showcase collage"
              fill
              className="object-contain"
              sizes="(max-width: 1360px) 100vw, 1242px"
            />
          </div>
        )}
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col w-full max-w-[77.625rem] gap-1 py-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-5 py-5 rounded-t-[1.25rem] overflow-hidden bg-background/20">
          {block.gallery.top.map((image, index) => (
            <div 
              key={index} 
              className={`relative ${index === 0 ? 'w-full md:w-[40%] aspect-[476/332]' : 'w-full md:w-[60%] aspect-[696/481]'}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1200px) 100vw, 700px"
              />
            </div>
          ))}
        </div>
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-5 py-5 rounded-b-[1.25rem] overflow-hidden bg-background/20">
          {block.gallery.bottom.map((image, index) => (
            <div 
              key={index} 
              className={`relative ${index === 0 ? 'w-full md:w-[45%] aspect-[543/217]' : 'w-full md:w-[55%] aspect-[635/465]'}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1200px) 100vw, 650px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <figure className="flex flex-col md:flex-row items-start gap-4 max-w-[40rem] self-start md:ml-12 mt-4">
        <div className="relative w-10 h-8 shrink-0 mt-1">
          <Image
            src="/images/components/quote_icon.svg"
            alt=""
            fill
            className="object-contain opacity-50"
            aria-hidden="true"
          />
        </div>
        <blockquote className="m-0">
          <p className="text-h6 md:text-h5 leading-relaxed text-rhino-lightest font-normal italic">
            &ldquo;{block.quote.text}&rdquo;
          </p>
          <figcaption className="mt-4 text-body-sm md:text-base text-muted/60 font-medium not-italic">
            — {block.quote.author}, {block.quote.role}
          </figcaption>
        </blockquote>
      </figure>
    </section>
  );
}
