/**
 * Design System Tokens
 * Extracted from Figma design system and source of truth for all styling.
 * Update these values in one place to cascade across the entire app.
 */

// ============================================================================
// COLORS - PRIMITIVES
// ============================================================================

export const colorPrimitives = {
  white: "#FFFFFF",
  gold: "#D4AF37",
  lavender: "#8D87FF",
  blueLight: "#E3E8F3",
  blueLighter: "#ECEDEF",
  blueGray: "#DEDFE1",
  grayLight: "#ECECEC",

  // Rhino Color Scale (Blue-Gray)
  rhinoLightest: "#516CA7",
  rhinoLighter: "#475F91",
  rhinoLight: "#3E517A",
  rhino: "#344365",
  rhinoDark: "#293550",
  rhinoDarker: "#222837",
  rhinoDarkest: "#171A22",

  // New Border Primitives
  borderBase: "#414348",
  borderLight: "#4B4D51",
  borderLighter: "#555555",
} as const;

// ============================================================================
// COLORS - OPACITY VARIANTS
// ============================================================================

export const colorOpacity = {
  white30: "rgba(255, 255, 255, 0.30)",
  white40: "rgba(255, 255, 255, 0.40)",
  white50: "rgba(255, 255, 255, 0.50)",
  white60: "rgba(255, 255, 255, 0.60)",
  white70: "rgba(255, 255, 255, 0.70)",
  white80: "rgba(255, 255, 255, 0.80)",
} as const;

// ============================================================================
// COLORS - SEMANTIC (Color Scheme 1)
// ============================================================================

export const colorSemantic = {
  // Text colors
  text: colorPrimitives.white,
  textMuted: "rgba(255, 255, 255, 0.90)",
  textDark: colorPrimitives.rhinoDarkest,

  // Background
  background: colorPrimitives.rhinoDarkest,
  foreground: colorPrimitives.rhinoDarker,

  // Accent
  accent: colorPrimitives.gold,
  accentForeground: colorPrimitives.white,

  // Borders
  border: colorPrimitives.borderBase,
  borderLight: colorPrimitives.borderLight,
  borderLighter: colorPrimitives.borderLighter,
} as const;

// ============================================================================
// TYPOGRAPHY - FONT SIZES
// ============================================================================

export const typographyDesktop = {
  h1: 140,
  h2: 60,
  h3: 40,
  h4: 28,
  h5: 24,
  h6: 22,
  textXLarge: 24,
  textLarge: 20,
  textMedium: 18,
  textRegular: 16,
  textSmall: 14,
  textTiny: 12,
} as const;

export const typographyMobile = {
  h1: 40,
  h2: 36,
  h3: 32,
  h4: 24,
  h5: 20,
  h6: 18,
  textXLarge: 20,
  textLarge: 18,
  textMedium: 16,
  textRegular: 16,
  textSmall: 14,
  textTiny: 12,
} as const;

// ============================================================================
// SPACING & SIZING - DESKTOP
// ============================================================================

export const spacingDesktop = {
  // Containers
  containerLarge: 1360,
  containerMedium: 1024,
  containerSmall: 768,

  // Max widths
  maxWidthXxlarge: 1360,
  maxWidthXlarge: 1024,
  maxWidthLarge: 768,
  maxWidthMedium: 560,
  maxWidthSmall: 480,
  maxWidthXsmall: 400,
  maxWidthXxsmall: 320,

  // Padding
  paddingGlobal: 64,
  paddingSectionLarge: 112,
  paddingSectionMedium: 80,
  paddingSectionSmall: 48,
} as const;

// ============================================================================
// SPACING & SIZING - MOBILE
// ============================================================================

export const spacingMobile = {
  // Containers
  containerLarge: 1280,
  containerMedium: 1024,
  containerSmall: 768,

  // Max widths
  maxWidthXxlarge: 1280,
  maxWidthXlarge: 1024,
  maxWidthLarge: 768,
  maxWidthMedium: 560,
  maxWidthSmall: 480,
  maxWidthXsmall: 400,
  maxWidthXxsmall: 320,

  // Padding
  paddingGlobal: 20,
  paddingSectionLarge: 64,
  paddingSectionMedium: 48,
  paddingSectionSmall: 32,
} as const;

// ============================================================================
// UI PRIMITIVES
// ============================================================================

export const uiPrimitives = {
  // Border radius
  radiusSmall: 8,
  radiusMedium: 8,
  radiusLarge: 8,

  // Strokes
  borderWidth: 1,
  dividerWidth: 1,
} as const;

// ============================================================================
// TYPOGRAPHY - COMPLETE STYLES (For Tailwind)
// ============================================================================

export const typographyStyles = {
  h1: {
    desktop: { fontSize: `${typographyDesktop.h1 / 16}rem` },
    mobile: { fontSize: `${typographyMobile.h1 / 16}rem` },
  },
  h2: {
    desktop: { fontSize: `${typographyDesktop.h2 / 16}rem` },
    mobile: { fontSize: `${typographyMobile.h2 / 16}rem` },
  },
  h3: {
    desktop: { fontSize: `${typographyDesktop.h3 / 16}rem` },
    mobile: { fontSize: `${typographyMobile.h3 / 16}rem` },
  },
  h4: {
    desktop: { fontSize: `${typographyDesktop.h4 / 16}rem` },
    mobile: { fontSize: `${typographyMobile.h4 / 16}rem` },
  },
  h5: {
    desktop: { fontSize: `${typographyDesktop.h5 / 16}rem` },
    mobile: { fontSize: `${typographyMobile.h5 / 16}rem` },
  },
  h6: {
    desktop: { fontSize: `${typographyDesktop.h6 / 16}rem` },
    mobile: { fontSize: `${typographyMobile.h6 / 16}rem` },
  },
  textXLarge: {
    desktop: { fontSize: `${typographyDesktop.textXLarge / 16}rem` },
    mobile: { fontSize: `${typographyMobile.textXLarge / 16}rem` },
  },
  textLarge: {
    desktop: { fontSize: `${typographyDesktop.textLarge / 16}rem` },
    mobile: { fontSize: `${typographyMobile.textLarge / 16}rem` },
  },
  textMedium: {
    desktop: { fontSize: `${typographyDesktop.textMedium / 16}rem` },
    mobile: { fontSize: `${typographyMobile.textMedium / 16}rem` },
  },
  textRegular: {
    desktop: { fontSize: `${typographyDesktop.textRegular / 16}rem` },
    mobile: { fontSize: `${typographyMobile.textRegular / 16}rem` },
  },
  textSmall: {
    desktop: { fontSize: `${typographyDesktop.textSmall / 16}rem` },
    mobile: { fontSize: `${typographyMobile.textSmall / 16}rem` },
  },
  textTiny: {
    desktop: { fontSize: `${typographyDesktop.textTiny / 16}rem` },
    mobile: { fontSize: `${typographyMobile.textTiny / 16}rem` },
  },
} as const;
