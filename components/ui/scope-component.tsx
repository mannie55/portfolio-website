import Image from "next/image";

const scopeItems = [
  {
    id: "strategy",
    label: "Strategy",
    backgroundClass: "bg-gold",
  },
  {
    id: "design",
    label: "Design",
    backgroundClass: "bg-lavender",
  },
  {
    id: "development",
    label: "Development",
    backgroundClass: "bg-blueLight",
  },
];

export const ScopeComponent = (): JSX.Element => {
  return (
    <section
      className="relative flex h-[19rem] flex-col items-center gap-[0.625rem] overflow-x-hidden bg-white px-0 py-[1.25rem]"
      aria-label="Project scope"
    >
      <div className="relative ml-[-0.005rem] mr-[-0.005rem] h-[8.2644rem] w-[12.8231rem]">
        <Image
          src="/images/components/skeleton.svg"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain"
        />
      </div>
      
      <div 
        role="list"
        aria-label="Scope categories"
        className="relative mb-[-0.1394rem] flex h-[7.75rem] w-[11.1875rem] flex-col items-start gap-[0.125rem]"
      >
        {scopeItems.map((item) => (
          <div
            key={item.id}
            role="listitem"
            className={`relative flex h-[2.5rem] w-full items-center gap-[0.625rem] self-stretch rounded-[0.3125rem] px-[0.625rem] py-0 ${item.backgroundClass}`}
          >
            <div className="relative flex w-fit items-center whitespace-nowrap font-sans text-[0.9375rem] font-medium leading-[1rem] tracking-[0] text-rhino">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScopeComponent;
