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
    "I design intuitive, user-centered interfaces that are visually engaging and easy to use. By combining thoughtful user experience with clean interface design, I create digital products that are both memorable and effective.",
  icon: "/images/components/figma_icon.svg",
},
{
  id: "webflow-development",
  title: "Website Development (Webflow)",
  description:
    "I design and build fast, scalable, and conversion-focused websites using Webflow. From Figma to a fully responsive live site, I ensure a clean structure, seamless performance, and an easy-to-manage CMS, so your website works as hard as your business.",
  icon: "/images/components/webflow_icon.svg",
},
{
  id: "nextjs-development",
  title: "Website & Web App Development (Next.js)",
  description:
    "I build fast, scalable, and modern websites and web applications using Next.js. Whether it's a marketing website, SaaS platform, or custom application, I focus on performance, maintainability, and a smooth user experience.",
  icon: "/images/components/nextjs_icon.svg",
},
{
  id: "ongoing-support",
  title: "Ongoing Support & Maintenance",
  description:
    "Your website doesn't stop evolving after launch. I provide ongoing support, including updates, bug fixes, performance optimization, security improvements, and new feature development to keep your website running at its best.",
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
