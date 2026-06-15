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
    `--ds-font-size-h1: ${typographyDesktop.h1}px;`,
    `--ds-font-size-h2: ${typographyDesktop.h2}px;`,
    `--ds-font-size-h3: ${typographyDesktop.h3}px;`,
    `--ds-font-size-h4: ${typographyDesktop.h4}px;`,
    `--ds-font-size-h5: ${typographyDesktop.h5}px;`,
    `--ds-font-size-h6: ${typographyDesktop.h6}px;`,
    `--ds-font-size-text-lg: ${typographyDesktop.textLarge}px;`,
    `--ds-font-size-text-md: ${typographyDesktop.textMedium}px;`,
    `--ds-font-size-text-regular: ${typographyDesktop.textRegular}px;`,
    `--ds-font-size-text-sm: ${typographyDesktop.textSmall}px;`,
    `--ds-font-size-text-tiny: ${typographyDesktop.textTiny}px;`,
    '',
    `--ds-container-large: ${spacingDesktop.containerLarge}px;`,
    `--ds-container-medium: ${spacingDesktop.containerMedium}px;`,
    `--ds-container-small: ${spacingDesktop.containerSmall}px;`,
    `--ds-max-width-xxlarge: ${spacingDesktop.maxWidthXxlarge}px;`,
    `--ds-max-width-xlarge: ${spacingDesktop.maxWidthXlarge}px;`,
    `--ds-max-width-large: ${spacingDesktop.maxWidthLarge}px;`,
    `--ds-max-width-medium: ${spacingDesktop.maxWidthMedium}px;`,
    `--ds-max-width-small: ${spacingDesktop.maxWidthSmall}px;`,
    `--ds-max-width-xsmall: ${spacingDesktop.maxWidthXsmall}px;`,
    `--ds-max-width-xxsmall: ${spacingDesktop.maxWidthXxsmall}px;`,
    `--ds-padding-global: ${spacingDesktop.paddingGlobal}px;`,
    `--ds-padding-section-lg: ${spacingDesktop.paddingSectionLarge}px;`,
    `--ds-padding-section-md: ${spacingDesktop.paddingSectionMedium}px;`,
    `--ds-padding-section-sm: ${spacingDesktop.paddingSectionSmall}px;`,
    '',
    `--ds-radius-sm: ${uiPrimitives.radiusSmall}px;`,
    `--ds-radius-md: ${uiPrimitives.radiusMedium}px;`,
    `--ds-radius-lg: ${uiPrimitives.radiusLarge}px;`,
    `--ds-border-width: ${uiPrimitives.borderWidth}px;`,
    `--ds-divider-width: ${uiPrimitives.dividerWidth}px;`,
  ];

  const mobileTokens = [
    `--ds-font-size-h1: ${typographyMobile.h1}px;`,
    `--ds-font-size-h2: ${typographyMobile.h2}px;`,
    `--ds-font-size-h3: ${typographyMobile.h3}px;`,
    `--ds-font-size-h4: ${typographyMobile.h4}px;`,
    `--ds-font-size-h5: ${typographyMobile.h5}px;`,
    `--ds-font-size-h6: ${typographyMobile.h6}px;`,
    `--ds-font-size-text-lg: ${typographyMobile.textLarge}px;`,
    `--ds-font-size-text-md: ${typographyMobile.textMedium}px;`,
    `--ds-font-size-text-regular: ${typographyMobile.textRegular}px;`,
    `--ds-font-size-text-sm: ${typographyMobile.textSmall}px;`,
    `--ds-font-size-text-tiny: ${typographyMobile.textTiny}px;`,
    '',
    `--ds-padding-global: ${spacingMobile.paddingGlobal}px;`,
    `--ds-padding-section-lg: ${spacingMobile.paddingSectionLarge}px;`,
    `--ds-padding-section-md: ${spacingMobile.paddingSectionMedium}px;`,
    `--ds-padding-section-sm: ${spacingMobile.paddingSectionSmall}px;`,
    `--ds-container-large: ${spacingMobile.containerLarge}px;`,
    `--ds-max-width-xxlarge: ${spacingMobile.maxWidthXxlarge}px;`,
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
