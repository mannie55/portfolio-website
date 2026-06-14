import { PageContainer } from "@/components/layout/page-container";
import { PillButton } from "@/components/ui/pill-button";

export default function NotFound() {
  return (
    <PageContainer>
      <h1 className="text-h3 font-semibold">Page not found</h1>
      <p className="mt-4 text-body text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <PillButton href="/" label="Go home" variant="white" />
        <PillButton href="/case-studies" label="View case studies" variant="outline" />
      </div>
    </PageContainer>
  );
}
