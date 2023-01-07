import { createReducer } from "@reduxjs/toolkit"
import { playersShapesFormed } from "src/core/usecases/playShape/actions"
import type { Shape } from "src/core/models/shape"

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
    const roundStatus = shifumiMachineReducer({ playerShape, computerShape })
    switch (roundStatus) {
      case "DRAW": {
        state.player = 1
        state.computer = 1
        break
      }
      case "WIN": {
        state.player = 3
        state.computer = 0
        break
      }
      case "LOSE": {
        state.player = 0
        state.computer = 3
        break
      }
    }
  })
})

const shifumiMachineReducer = (round: {
  playerShape: Shape
  computerShape: Shape
}) => {
  const { playerShape, computerShape } = round
  return shifumiMachine[playerShape][computerShape]
}

const shifumiMachine: Record<Shape, Record<Shape, "WIN" | "DRAW" | "LOSE">> = {
  Rock: {
    Rock: "DRAW",
    Paper: "LOSE",
    Scissors: "WIN",
  },
  Paper: {
    Rock: "WIN",
    Paper: "DRAW",
    Scissors: "LOSE",
  },
  Scissors: {
    Rock: "LOSE",
    Paper: "WIN",
    Scissors: "DRAW",
  },
}
