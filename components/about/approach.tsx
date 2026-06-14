import { aboutContent } from "@/lib/about";

export function Approach() {
  return (
    <section>
      <h2 className="text-h3">How I Work</h2>
      <ol className="mt-6 space-y-8">
        {aboutContent.approach.map((item) => (
          <li
            key={item.title}
            className="border-l-2 border-border pl-6"
          >
            <h3 className="mt-1 text-h5 text-foreground">{item.title}</h3>
            <p className="mt-2 text-body text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
