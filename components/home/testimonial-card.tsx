import Image from "next/image";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-[20px] bg-surface p-5">
      {/* Header: Avatar and Info */}
      <div className="flex items-start gap-3 border-b border-border-lighter pb-5">
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-surface-elevated">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-accent text-accent-foreground">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <h4 className="font-sans text-body-lg font-bold text-white">{testimonial.name}</h4>
          <p className="text-body-sm text-white/50">{testimonial.role}</p>
        </div>
      </div>

      {/* Quote */}
      <div className="flex-1">
        <p className="text-body-sm md:text-body-md leading-relaxed text-muted">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}
