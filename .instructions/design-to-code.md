# Design to Code Skill

Convert Figma design components into production-ready React/Next.js code integrated with the project's design system and data architecture.

## Workflow

### 1. Audit Existing System
- Review `lib/constants.ts` for centralized data (navLinks, siteConfig, routes)
- Check `app/globals.css` for design tokens (colors, spacing, typography)
- Examine existing components in `components/` for patterns and conventions
- Verify `tsconfig.json` for path aliases

**Goal:** Understand the project's data model and design system before writing code.

### 2. Extract & Analyze Design Code
- Export component from Figma (via Figma to Code plugin or manual)
- Document what it contains: hardcoded values, inline styles, pixel dimensions, text content
- Identify reusable elements vs. component-specific markup
- Note any content that should come from constants/data

**Goal:** Know what can be cleaned up and what maps to actual data.

### 3. Clean & Refactor
- Remove inline Tailwind complexity (flatten nested grids, excessive gaps)
- Replace hardcoded colors with design tokens (`bg-surface-elevated`, `text-muted`, etc.)
- Replace pixel-perfect spacing with semantic spacing classes (`gap-6`, `py-6`, etc.)
- Convert hardcoded text to dynamic content from constants or props
- Remove unused wrapper divs and unnecessary nesting

**Goal:** Code is readable, maintainable, and uses the design system.

### 4. Map to Data
- Import `navLinks`, `siteConfig`, other constants from `lib/`
- Replace static arrays with `.map()` over actual data
- Use `href` and `label` from constants, not hardcoded strings
- Link images to `/public/images/` paths established in the project

**Goal:** Component is data-driven, not hardcoded.

### 5. Integrate with Architecture
- Check if component fits an existing pattern (Layout, UI, Feature)
- Place in appropriate `components/` subdirectory
- Export from `index.ts` if needed
- Verify it uses Next.js features correctly (`Image`, `Link`, `use client` if needed)

**Goal:** Component follows project conventions and integrates cleanly.

### 6. Verify & Test
- Check responsive behavior (desktop/mobile states)
- Verify accessibility (aria labels, semantic HTML, contrast)
- Ensure images are optimized (Next.js `Image` component)
- Confirm no prop drilling or unused imports
- Test in Netlify environment (or locally)

**Goal:** Component is production-ready and works as designed.

## Checklist

- [ ] Reviewed existing codebase (constants, tokens, patterns)
- [ ] Extracted design code from Figma
- [ ] Removed inline styles, used design tokens
- [ ] Mapped hardcoded content to constants/props
- [ ] Placed in correct directory with proper exports
- [ ] Tested responsive and accessibility
- [ ] Committed with clear message

## Anti-Patterns to Avoid

- ❌ Hardcoding colors instead of using CSS variables
- ❌ Pixel-perfect spacing instead of semantic values
- ❌ Static arrays instead of mapping over data
- ❌ Unused wrapper divs and complex nesting
- ❌ Forgetting `Next.js Image` component for images
- ❌ Missing accessibility attributes (aria labels, semantic tags)
- ❌ Component placed in wrong directory

## Example Prompts

- "Convert the [component name] design in Figma to a clean React component using our design system."
- "I have Figma design code. Clean it up, map it to our constants, and make it responsive."
- "Refactor this navbar: remove inline styles, use design tokens, make it production-ready."

## Related Customizations

- **Image distribution** — Organize case study images, icons, assets into `/public/images/` structure
- **Figma asset export** — Batch export images/icons from Figma with consistent naming
- **Design system auditing** — Review and document color tokens, spacing scale, typography
