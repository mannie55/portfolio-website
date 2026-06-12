import { aboutContent } from "@/lib/about";

export function Skills() {
  return (
    <section>
      <h2 className="text-h3">Skills & tools</h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {aboutContent.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-surface px-3 py-1 text-body-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
