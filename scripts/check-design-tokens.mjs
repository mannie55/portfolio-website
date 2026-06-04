import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const evalMode = process.argv.includes("--eval");

const requiredThemeTokens = [
  "--color-background",
  "--color-foreground",
  "--color-foreground-muted",
  "--color-muted",
  "--color-accent",
  "--color-accent-foreground",
  "--color-surface",
  "--color-surface-elevated",
  "--color-surface-hover",
  "--color-border",
  "--color-success",
  "--color-error",
  "--text-h1",
  "--text-h2",
  "--text-h3",
  "--text-h4",
  "--text-h5",
  "--text-h6",
  "--text-body-lg",
  "--text-body-md",
  "--text-body",
  "--text-body-sm",
  "--text-body-xs",
  "--spacing-page",
  "--spacing-section",
  "--spacing-section-lg",
  "--spacing-section-md",
  "--spacing-section-sm",
  "--container-container-xxlarge",
  "--radius-md",
];

const oldCssVarPattern =
  /var\(--(background|foreground|muted|foreground-on-light|accent|accent-foreground|surface|surface-elevated|surface-hover|border|border-subtle|border-strong|border-light|success|error|spacing-(?:none|xs|sm|sm-md|md|md-lg|lg|xl|section-pad|section|section-lg|section-xl))\)/;
const rawColorPattern = /#[0-9a-fA-F]{3,8}\b|rgba?\(/;
const oldTypeClassPattern =
  /\btext-(?:xs|sm|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\b/;
const trackingTightPattern = /\btracking-tight\b/;

function readRepoFile(path) {
  return readFileSync(join(repoRoot, path), "utf8");
}

function walk(dir, extensions, files = []) {
  for (const entry of readdirSync(join(repoRoot, dir))) {
    const absolutePath = join(repoRoot, dir, entry);
    const stats = statSync(absolutePath);

    if (stats.isDirectory()) {
      walk(relative(repoRoot, absolutePath), extensions, files);
      continue;
    }

    if (extensions.some((extension) => entry.endsWith(extension))) {
      files.push(relative(repoRoot, absolutePath));
    }
  }

  return files;
}

const failures = [];
const globalsCss = readRepoFile("app/globals.css");

for (const token of requiredThemeTokens) {
  if (!globalsCss.includes(`${token}:`)) {
    failures.push(`Missing Tailwind theme token: ${token}`);
  }
}

const legacyCssVarMatch = globalsCss.match(oldCssVarPattern);
if (legacyCssVarMatch) {
  failures.push(`Found legacy CSS variable reference: ${legacyCssVarMatch[0]}`);
}

const sourceFiles = [
  ...walk("app", [".ts", ".tsx", ".css"]),
  ...walk("components", [".ts", ".tsx"]),
  ...walk("lib", [".ts", ".tsx"]),
].filter(
  (file) => !file.endsWith("design-tokens.ts") && file !== "app/globals.css",
);

for (const file of sourceFiles) {
  const contents = readRepoFile(file);
  const rawColorMatch = contents.match(rawColorPattern);
  if (rawColorMatch) {
    failures.push(`${file} contains raw color literal ${rawColorMatch[0]}`);
  }

  const oldTypeClassMatch = contents.match(oldTypeClassPattern);
  if (oldTypeClassMatch) {
    failures.push(`${file} uses built-in type class ${oldTypeClassMatch[0]}`);
  }

  if (trackingTightPattern.test(contents)) {
    failures.push(`${file} uses tracking-tight instead of token typography`);
  }
}

if (evalMode) {
  const checks = requiredThemeTokens.length + sourceFiles.length * 3 + 1;
  const passed = checks - failures.length;
  console.log(`design-token-eval score=${passed}/${checks}`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Design token contract checks passed.");
