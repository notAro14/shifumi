import { style } from "src/styles"
import { vars } from "src/styles/tokens.css"

export const layout = style({
  fontFamily: vars.fontFamily.sans,
  color: vars.colors["text-2"],
  height: "100%",
  display: "flex",
  justifyContent: "center",
  padding: vars.space.sm,
  backgroundColor: vars.colors["surface-1"],
})
