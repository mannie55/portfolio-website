import Image from "next/image";
import type { CaseStudy } from "@/types/case-study";

type CaseStudyHighImpactHeaderProps = {
  study: CaseStudy;
};

export function CaseStudyHighImpactHeader({ study }: CaseStudyHighImpactHeaderProps) {
  const projectDetails = [
    { label: "Company", value: study.client },
    { label: "Industry", value: study.industry || "SaaS" },
    { label: "My role", value: study.role },
    { label: "Stack", value: study.tools.join(" . ") },
    { label: "Type", value: study.projectType || "Case Study" },
  ];

  return (
    <header className="flex flex-col items-center relative py-8 md:py-12">
      {/* Breadcrumb Header */}
      <div className="flex w-full max-w-container-xxlarge items-center gap-2.5 mb-8 md:mb-12">
        <div className="flex flex-col items-center justify-center px-4 py-2 bg-surface-elevated rounded-full">
          <p className="text-[0.625rem] md:text-body-xs text-foreground whitespace-nowrap">
            Case study — landing page
          </p>
        </div>
        <div className="flex-grow h-px bg-border rounded-full" />
      </div>

      <div className="flex flex-col items-center gap-8 w-full max-w-container-xxlarge">
        {/* Main Title Section */}
        <div className="flex flex-col md:flex-row w-full items-start justify-between gap-6">
          {study.clientLogo && (
            <div className="relative w-32 h-8 md:w-48 md:h-12">
              <Image
                src={study.clientLogo}
                alt={`${study.client} logo`}
                fill
                className="object-contain object-left"
              />
            </div>
          )}
          <div className="flex flex-col items-start gap-4 md:gap-8 max-w-full md:max-w-[42rem]">
            <h1 className="text-[1.5rem] md:text-[1.75rem] leading-[1.1] md:leading-[1] font-heading text-foreground">
              {study.title}
            </h1>
            <p className="text-body-lg md:text-h6 leading-[1.4] md:leading-[1.3] text-muted">
              {study.summary}
            </p>
          </div>
        </div>

        {/* Project Overview (Details & Metrics) */}
        <section className="flex flex-col items-center w-full">
          {/* Details Row */}
          <div className="flex w-full border-b border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 w-full">
              {projectDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className={`flex flex-col gap-2 px-4 md:px-9 py-6 ${
                    index === 0 
                      ? "md:pl-14" 
                      : "border-t sm:border-t-0 md:border-l border-border"
                  } ${
                    index === 1 ? "sm:border-l md:border-l border-border" : ""
                  } ${
                    index === 2 ? "sm:border-t md:border-t-0 border-border" : ""
                  } ${
                    index === 3 ? "sm:border-l md:border-l border-border" : ""
                  } ${
                    index === 4 ? "sm:border-t md:border-t-0 border-border" : ""
                  }`}
                >
                  <dt className="text-body font-medium text-foreground">
                    {detail.label}
                  </dt>
                  <dd className="text-body-sm text-muted font-light">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Row */}
          {study.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full md:h-[12.6875rem]">
              {study.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center gap-3 px-4 md:px-10 py-8 md:py-0 ${
                    index > 0 ? "border-t sm:border-t-0 md:border-t-0 md:border-l border-border" : ""
                  } ${
                    index === 1 ? "sm:border-l md:border-l border-border" : ""
                  } ${
                    index === 2 ? "sm:border-t md:border-t-0 border-border" : ""
                  } ${
                    index === 3 ? "sm:border-l md:border-l border-border" : ""
                  }`}
                >
                  <div className="text-[2.5rem] md:text-[3.75rem] font-heading text-rhino-lightest leading-none">
                    {metric.value}
                  </div>
                  <p className="text-body-xs md:text-body-sm text-muted font-light leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Design Previews Section */}
      <section
        className="flex flex-col lg:flex-row w-full max-w-container-xxlarge lg:h-[28.1875rem] items-end justify-center gap-5 pt-8 px-4 lg:px-8 mt-8 lg:mt-12 relative rounded-t-[1.25rem] border border-border-light overflow-hidden"
        aria-label={`${study.client} design previews`}
      >
        <div className="relative w-full lg:w-[29.75rem] h-[15rem] lg:h-[23.9375rem] lg:ml-[-1.0625rem] aspect-[1.24]">
          <Image
            src="/images/case-studies/staffos_pricing.png"
            alt={`${study.client} pricing section preview`}
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full lg:w-[47.875rem] h-[20rem] lg:h-[27.3125rem] lg:mt-[-1.125rem] lg:mr-[-1.0625rem]">
          <Image
            src={study.coverImage}
            alt={`${study.client} hero section preview`}
            fill
            className="object-contain"
          />
        </div>
      </section>
    </header>
  );
}
