import { configureStore } from "@reduxjs/toolkit"
import { playShape } from "src/core/usecases/playShape/reducer"
import type { Dependencies } from "."

export const configureAppStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    reducer: {
      playShape,
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
