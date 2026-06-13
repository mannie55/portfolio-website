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
      aria-label="Project scope"
      className="relative flex flex-col items-center gap-[1.5rem] overflow-hidden bg-white py-[1.25rem]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/bg_grid.svg')] bg-cover bg-center"
      />

      {/* Illustration */}
      <div className="relative z-10">
        <Image
          src="/images/components/skeleton.svg"
          alt=""
          aria-hidden="true"
          width={206}
          height={133}
          className="pointer-events-none select-none"
        />
      </div>

      {/* Scope list */}
      <div
        role="list"
        aria-label="Scope categories"
        className="relative z-10 flex w-[11.25rem] flex-col gap-[0.5rem]"
      >
        {scopeItems.map((item) => (
          <div
            key={item.id}
            role="listitem"
            className={`flex h-[2.5rem] items-center rounded-md px-[0.75rem] ${item.backgroundClass}`}
          >
            <span className="text-[0.9375rem] font-medium text-rhino">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScopeComponent;
