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
    Tag === "h1"
      ? "text-3xl font-semibold tracking-tight sm:text-4xl"
      : "text-2xl font-semibold tracking-tight";

  return (
    <div className={className}>
      <Tag className={headingClass}>{title}</Tag>
      {description ? (
        <p className="mt-3 max-w-2xl text-muted">{description}</p>
      ) : null}
    </div>
  );
}
