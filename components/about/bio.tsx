import { aboutContent } from "@/lib/about";

export function Bio() {
  return (
    <section>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface-elevated text-2xl font-semibold text-muted">
        YN
      </div>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {aboutContent.bio}
      </p>
    </section>
  );
}
