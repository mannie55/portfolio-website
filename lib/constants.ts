export const siteConfig = {
  name: "Portfolio",
  description: "Helping modern businesses build credible digital experiences that earn trust and drive growth.",
  url: "https://portfolio.example.com",
  author: "Nnamdi Ogbonna",
  title: "Building Digital Presence That Matters",
} as const;

export const heroContent = {
  headline: "BUILDING DIGITAL PRESENCE THAT MATTERS",
  description: "Helping modern businesses build credible digital experiences that earn trust and drive growth.",
  cta: "lets talk",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
] as const;

export const email = "hello@example.com";

export const calComUrl = "https://cal.com/nnamdi-ogbonna-zli8s4/30min";

export const socialLinks = [
  { href: "https://github.com/yourusername", label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { href: `mailto:${email}`, label: "Email" },
] as const;
