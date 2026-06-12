import Image from "next/image";

import type { CaseStudy } from "@/types/case-study";

type CaseStudyHeaderProps = {
  study: CaseStudy;
};

export function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  return (
    <header>
      <div className="flex flex-wrap gap-2">
        {study.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-body-xs text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
      <h1 className="mt-4 text-h2 text-foreground">
        {study.title}
      </h1>
      <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-muted">
        <div>
          <dt className="inline font-medium text-foreground">Role: </dt>
          <dd className="inline">{study.role}</dd>
        </div>
        {study.client ? (
          <div>
            <dt className="inline font-medium text-foreground">Client: </dt>
            <dd className="inline">{study.client}</dd>
          </div>
        ) : null}
        <div>
          <dt className="inline font-medium text-foreground">Published: </dt>
          <dd className="inline">
            {new Date(study.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </dd>
        </div>
      </dl>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-border-light bg-surface-elevated">
        <Image
          src={study.coverImage}
          alt={study.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1200px) 100vw, 1024px"
        />
      </div>
    </header>
  );
}
