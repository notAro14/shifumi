import { createReducer } from "@reduxjs/toolkit"
import type { Shape } from "src/core/models/shape"
import { playersShapesFormed } from "./actions"

export interface PlayShapeState {
  playerShape: Shape | null
  computerShape: Shape | null
}
const initial: PlayShapeState = {
  playerShape: null,
  computerShape: null,
}

export const playShape = createReducer(initial, (builder) => {
  builder.addCase(playersShapesFormed, (state, action) => {
    state.computerShape = action.payload.computerShape
    state.playerShape = action.payload.playerShape
  })
})
