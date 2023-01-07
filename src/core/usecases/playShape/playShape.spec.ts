import { configureAppStore } from "src/core/store/configureAppStore"
import type { AppState, AppStore } from "src/core/store"
import type { Shape } from "src/core/models/shape"
import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import { playShape } from "./playShape"

describe("Player plays a shape", () => {
  let store: AppStore
  let initialState: AppState
  let shifumiGateway: InMemoryShifumiGateway

  beforeEach(() => {
    shifumiGateway = new InMemoryShifumiGateway()
    store = configureAppStore({ shifumiGateway })
    initialState = store.getState()
  })

  test("initially both player and computer don't form shapes", () => {
    expect(initialState).toEqual<AppState>({
      ...initialState,
      playShape: {
        playerShape: null,
        computerShape: null,
      },
    })
  })

  test("player plays ROCK and computer plays SCISSORS", async () => {
    const computerShape: Shape = "Scissors"
    shifumiGateway.shape = computerShape

    const playerShape: Shape = "Rock"
    await store.dispatch(playShape(playerShape))

    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      playShape: {
        playerShape,
        computerShape,
      },
    })
  })
})
