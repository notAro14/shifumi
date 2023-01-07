import { createReducer } from "@reduxjs/toolkit"
import { playersShapesFormed } from "src/core/usecases/playShape/actions"

export interface CountScoreState {
  player: number
  computer: number
}
const initial: CountScoreState = {
  player: 0,
  computer: 0,
}

export const countScore = createReducer(initial, (builder) => {
  builder.addCase(playersShapesFormed, (state, action) => {
    const {
      payload: { playerShape, computerShape },
    } = action
    if (playerShape === computerShape) {
      state.player = 1
      state.computer = 1
    }
    if (playerShape === "Paper" && computerShape === "Rock") {
      state.player = 3
      state.computer = 0
    }
    if (playerShape === "Scissors" && computerShape === "Rock") {
      state.player = 0
      state.computer = 3
    }
    if (playerShape === "Rock" && computerShape === "Paper") {
      state.player = 0
      state.computer = 3
    }
    if (playerShape === "Scissors" && computerShape === "Paper") {
      state.player = 3
      state.computer = 0
    }
    if (playerShape === "Rock" && computerShape === "Scissors") {
      state.player = 3
      state.computer = 0
    }
    if (playerShape === "Paper" && computerShape === "Scissors") {
      state.player = 0
      state.computer = 3
    }
  })
})
