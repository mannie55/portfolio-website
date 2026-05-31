export const siteConfig = {
  name: "Portfolio",
  description: "Personal portfolio showcasing selected work and case studies.",
  url: "https://portfolio.example.com",
  author: "Your Name",
  title: "Developer & Designer",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
] as const;

export const email = "hello@example.com";

export const calComUrl = "https://cal.com/yourusername/30min";

export const socialLinks = [
  { href: "https://github.com/yourusername", label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { href: `mailto:${email}`, label: "Email" },
] as const;
