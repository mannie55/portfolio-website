import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import type { CaseStudySummary } from "@/types/case-study";

interface ProjectsProps {
  studies: CaseStudySummary[];
}

export function Projects({ studies }: ProjectsProps) {
  return (
    <section
      aria-labelledby="projects-heading"
      className="relative flex w-full flex-col items-start py-24 px-0 md:px-6"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <h2
          id="projects-heading"
          className="font-heading text-h2 text-white uppercase"
        >
          PROJECTS
        </h2>
        <PillButton href="/case-studies" label="View more" variant="white" />
      </div>

      <div className="mt-10 flex w-full flex-col gap-10">
        {studies.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 p-4 md:p-6 rounded-[20px] bg-surface w-full"
          >
            <div className="flex flex-col flex-1 max-w-[504px] items-start gap-6">
              <div className="flex flex-col items-start gap-4 w-full">
                <h3 className="font-heading text-h4 leading-tight text-white/90">
                  {project.title}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {project.tools.map((tag) => (
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
              <div className="flex flex-col items-start gap-6 w-full">
                <p className="text-body-sm md:text-body leading-relaxed text-foreground-muted">
                  {project.summary}
                </p>
                
                <PillButton
                  href={`/case-studies/${project.slug}`}
                  label="View Project"
                  variant="white"
                  className="w-fit"
                />
              </div>
            </div>
            
            <div className="relative flex-1 w-full max-w-[606px] aspect-[1.515] overflow-hidden rounded-lg">
              <Image
                src={project.coverImage}
                alt={`${project.title} preview`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 606px"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
