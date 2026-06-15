import Link from "next/link";
import Image from "next/image";

type PillButtonBaseProps = {
  label: string;
  className?: string;
  iconSrc?: string;
  variant?: "white" | "outline";
  disabled?: boolean;
};

type PillButtonAsLink = PillButtonBaseProps & {
  href: string;
  type?: never;
};

type PillButtonAsButton = PillButtonBaseProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type PillButtonProps = PillButtonAsLink | PillButtonAsButton;

export function PillButton(props: PillButtonProps) {
  const {
    label,
    className = "",
    iconSrc = "/images/components/arrow_right_dark.svg",
    variant = "white",
    disabled = false,
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center gap-3 px-4 py-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  const variantStyles = {
    white: "bg-white text-text-dark",
    outline: "border border-border bg-transparent text-white",
  };

  const content = (
    <>
      <span className="text-body-sm md:text-body font-medium whitespace-nowrap uppercase tracking-wider">
        {label}
      </span>
      <div className="flex h-[29px] w-[29px] shrink-0 items-center justify-center">
        <Image
          src={iconSrc}
          alt=""
          width={29}
          height={29}
          aria-hidden="true"
        />
      </div>
    </>
  );

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href } = props;
    return (
      <Link
        href={href}
        className={combinedClassName}
        aria-label={label}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", onClick } = props as PillButtonAsButton;

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {content}
    </button>
  );
}
