import { createAction } from "@reduxjs/toolkit"
import type { Shape } from "src/core/models/shape"

interface Payload {
  playerShape: Shape
  computerShape: Shape
}
export const playersShapesFormed = createAction<Payload>(
  "PLAYERS_SHAPES_FORMED"
)
