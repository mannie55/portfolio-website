import { aboutContent } from "@/lib/about";

export function Strengths() {
  return (
    <section className="py-12" aria-label="Core strengths">
      <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
        {aboutContent.strengths.map((strength) => (
          <article
            key={strength.title}
            className="flex min-h-[7rem] w-full items-center justify-center rounded-md bg-surface p-6 text-center sm:w-[18.75rem]"
          >
            <h3 className="font-heading text-h4 leading-tight text-foreground">
              {strength.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
