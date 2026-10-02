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
    "Good design isn't just about aesthetics; it's about reducing friction and driving action. I create strategic, user-centric interfaces that align directly with your business goals—guiding visitors naturally toward conversion while building a brand identity that commands trust.",
  icon: "/images/components/figma_icon.svg",
},
{
  id: "webflow-development",
  title: "Website Development (Webflow)",
  description:
    "Your website is your best salesperson, but only if people can find it. I build blazing-fast Webflow sites engineered from the ground up for technical SEO and modern Answer Engine Optimization (AEO). The result? A pixel-perfect, highly visible site with a CMS your team will actually love using.",
  icon: "/images/components/webflow_icon.svg",
},
{
  id: "nextjs-development",
  title: "Website & Web App Development (Next.js)",
  description:
    "For complex requirements and SaaS platforms, standard builders aren't enough. I engineer robust, scalable web applications using Next.js. I handle the hard stuff—authentication, database integrations, and dynamic server rendering—delivering a secure product built to scale with your user base.",
  icon: "/images/components/nextjs_icon.svg",
},
{
  id: "ongoing-support",
  title: "Ongoing Support & Maintenance",
  description:
    "The web moves fast, and your digital presence shouldn't be left to stagnate. I partner with you post-launch to monitor analytics, run performance audits, implement security patches, and iteratively ship new features so your platform stays competitive and continues to grow.",
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
