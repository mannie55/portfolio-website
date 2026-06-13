import Image from "next/image";

const goalRows = [
  {
    id: "business-goals",
    label: "Business goals",
    barWidthClass: "w-[8rem]", // 128px
  },
  {
    id: "project-scope",
    label: "Project scope",
    barWidthClass: "w-[8.0625rem]", // 129px
  },
];

export const DiscoveryComponent = () => {
  return (
    <article
      aria-label="Discovery card"
      className="relative flex h-[8.625rem] w-[15.25rem] flex-col"
    >
      {/* Background images */}
      <div className="absolute top-2 -left-5 z-0 h-[9.1875rem] w-[15.25rem]">
        <Image
          src="/images/components/discovery_fake_one.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-[0.5625rem] left-[-0.5625rem] z-0 h-[8.625rem] w-[14.9375rem]">
        <Image
          src="/images/components/discovery_fake_two.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
        />
      </div>

      {/* Card */}
      <div className="relative z-10 flex h-full flex-col rounded-[1.25rem] border border-black/10 bg-white px-4 py-2.5 shadow-sm">
        <div className="flex flex-1 flex-col justify-between">
          {/* Header */}
          <div>
            <div className="text-[0.5625rem] font-bold text-black/30">
              Zenlify
            </div>

            <div className="mt-3 space-y-2">
              {goalRows.map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between border-b border-blueLighter pb-2"
                >
                  <span className="text-[0.5625rem] font-bold text-slate-700">
                    {row.label}
                  </span>

                  <div
                    className={`h-[0.625rem] rounded-full bg-blueGray ${row.barWidthClass}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[0.5625rem] font-bold text-slate-500">
                Due:
              </div>

              <div className="flex items-center gap-1">
                <Image
                  src="/images/components/calender_icon.svg"
                  alt="Calendar icon"
                  width={10}
                  height={10}
                  className="h-[0.625rem] w-[0.625rem]"
                />

                <time
                  dateTime="2024-08-30"
                  className="text-[0.5625rem] font-bold text-slate-400"
                >
                  Aug 30
                </time>
              </div>
            </div>

            <div
              aria-label="Assignee"
              className="flex items-center gap-2"
            >
              <Image
                src="/images/components/assignee-arrow.svg"
                alt=""
                aria-hidden="true"
                width={13}
                height={8}
                className="h-[0.5rem] w-[0.8125rem]"
              />

              <Image
                src="/images/components/assignee_icon.svg"
                alt="Assignee avatar"
                width={18}
                height={18}
                className="h-[1.125rem] w-[1.125rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
