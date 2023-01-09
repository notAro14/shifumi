import { style } from "src/styles"
import { vars } from "src/styles/tokens.css"

export const gameHistory = style({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xxxs,
})
