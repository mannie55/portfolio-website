"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CTASection } from "@/components/home/cta-section";
import { email, siteConfig, socialLinks } from "@/lib/constants";

const iconMap: Record<string, string> = {
  GitHub: "/images/components/github_icon.svg",
  LinkedIn: "/images/components/linkedin_icon.svg",
  Email: "/images/components/email_icon.svg",
};

interface FooterCTAConfig {
  showCTA: boolean;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

function getCTAConfig(pathname: string): FooterCTAConfig {
  if (pathname === "/") {
    return {
      showCTA: true,
    };
  }
  if (pathname === "/about") {
    return {
      showCTA: true,
    };
  }
  if (pathname === "/contact") {
    return {
      showCTA: true,
      title: "got a project in mind?",
      ctaLabel: "Email me directly",
      ctaHref: `mailto:${email}`,
    };
  }
  if (pathname.startsWith("/case-studies")) {
    return {
      showCTA: true,
      title: "got a project in mind?",
    };
  }
  // Default fallback (e.g. for 404 pages / not-found)
  return {
    showCTA: false,
  };
}

export function Footer() {
  const pathname = usePathname();
  const ctaConfig = getCTAConfig(pathname || "/");

  const baseFooter = (
    <footer className="mt-auto border-t border-border" data-testid="base-footer">
      <div className="mx-auto flex max-w-container-xxlarge flex-col gap-4 px-page xl:px-0 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-body-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <ul className="flex flex-wrap gap-4 items-center">
          {socialLinks.map(({ href, label }) => {
            const iconSrc = iconMap[label];
            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  className="block hover:opacity-80 transition-opacity"
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt=""
                      aria-hidden="true"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-[10px]"
                    />
                  ) : (
                    <span className="text-body-sm text-muted">{label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );

  if (ctaConfig.showCTA) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-container-xxlarge flex-col px-page py-24 xl:px-0" data-testid="footer-cta-wrapper">
        <CTASection
          title={ctaConfig.title}
          ctaLabel={ctaConfig.ctaLabel}
          ctaHref={ctaConfig.ctaHref}
          showFooter={true}
        />
        {baseFooter}
      </div>
    );
  }

  return baseFooter;
}
