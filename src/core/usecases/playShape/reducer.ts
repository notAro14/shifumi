import { createReducer } from "@reduxjs/toolkit"
import type { Shape } from "src/core/models/shape"
import { playShape as _playShape } from "src/core/usecases/playShape"
import { resetGame } from "src/core/usecases/resetGame/actions"

export interface PlayShapeState {
  playerShape: Shape | null
  computerShape: Shape | null
}
const initial: PlayShapeState = {
  playerShape: null,
  computerShape: null,
}

export const playShape = createReducer(initial, (builder) => {
  builder.addCase(_playShape.fulfilled, (state, action) => {
    state.computerShape = action.payload.computerShape
    state.playerShape = action.payload.playerShape
  })
  builder.addCase(resetGame, () => initial)
})
