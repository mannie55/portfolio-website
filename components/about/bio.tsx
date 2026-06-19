import Image from "next/image";
import { aboutContent } from "@/lib/about";

export function Bio() {
  return (
    <section className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
      {/* Quote Section */}
      <div className="grid grid-cols-[auto_1fr] gap-4 lg:max-w-[35rem] about-reveal">
        <div className="relative h-9 w-11 flex-shrink-0">
          <Image
            src="/images/components/quote_icon.svg"
            alt="Quote icon"
            fill
            className="object-contain"
          />
        </div>
        <p className="font-heading text-h4 leading-tight text-rhino-lightest">
          {aboutContent.quote}
        </p>
      </div>

      {/* Intro & Bio Section */}
      <div className="flex flex-col gap-8 lg:max-w-[42rem] about-reveal">
        <h1 className="font-heading text-h4 text-foreground">
          {aboutContent.intro}
        </h1>
        <div className="space-y-6 text-body-lg text-foreground">
          {aboutContent.bio.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
