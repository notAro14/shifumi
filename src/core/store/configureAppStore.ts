import { configureStore } from "@reduxjs/toolkit"
import { playShape } from "src/core/usecases/playShape/reducer"
import { countScore } from "src/core/usecases/countScore/reducer"
import type { Dependencies } from "."

export const configureAppStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    reducer: {
      playShape,
      countScore,
    },
    middleware(gdm) {
      return gdm({
        thunk: {
          extraArgument: {
            dependencies,
          },
        },
      })
    },
  })
}
