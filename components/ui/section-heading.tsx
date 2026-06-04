type SectionHeadingProps = {
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const headingClass =
    Tag === "h1" ? "text-h2 font-semibold" : "text-h3 font-semibold";

  return (
    <div className={className}>
      <Tag className={headingClass}>{title}</Tag>
      {description ? (
        <p className="mt-3 max-w-container-large text-body text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
