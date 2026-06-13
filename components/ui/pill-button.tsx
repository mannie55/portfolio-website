import Link from "next/link";
import Image from "next/image";

interface PillButtonProps {
  href: string;
  label: string;
  className?: string;
  iconSrc?: string;
  variant?: "white" | "outline";
}

export function PillButton({
  href,
  label,
  className = "",
  iconSrc = "/images/components/arrow_right_dark.svg",
  variant = "white",
}: PillButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-3 px-4 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2";
  
  const variantStyles = {
    white: "bg-white text-text-dark",
    outline: "border border-border bg-transparent text-white hover:bg-white/5",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={label}
    >
      <span className="text-body-sm font-medium whitespace-nowrap uppercase tracking-wider">
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
    </Link>
  );
}
