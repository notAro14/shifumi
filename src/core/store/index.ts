import {
  Action,
  configureStore as _configureStore,
  Store,
  ThunkDispatch,
} from "@reduxjs/toolkit"
import { playShape } from "src/core/usecases/playShape/reducer"
import type { AppState } from "./appState"
import type { Dependencies } from "./dependencies"

export const configureStore = (dependencies: Partial<Dependencies>) => {
  return _configureStore({
    reducer: {
      playShape,
    },
    middleware(gdm) {
      return gdm({
        thunk: {
          extraArgument: dependencies,
        },
      })
    },
  })
}

export type AppStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>
}
