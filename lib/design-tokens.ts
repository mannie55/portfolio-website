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

  // Rhino Color Scale (Blue-Gray)
  rhinoLightest: "#516CA7",
  rhinoLighter: "#475F91",
  rhinoLight: "#3E517A",
  rhino: "#344365",
  rhinoDark: "#293550",
  rhinoDarker: "#222837",
  rhinoDarkest: "#171A22",
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

  // Background
  background: colorPrimitives.rhinoDarkest,
  foreground: colorPrimitives.rhinoDarker,

  // Accent
  accent: colorPrimitives.gold,
  accentForeground: colorPrimitives.white,

  // Borders
  border: colorPrimitives.rhinoDarker,
  borderLight: colorPrimitives.rhinoDark,
  borderLighter: colorPrimitives.rhino,
  borderLightest: colorPrimitives.rhinoLighter,
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
    desktop: { fontSize: `${typographyDesktop.h1}px` },
    mobile: { fontSize: `${typographyMobile.h1}px` },
  },
  h2: {
    desktop: { fontSize: `${typographyDesktop.h2}px` },
    mobile: { fontSize: `${typographyMobile.h2}px` },
  },
  h3: {
    desktop: { fontSize: `${typographyDesktop.h3}px` },
    mobile: { fontSize: `${typographyMobile.h3}px` },
  },
  h4: {
    desktop: { fontSize: `${typographyDesktop.h4}px` },
    mobile: { fontSize: `${typographyMobile.h4}px` },
  },
  h5: {
    desktop: { fontSize: `${typographyDesktop.h5}px` },
    mobile: { fontSize: `${typographyMobile.h5}px` },
  },
  h6: {
    desktop: { fontSize: `${typographyDesktop.h6}px` },
    mobile: { fontSize: `${typographyMobile.h6}px` },
  },
  textLarge: {
    desktop: { fontSize: `${typographyDesktop.textLarge}px` },
    mobile: { fontSize: `${typographyMobile.textLarge}px` },
  },
  textMedium: {
    desktop: { fontSize: `${typographyDesktop.textMedium}px` },
    mobile: { fontSize: `${typographyMobile.textMedium}px` },
  },
  textRegular: {
    desktop: { fontSize: `${typographyDesktop.textRegular}px` },
    mobile: { fontSize: `${typographyMobile.textRegular}px` },
  },
  textSmall: {
    desktop: { fontSize: `${typographyDesktop.textSmall}px` },
    mobile: { fontSize: `${typographyMobile.textSmall}px` },
  },
  textTiny: {
    desktop: { fontSize: `${typographyDesktop.textTiny}px` },
    mobile: { fontSize: `${typographyMobile.textTiny}px` },
  },
} as const;
