# Design Tokens

Design tokens are exported from Figma JSON under `tokens/`, mirrored as typed constants in `lib/design-tokens.ts`, and exposed to Tailwind v4 through `app/globals.css`.

Use semantic classes first:

- Color: `bg-background`, `bg-surface`, `bg-surface-elevated`, `text-foreground`, `text-muted`, `text-accent`, `border-border`
- Typography: `text-h1` through `text-h6`, plus `text-body-lg`, `text-body`, `text-body-sm`, and `text-body-xs`
- Layout: `px-page`, `py-section`, `py-section-sm`, `py-section-lg`, and `max-w-container-*`

Raw color literals belong only in `lib/design-tokens.ts` and `app/globals.css`. Runtime consumers that need a hex value, such as metadata or third-party embeds, should import from `lib/design-tokens.ts`.

Run `npm test` before shipping token changes. Run `npm run eval:design-tokens` when changing the token contract or adding new token utility names.
