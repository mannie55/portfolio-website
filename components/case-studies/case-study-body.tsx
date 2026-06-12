import Image from "next/image";

import { CaseStudyChallenges } from "@/components/case-studies/case-study-challenges";
import { CaseStudyOutcomes } from "@/components/case-studies/case-study-outcomes";
import { CaseStudySection } from "@/components/case-studies/case-study-section";
import { CaseStudySolution } from "@/components/case-studies/case-study-solution";
import { CaseStudyTechStack } from "@/components/case-studies/case-study-tech-stack";
import type { CaseStudyBlock } from "@/types/case-study";

type CaseStudyBodyProps = {
  blocks: CaseStudyBlock[];
};

export function CaseStudyBody({ blocks }: CaseStudyBodyProps) {
  return (
    <article className="mt-12 max-w-none space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "section":
            return <CaseStudySection key={index} block={block} />;
          case "challenges":
            return <CaseStudyChallenges key={index} block={block} />;
          case "solution":
            return <CaseStudySolution key={index} block={block} />;
          case "outcomes":
            return <CaseStudyOutcomes key={index} block={block} />;
          case "tech-stack":
            return <CaseStudyTechStack key={index} block={block} />;
          case "heading":
            if (block.level === 2) {
              return (
                <h2 key={index} className="text-h3">
                  {block.text}
                </h2>
              );
            }
            return (
              <h3 key={index} className="text-h4">
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={index} className="text-body text-muted">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul
                key={index}
                className="list-disc space-y-2 pl-5 text-body text-muted"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={index} className="space-y-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border-light bg-surface-elevated">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1024px"
                  />
                </div>
                {block.caption ? (
                  <figcaption className="text-center text-body-sm text-muted">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
