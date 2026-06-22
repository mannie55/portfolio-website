import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : siteConfig.url;

const metadataBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(metadataBaseUrl),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: ["images/nnamdi_profile.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["images/nnamdi_profile.png"],
  },
  verification: {
    google: "m8D6iYi_ijbkqcsJPu9epLQueKzgov5NoIl19_OUu3I",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
