import { configureStore } from "src/core/store"
import type { AppState } from "src/core/store/appState"
import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import { playShape } from "./playShape"
import { Shape } from "src/core/models/shape"

describe("play shape", () => {
  test("initially both player and computer don't play shape", () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureStore({ shifumiGateway })
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
      const shifumiGateway = new InMemoryShifumiGateway()
      const computerShape: Shape = "Scissors"
      shifumiGateway.shape = computerShape

      const store = configureStore({ shifumiGateway })
      const initalState = store.getState()

      const playerShape: Shape = "Rock"
      await store.dispatch(playShape(playerShape))

      expect(store.getState()).toEqual<AppState>({
        ...initalState,
        playShape: {
          playerShape,
          computerShape,
        },
      })
    })
  })
})
