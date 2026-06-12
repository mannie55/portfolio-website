import Link from "next/link";
import Image from "next/image";

interface AButtonSecondaryProps {
  href?: string;
  label?: string;
  className?: string;
}

export const AButtonSecondary = ({ 
  href = "/contact", 
  label = "Book a strategy call",
  className = ""
}: AButtonSecondaryProps) => {
  return (
    <Link
      href={href}
      className={`relative inline-flex max-w-screen-sm items-center justify-center gap-2.5 overflow-hidden rounded-full bg-accent px-4 py-3 no-underline transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent ${className}`}
      aria-label={`${label}`}
    >
      <span className="relative inline-flex flex-[0_0_auto] flex-col items-start">
        <span className="relative flex w-fit items-center whitespace-nowrap text-body-sm font-semibold uppercase tracking-wide text-white">
          {label}
        </span>
      </span>
      <span className="flex-shrink-0">
        <Image
          src="/images/components/phone_icon.svg"
          alt=""
          width={30}
          height={30}
        />
      </span>
    </Link>
  );
};

export default AButtonSecondary;
