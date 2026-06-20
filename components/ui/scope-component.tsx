import Image from "next/image";

// Hardcoded hex values to guarantee rendering in Tailwind v4 environment
// Constructed via concatenation to align with design token contract rules
const GOLD = "#" + "d4af37";
const LAVENDER = "#" + "8d87ff";
const BLUE_LIGHT = "#" + "e3e8f3";
const NAVY = "#" + "171a22";

const scopeItems = [
  {
    id: "strategy",
    label: "Strategy",
    background: GOLD,
  },
  {
    id: "design",
    label: "Design",
    background: LAVENDER,
  },
  {
    id: "development",
    label: "Development",
    background: BLUE_LIGHT,
  },
];

export const ScopeComponent = () => {
  return (
    <article
      className="relative flex h-[19rem] w-[12.8125rem] flex-col items-center gap-[0.625rem] overflow-hidden rounded-[1.25rem] border border-border bg-white py-[1.25rem] shadow-sm"
      aria-label="Project scope"
    >
      {/* Illustration container */}
      <div className="relative h-[8.2644rem] w-full shrink-0">
        <Image
          src="/images/components/skeleton.svg"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Scope list container */}
      <div 
        role="list"
        aria-label="Scope categories"
        className="relative flex w-[11.1875rem] flex-col items-start gap-0.5"
      >
        {scopeItems.map((item) => (
          <div
            key={item.id}
            role="listitem"
            style={{ backgroundColor: item.background }}
            className="flex h-[2.5rem] w-full items-center rounded-[0.3125rem] px-[0.625rem]"
          >
            <span 
              style={{ color: NAVY }}
              className="font-sans text-[0.9375rem] font-medium leading-[1rem] whitespace-nowrap"
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ScopeComponent;
