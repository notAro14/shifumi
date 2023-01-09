import { style } from "src/styles"
import { vars } from "src/styles/tokens.css"

export const card = style({
  borderRadius: vars.radii.sm,
  padding: vars.space.lg,
  boxShadow: vars.shadows.md,
  width: "100%",
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: 500,
    },
  },
})
