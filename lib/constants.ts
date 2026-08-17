export const siteConfig = {
  name: "Nnamdi Ogbonna | Webflow",
  description: "Helping modern businesses build credible digital experiences that earn trust and drive growth.",
  url: "https://nnamdiogbonna.com",
  author: "Nnamdi Ogbonna",
  title: "Building Digital Presence That Matters",
} as const;

export const heroContent = {
  headline: "FROM DESIGN TO DEPLOYMENT",
  description: "I help founders launch faster and agencies scale their bandwidth by building pixel-perfect, high-performance sites in Next.js and Webflow.",
  cta: "Book a discovery call",
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
  { href: "https://x.com/Chris_ogbona", label: "X" },
] as const;
