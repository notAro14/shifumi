import { configureStore as _configureStore } from "@reduxjs/toolkit"
import {
  playShapeReducer as playShape,
  PlayShapeState,
} from "src/core/usecases/playShape/playShape.reducer"

export const configureStore = () => {
  return _configureStore<AppState>({
    reducer: {
      playShape,
    },
  })
}

export interface AppState {
  playShape: PlayShapeState
}
