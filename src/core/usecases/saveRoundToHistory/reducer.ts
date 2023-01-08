import { createReducer } from "@reduxjs/toolkit"
import type { Shape } from "src/core/models/shape"
import { playShape } from "src/core/usecases/playShape"

export type SaveRoundToHistoryState = {
  playerShape: Shape
  computerShape: Shape
}[]
const initial: SaveRoundToHistoryState = []

export const saveRoundToHistory = createReducer(initial, (builder) => {
  builder.addCase(playShape.fulfilled, (state, action) => {
    const {
      payload: { playerShape, computerShape },
    } = action

    state.push({ playerShape, computerShape })
  })
})
