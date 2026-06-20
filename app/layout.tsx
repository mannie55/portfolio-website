import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { siteConfig } from "@/lib/constants";
import { colorSemantic } from "@/lib/design-tokens";

import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const thunder = localFont({
  src: "../public/fonts/thunder/Thunder-VF.woff2",
  variable: "--font-thunder",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: colorSemantic.background,
  colorScheme: "dark",
};

import { SmoothScroller } from "@/components/layout/smooth-scroller";
import { GlobalTextReveal } from "@/components/layout/global-text-reveal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${geistMono.variable} ${thunder.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <SmoothScroller>
          <main className="flex flex-1 flex-col pt-[72px]">{children}</main>
          <Footer />
        </SmoothScroller>
        <CursorFollower />
        <GlobalTextReveal />
      </body>
    </html>
  );
}
