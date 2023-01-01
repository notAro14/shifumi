import { AnyAction, Reducer } from "@reduxjs/toolkit"
import { Player } from "src/core-logic/usecase/player"

type State = null | Player[]
const initialState: State = null

export const retrievePlayers: Reducer<State, AnyAction> = (
  state = initialState,
  action
) => {
  if (action.type === "PLAYERS_RETRIEVED") return action.payload as Player[]
  return state
}
