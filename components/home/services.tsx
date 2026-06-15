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
      "User Experience Design and User Interface Design are some of the most important skill-sets that help make an app or web-app stand out from the crowd. I ensure your designs are intuitive, compelling, and memorable makes all the difference.",
    icon: "/images/components/figma_icon.svg",
  },
  {
    id: "webflow-development",
    title: "Website Development (WEBFLOW)",
    description:
      "I design and build fast, scalable, and conversion-focused websites using Webflow. From Figma to live site, I ensure clean structure, responsive design, and easy updates, so your website not only looks great but works for your business.",
    icon: "/images/components/webflow_icon.svg",
  },
  {
    id: "nextjs-development",
    title: "Website/WebApp Development (Nextjs)",
    description:
      "I create interactive, visually stunning websites with Framer, perfect for startups and brands that want bold design, smooth animations, and flexibility. With Framer, I bring ideas to life quickly, blending creativity with performance.",
    icon: "/images/components/nextjs_icon.svg",
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support",
    description:
      "Ongoing support for your web app, including regular updates, bug fixes, performance optimization, and ongoing improvements. Ensuring your app remains secure, scalable, and up-to-date with the latest features.",
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
        title="SERVICES I OFFER"
        className="mb-10"
      />

      <div className="grid w-full grid-cols-1">
        {services.map((service, index) => {
          return (
            <article
              key={service.id}
              className={`flex flex-col gap-6 py-4 px-0 border-border ${
                index === 0 ? "" : "border-t"
              }`}
              aria-labelledby={`${service.id}-title`}
            >
              <div className="flex h-10 w-10 items-center justify-start">
                <Image
                  src={service.icon}
                  alt=""
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
