import Link from "next/link";

import { siteConfig, socialLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-container-xxlarge flex-col gap-4 px-page py-6 sm:flex-row sm:items-center sm:justify-between">
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
}
