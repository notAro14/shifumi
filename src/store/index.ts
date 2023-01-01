import {
  configureStore,
  ThunkAction,
  AnyAction,
  ThunkDispatch,
  Action,
} from "@reduxjs/toolkit"
import type { AppState } from "./appState"
import { retrievePlayers } from "src/core-logic/reducers/retrievePlayers.reducer"
import { PlayerGateway } from "src/core-logic/gateways/playerGateway"

interface Dependencies {
  playerGateway: PlayerGateway
}

export const createStore = (dependencies: Partial<Dependencies>) =>
  configureStore({
    reducer: {
      retrievePlayers,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
    devTools: true,
  })

export type AppDispatch = ThunkDispatch<AppState, Dependencies, Action>
export type Store = ReturnType<typeof createStore>
export type RootState = AppState
export type AppThunk<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  RootState,
  Dependencies,
  AnyAction
>
