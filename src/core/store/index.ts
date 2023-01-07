import { configureStore as _configureStore } from "@reduxjs/toolkit"
import { playShape } from "src/core/usecases/playShape/reducer"
import type { AppState } from "./appState"

export const configureStore = () => {
  return _configureStore<AppState>({
    reducer: {
      playShape,
    },
  })
}
