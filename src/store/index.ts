import { configureStore, ThunkAction, AnyAction } from "@reduxjs/toolkit"
import type { AppState } from "./appState"
import { retrievePlayers } from "src/core-logic/reducers/retrievePlayers.reducer"

export const createStore = () =>
  configureStore<AppState>({
    reducer: {
      retrievePlayers,
    },
    devTools: process.env.NODE_ENV === "development",
  })
export const store = createStore()

export type Store = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>
