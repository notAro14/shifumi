import { keyframes, style } from "src/styles"
import { vars } from "src/styles/tokens.css"

const overlayShow = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
})

const contentShow = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(5%) scale(0.96)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0) scale(1)",
  },
})

export const overlay = style({
  backgroundColor: vars.colors.overlay,
  position: "fixed",
  inset: 0,
  display: "grid",
  placeItems: "center",
  animationName: overlayShow,
  animationDuration: "150ms",
  animationTimingFunction: "ease-in-out",
  animationFillMode: "forwards",
})

export const content = style({
  animationName: contentShow,
  animationDuration: "150ms",
  animationTimingFunction: "ease-in-out",
  animationFillMode: "forwards",
  backgroundColor: vars.colors["surface-2"],
  borderRadius: vars.radii.md,
  color: vars.colors["text-1"],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: vars.space.sm,
  fontFamily: vars.fontFamily.sans,
  padding: vars.space.sm,
  position: "relative",
  minHeight: 150,
  width: "80%",
  "@media": {
    "screen and (min-width: 768px)": {
      width: 250,
    },
  },
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
