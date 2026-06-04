import { aboutContent } from "@/lib/about";

export function Bio() {
  return (
    <section>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface-elevated text-h5 font-semibold text-muted">
        YN
      </div>
      <p className="mt-6 max-w-container-large text-body-lg text-muted">
        {aboutContent.bio}
      </p>
    </section>
  );
}
