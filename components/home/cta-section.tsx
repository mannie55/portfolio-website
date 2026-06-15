
import Image from "next/image";
import Link from "next/link";
import { AButtonSecondary } from "@/components/ui/button-secondary";

interface CTASectionProps {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showFooter?: boolean;
}

export function CTASection({
  title = "LET'S BUILD SOMETHING THAT ACTUALLY WORKS.",
  ctaLabel = "Book a strategy call",
  ctaHref = "/contact",
  showFooter = true,
}: CTASectionProps) {
  return (
    <section className="relative flex flex-1 w-full flex-col items-center justify-between overflow-hidden rounded-[1.25rem] bg-white py-12 px-6">
      {/* Background Grid/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg_grid.svg"
          alt=""
          fill
          className="object-cover opacity-100"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-12 text-center md:gap-20">
        <h2 className="max-w-[70rem] font-heading text-h1 font-medium leading-[0.95] text-text-dark uppercase">
          {title}
        </h2>

        
        <AButtonSecondary 
          label={ctaLabel} 
          href={ctaHref} 
          className="scale-110 md:scale-125"
        />
      </div>

      {showFooter && (
        <footer className="relative z-10 flex w-full flex-col items-center justify-between gap-6 pt-12 md:flex-row md:gap-0">
          <Link
            href="/"
          >
            <Image 
              src="/images/components/Brand_name_dark.svg"
              alt="Brand Logo"
              width={150}
              height={30}
              className="h-4 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-body-sm md:text-body font-medium text-text-dark/70">
              Available to take on new projects!
            </p>
          </div>
        </footer>
      )}
    </section>
  );
}
