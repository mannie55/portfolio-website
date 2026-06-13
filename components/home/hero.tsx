import Image from "next/image";
import { AButtonSecondary } from "@/components/ui/button-secondary";
import { heroContent } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative py-24">
      <div className="mx-auto flex flex-col items-center gap-10 lg:flex-row lg:items-end lg:gap-14">
        {/* Left: Author Portrait */}
        <div className="relative h-[30rem] w-full max-w-[31.25rem] overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-surface to-surface-elevated sm:h-[37.5rem] lg:h-[42.5625rem] lg:w-[39.375rem] lg:max-w-none">
          <Image
            src="/images/nnamdi_profile.png"
            alt="Portrait of Nnamdi Ogbonna"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 64rem) 100vw, 39.375rem"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-1 flex-col items-start gap-8 lg:gap-10">
          <h1 className="max-w-[50rem] text-h1 font-bold leading-[0.95] text-white uppercase">
            {heroContent.headline}
          </h1>

          {/* Description Box */}
          <div className="relative flex h-full w-full max-w-[42rem] flex-auto overflow-hidden rounded-[1.25rem] bg-surface p-4">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/bg_grid.svg"
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-start justify-between gap-[6.7rem]">
              <p className="max-w-[40.25rem] text-body-xl text-text-dark">
                {heroContent.description}
              </p>
              <AButtonSecondary label={heroContent.cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
