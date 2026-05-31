import Image from "next/image";
import Link from "next/link";

import type { CaseStudySummary } from "@/types/case-study";

type CaseStudyCardProps = {
  study: CaseStudySummary;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-elevated">
        <Image
          src={study.coverImage}
          alt={study.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {study.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
        <h2 className="mt-3 text-lg font-semibold group-hover:text-accent">
          {study.title}
        </h2>
        <p className="mt-2 flex-1 text-sm text-muted">{study.summary}</p>
        <p className="mt-4 text-xs text-muted">{study.role}</p>
      </div>
    </Link>
  );
}
