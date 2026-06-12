type SectionHeadingProps = {
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  descriptionClassName?: string;
  id?: string;
};

export function SectionHeading({
  title,
  description,
  as: Tag = "h2",
  className,
  descriptionClassName,
  id,
}: SectionHeadingProps) {
  const headingClass = Tag === "h1" ? "text-h2" : "text-h3";

  return (
    <div className={className}>
      <Tag id={id} className={headingClass}>{title}</Tag>
      {description ? (
        <p className={`mt-3 max-w-container-large text-body-lg text-muted ${descriptionClassName || ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
