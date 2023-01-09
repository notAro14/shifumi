import { style } from "src/styles"
import { vars } from "src/styles/tokens.css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
})

export const button = style({
  backgroundColor: vars.colors.brand,
  border: "none",
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: vars.radii.sm,
  cursor: "pointer",
  boxShadow: vars.shadows.xs,
  textTransform: "uppercase",
  color: vars.colors["text-fg-white"],
  ":hover": {
    backgroundColor: vars.colors["brand-hovered"],
    boxShadow: vars.shadows.sm,
  },
})
