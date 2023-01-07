import { configureStore, AppState } from "src/core/store"

describe("play shape", () => {
  test("initially both player and computer don't play shape", () => {
    const store = configureStore()
    const state = store.getState()
    expect(state).toEqual<AppState>({
      playShape: {
        player: {
          shape: null,
        },
        computer: {
          shape: null,
        },
      },
    })
  })
})
