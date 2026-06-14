"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CTASection } from "@/components/home/cta-section";
import { email, siteConfig, socialLinks } from "@/lib/constants";

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
      showCTA: false,
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
        <ul className="flex flex-wrap gap-4">
          {socialLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-body-sm text-muted transition-colors hover:text-foreground"
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </Link>
            </li>
          ))}
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
