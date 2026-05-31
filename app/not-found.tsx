import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Go home</Button>
        <Button href="/case-studies" variant="secondary">
          View case studies
        </Button>
      </div>
    </PageContainer>
  );
}
