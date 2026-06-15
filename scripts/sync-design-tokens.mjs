import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TS_FILE = 'lib/design-tokens.ts';
const CSS_FILE = 'app/globals.css';

function extractObject(content, name) {
  const regex = new RegExp(`export const ${name} = ({[\\s\\S]*?}) as const;`);
  const match = content.match(regex);
  if (!match) return {};
  
  const objStr = match[1];
  // Simple parser for key-value pairs, handling nested colors and expressions
  const pairs = objStr.matchAll(/(\w+):\s*(?:colorPrimitives\.)?([^"',\n\s]+|["'][^"']+["']),?/g);
  const obj = {};
  for (const [_, key, value] of pairs) {
    obj[key] = value.trim().replace(/["']/g, '');
  }
  return obj;
}

function sync() {
  const tsContent = readFileSync(TS_FILE, 'utf8');
  const cssContent = readFileSync(CSS_FILE, 'utf8');

  const colorPrimitives = extractObject(tsContent, 'colorPrimitives');
  const colorOpacity = extractObject(tsContent, 'colorOpacity');
  const typographyDesktop = extractObject(tsContent, 'typographyDesktop');
  const typographyMobile = extractObject(tsContent, 'typographyMobile');
  const spacingDesktop = extractObject(tsContent, 'spacingDesktop');
  const spacingMobile = extractObject(tsContent, 'spacingMobile');
  const uiPrimitives = extractObject(tsContent, 'uiPrimitives');
  const colorSemantic = extractObject(tsContent, 'colorSemantic');

  // Helper for rhino color resolution
  const resolveValue = (val) => {
    if (colorPrimitives[val]) return colorPrimitives[val];
    return val;
  };

  const toRem = (val) => {
    const num = Number(val);
    if (isNaN(num)) return val;
    return `${num / 16}rem`;
  };

  const desktopTokens = [
    `--ds-color-white: ${colorPrimitives.white};`,
    `--ds-color-gold: ${colorPrimitives.gold};`,
    `--ds-color-rhino-lightest: ${colorPrimitives.rhinoLightest};`,
    `--ds-color-rhino-lighter: ${colorPrimitives.rhinoLighter};`,
    `--ds-color-rhino-light: ${colorPrimitives.rhinoLight};`,
    `--ds-color-rhino: ${colorPrimitives.rhino};`,
    `--ds-color-rhino-dark: ${colorPrimitives.rhinoDark};`,
    `--ds-color-rhino-darker: ${colorPrimitives.rhinoDarker};`,
    `--ds-color-rhino-darkest: ${colorPrimitives.rhinoDarkest};`,
    `--ds-color-white-30: ${colorOpacity.white30};`,
    `--ds-color-white-40: ${colorOpacity.white40};`,
    `--ds-color-white-50: ${colorOpacity.white50};`,
    `--ds-color-white-60: ${colorOpacity.white60};`,
    `--ds-color-white-70: ${colorOpacity.white70};`,
    `--ds-color-white-80: ${colorOpacity.white80};`,
    '',
    `--ds-color-text: var(--ds-color-white);`,
    `--ds-color-text-muted: rgba(255, 255, 255, 0.9);`,
    `--ds-color-text-dark: ${resolveValue(colorSemantic.textDark)};`,
    `--ds-color-background: var(--ds-color-rhino-darkest);`,
    `--ds-color-foreground: var(--ds-color-rhino-darker);`,
    `--ds-color-accent: var(--ds-color-gold);`,
    `--ds-color-accent-foreground: var(--ds-color-white);`,
    `--ds-color-border: var(--ds-color-rhino-darker);`,
    `--ds-color-border-light: var(--ds-color-rhino-dark);`,
    `--ds-color-border-lighter: var(--ds-color-rhino);`,
    `--ds-color-border-lightest: var(--ds-color-rhino-lighter);`,
    `--ds-color-success: #8fd694;`,
    `--ds-color-error: #ff9b9b;`,
    '',
    `--ds-font-size-h1: ${toRem(typographyDesktop.h1)};`,
    `--ds-font-size-h2: ${toRem(typographyDesktop.h2)};`,
    `--ds-font-size-h3: ${toRem(typographyDesktop.h3)};`,
    `--ds-font-size-h4: ${toRem(typographyDesktop.h4)};`,
    `--ds-font-size-h5: ${toRem(typographyDesktop.h5)};`,
    `--ds-font-size-h6: ${toRem(typographyDesktop.h6)};`,
    `--ds-font-size-text-lg: ${toRem(typographyDesktop.textLarge)};`,
    `--ds-font-size-text-md: ${toRem(typographyDesktop.textMedium)};`,
    `--ds-font-size-text-regular: ${toRem(typographyDesktop.textRegular)};`,
    `--ds-font-size-text-sm: ${toRem(typographyDesktop.textSmall)};`,
    `--ds-font-size-text-tiny: ${toRem(typographyDesktop.textTiny)};`,
    '',
    `--ds-container-large: ${toRem(spacingDesktop.containerLarge)};`,
    `--ds-container-medium: ${toRem(spacingDesktop.containerMedium)};`,
    `--ds-container-small: ${toRem(spacingDesktop.containerSmall)};`,
    `--ds-max-width-xxlarge: ${toRem(spacingDesktop.maxWidthXxlarge)};`,
    `--ds-max-width-xlarge: ${toRem(spacingDesktop.maxWidthXlarge)};`,
    `--ds-max-width-large: ${toRem(spacingDesktop.maxWidthLarge)};`,
    `--ds-max-width-medium: ${toRem(spacingDesktop.maxWidthMedium)};`,
    `--ds-max-width-small: ${toRem(spacingDesktop.maxWidthSmall)};`,
    `--ds-max-width-xsmall: ${toRem(spacingDesktop.maxWidthXsmall)};`,
    `--ds-max-width-xxsmall: ${toRem(spacingDesktop.maxWidthXxsmall)};`,
    `--ds-padding-global: ${toRem(spacingDesktop.paddingGlobal)};`,
    `--ds-padding-section-lg: ${toRem(spacingDesktop.paddingSectionLarge)};`,
    `--ds-padding-section-md: ${toRem(spacingDesktop.paddingSectionMedium)};`,
    `--ds-padding-section-sm: ${toRem(spacingDesktop.paddingSectionSmall)};`,
    '',
    `--ds-radius-sm: ${toRem(uiPrimitives.radiusSmall)};`,
    `--ds-radius-md: ${toRem(uiPrimitives.radiusMedium)};`,
    `--ds-radius-lg: ${toRem(uiPrimitives.radiusLarge)};`,
    `--ds-border-width: ${toRem(uiPrimitives.borderWidth)};`,
    `--ds-divider-width: ${toRem(uiPrimitives.dividerWidth)};`,
  ];

  const mobileTokens = [
    `--ds-font-size-h1: ${toRem(typographyMobile.h1)};`,
    `--ds-font-size-h2: ${toRem(typographyMobile.h2)};`,
    `--ds-font-size-h3: ${toRem(typographyMobile.h3)};`,
    `--ds-font-size-h4: ${toRem(typographyMobile.h4)};`,
    `--ds-font-size-h5: ${toRem(typographyMobile.h5)};`,
    `--ds-font-size-h6: ${toRem(typographyMobile.h6)};`,
    `--ds-font-size-text-lg: ${toRem(typographyMobile.textLarge)};`,
    `--ds-font-size-text-md: ${toRem(typographyMobile.textMedium)};`,
    `--ds-font-size-text-regular: ${toRem(typographyMobile.textRegular)};`,
    `--ds-font-size-text-sm: ${toRem(typographyMobile.textSmall)};`,
    `--ds-font-size-text-tiny: ${toRem(typographyMobile.textTiny)};`,
    '',
    `--ds-padding-global: ${toRem(spacingMobile.paddingGlobal)};`,
    `--ds-padding-section-lg: ${toRem(spacingMobile.paddingSectionLarge)};`,
    `--ds-padding-section-md: ${toRem(spacingMobile.paddingSectionMedium)};`,
    `--ds-padding-section-sm: ${toRem(spacingMobile.paddingSectionSmall)};`,
    `--ds-container-large: ${toRem(spacingMobile.containerLarge)};`,
    `--ds-max-width-xxlarge: ${toRem(spacingMobile.maxWidthXxlarge)};`,
  ];

  const desktopRegex = /\/\* START: TOKENS \*\/[\s\S]*?\/\* END: TOKENS \*\//;
  const mobileRegex = /\/\* START: MOBILE_TOKENS \*\/[\s\S]*?\/\* END: MOBILE_TOKENS \*\//;

  let updatedCss = cssContent.replace(
    desktopRegex,
    `/* START: TOKENS */\n  ${desktopTokens.join('\n  ')}\n  /* END: TOKENS */`
  );

  updatedCss = updatedCss.replace(
    mobileRegex,
    `/* START: MOBILE_TOKENS */\n    ${mobileTokens.join('\n    ')}\n    /* END: MOBILE_TOKENS */`
  );

  writeFileSync(CSS_FILE, updatedCss);
  console.log('Successfully synced design-tokens.ts to globals.css');
}

sync();
