import { configureStore } from "src/core/store"
import type { AppState } from "src/core/store/appState"
import { playShape } from "./playShape"

describe("play shape", () => {
  test("initially both player and computer don't play shape", () => {
    const store = configureStore()
    const state = store.getState()
    expect(state).toEqual<AppState>({
      playShape: {
        playerShape: null,
        computerShape: null,
      },
    })
  })
  describe("player forms a shape", () => {
    test("player plays ROCK and computer plays SCISSORS", async () => {
      const store = configureStore()
      const initalState = store.getState()
      await store.dispatch(playShape("Rock"))
      expect(store.getState()).toEqual<AppState>({
        ...initalState,
        playShape: {
          playerShape: "Rock",
          computerShape: "Scissors",
        },
      })
    })
  })
})
