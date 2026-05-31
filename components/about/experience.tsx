import { aboutContent } from "@/lib/about";

export function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <ol className="mt-6 space-y-8">
        {aboutContent.experience.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="border-l-2 border-border pl-6"
          >
            <p className="text-sm text-muted">{item.period}</p>
            <h3 className="mt-1 font-semibold">{item.role}</h3>
            <p className="text-sm text-muted">{item.company}</p>
            <p className="mt-2 text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
