import { AnyAction, Reducer } from "@reduxjs/toolkit"
import { Player } from "src/core-logic/usecases/player"
import { ACTIONS } from "src/core-logic/events"

type State = null | Player[]
const initialState: State = null

export const retrievePlayers: Reducer<State, AnyAction> = (
  state = initialState,
  action
) => {
  if (action.type === ACTIONS["retrievePlayers/fullfilled"])
    return action.payload as Player[]
  return state
}
