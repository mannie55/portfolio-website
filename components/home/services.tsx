import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
 {
  id: "ux-ui-design",
  title: "UX/UI Design",
  description:
    "I design interfaces that are simple, clean, and make sense to your users. The goal isn't just to make things look pretty—it's to remove confusion so people naturally take the actions you want them to.",
  icon: "/images/components/figma_icon.svg",
},
{
  id: "webflow-development",
  title: "Website Development (Webflow)",
  description:
    "I build Webflow sites that actually get seen. Beyond matching the design perfectly, I make sure the pages load fast, the technical SEO is set up for search engines, and you get a CMS that is genuinely easy to update.",
  icon: "/images/components/webflow_icon.svg",
},
{
  id: "nextjs-development",
  title: "Website & Web App Development (Next.js)",
  description:
    "If your project needs more than a standard website builder, I build custom web applications using Next.js. I handle the logic, data, and custom features required to bring a more complex product or SaaS idea to life.",
  icon: "/images/components/nextjs_icon.svg",
},
{
  id: "ongoing-support",
  title: "Ongoing Support & Maintenance",
  description:
    "A website is never really finished. I stay involved after launch to keep your site updated, fix bugs, track performance, and add new features so it continues working well for your business over time.",
  icon: "/images/components/support_icon.svg",
},
];

export function Services() {
  return (
    <section
      className="relative flex w-full flex-col items-start py-24"
      aria-labelledby="services-heading"
    >
      <SectionHeading
        id="services-heading"
        title="SERVICES I OFFER"
        className="mb-10"
      />

      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        {services.map((service, index) => {
          // Define borders for the 2x2 desktop grid
          const isLeft = index % 2 === 0;
          const isTop = index < 2;

          return (
            <article
              key={service.id}
              className={`flex flex-col gap-6 py-4 px-0 lg:px-6 border-border ${
                index === 0 ? "" : "border-t"
              } ${
                isTop ? "lg:border-t-0" : "lg:border-t"
              } ${
                isLeft ? "lg:border-r" : ""
              }`}
              aria-labelledby={`${service.id}-title`}
            >
              <div className="flex h-10 w-10 items-center justify-start">
                <Image
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="h-[40px] w-[40px] object-contain"
                />
              </div>
              
              <div className="flex flex-col gap-4">
                <h3
                  id={`${service.id}-title`}
                  className="font-sans text-h5 font-normal leading-tight text-white/90"
                >
                  {service.title}
                </h3>
                <p className="text-body-sm md:text-body leading-relaxed text-grayLight">
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
