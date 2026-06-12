import type { Config } from "tailwindcss";
import {
  colorPrimitives,
  colorSemantic,
  spacingDesktop,
  uiPrimitives,
} from "./lib/design-tokens";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primitives
        white: colorPrimitives.white,
        gold: colorPrimitives.gold,

        // Rhino scale
        "rhino-lightest": colorPrimitives.rhinoLightest,
        "rhino-lighter": colorPrimitives.rhinoLighter,
        "rhino-light": colorPrimitives.rhinoLight,
        rhino: colorPrimitives.rhino,
        "rhino-dark": colorPrimitives.rhinoDark,
        "rhino-darker": colorPrimitives.rhinoDarker,
        "rhino-darkest": colorPrimitives.rhinoDarkest,

        // Semantic
        foreground: colorSemantic.text,
        "foreground-muted": colorSemantic.textMuted,
        background: colorSemantic.background,
        "surface-primary": colorSemantic.foreground,
        accent: colorSemantic.accent,
        "accent-foreground": colorSemantic.accentForeground,

        // Borders
        border: colorSemantic.border,
        "border-light": colorSemantic.borderLight,
        "border-lighter": colorSemantic.borderLighter,
        "border-lightest": colorSemantic.borderLightest,

        // Text
        "text-default": colorSemantic.text,
        "text-muted": colorSemantic.textMuted,
        "text-dark": colorSemantic.textDark,
      },
      maxWidth: {
        "container-xxlarge": `${spacingDesktop.maxWidthXxlarge}px`,
        "container-xlarge": `${spacingDesktop.maxWidthXlarge}px`,
        "container-large": `${spacingDesktop.maxWidthLarge}px`,
        "container-medium": `${spacingDesktop.maxWidthMedium}px`,
        "container-small": `${spacingDesktop.maxWidthSmall}px`,
        "container-xsmall": `${spacingDesktop.maxWidthXsmall}px`,
        "container-xxsmall": `${spacingDesktop.maxWidthXxsmall}px`,
      },
      spacing: {
        "padding-global": `${spacingDesktop.paddingGlobal}px`,
        "padding-section-lg": `${spacingDesktop.paddingSectionLarge}px`,
        "padding-section-md": `${spacingDesktop.paddingSectionMedium}px`,
        "padding-section-sm": `${spacingDesktop.paddingSectionSmall}px`,
      },
      borderRadius: {
        xs: `${uiPrimitives.radiusSmall}px`,
        sm: `${uiPrimitives.radiusMedium}px`,
        md: `${uiPrimitives.radiusLarge}px`,
      },
      borderWidth: {
        DEFAULT: `${uiPrimitives.borderWidth}px`,
        divider: `${uiPrimitives.dividerWidth}px`,
      },
      opacity: {
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      80: "0.8",
      },
      keyframes: {
      marquee: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
      "marquee-reverse": {
        "0%": { transform: "translateX(-50%)" },
        "100%": { transform: "translateX(0)" },
      },
      },
      animation: {
      marquee: "marquee var(--duration, 30s) linear infinite",
      "marquee-reverse": "marquee-reverse var(--duration, 30s) linear infinite",
      },
      },
      },
      plugins: [],
      };
export default config;
