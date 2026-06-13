import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "./testimonial-card";
import { testimonials } from "@/lib/mock/testimonials";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="flex flex-col gap-12">
        <SectionHeading
          title="What Clients Say"
          description="I take pride in delivering exceptional results for my clients. Here's what some of them have to say about working with me."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
