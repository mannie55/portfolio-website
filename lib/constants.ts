export const siteConfig = {
  name: "Nnamdi Ogbonna | Webflow",
  description: "Helping modern businesses build credible digital experiences that earn trust and drive growth.",
  url: "https://mannie55.github.io/portfolio-website",
  author: "Nnamdi Ogbonna",
  title: "Building Digital Presence That Matters",
} as const;

export const heroContent = {
  headline: "BUILDING DIGITAL PRESENCE THAT MATTERS",
  description: "Helping modern businesses build credible digital experiences that earn trust and drive growth.",
  cta: "Let's talk",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
] as const;

export const email = "ogbonnannamdi.pro@gmail.com";

export const calComUrl = "https://cal.com/nnamdi-ogbonna-zli8s4/30min";

export const socialLinks = [
  { href: "https://github.com/mannie55/", label: "GitHub" },
  { href: "https://www.linkedin.com/in/nnamdiogbonna/", label: "LinkedIn" },
  { href: `mailto:${email}`, label: "Email" },
] as const;
