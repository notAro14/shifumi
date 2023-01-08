import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import type { AppState, AppStore } from "src/core/store"
import { configureAppStore } from "src/core/store/configureAppStore"
import { playShape } from "src/core/usecases/playShape"

describe("save round to history", () => {
  let store: AppStore
  let initialState: AppState
  let shifumiGateway: InMemoryShifumiGateway

  beforeEach(() => {
    shifumiGateway = new InMemoryShifumiGateway()
    store = configureAppStore({ shifumiGateway })
    initialState = store.getState()
  })

  test("history is empty initially", () => {
    store = configureAppStore({ shifumiGateway })
    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      saveRoundToHistory: [],
    })
  })
  test("history after one round", async () => {
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Rock"))
    expect(store.getState().saveRoundToHistory).toEqual<
      AppState["saveRoundToHistory"]
    >([{ playerShape: "Rock", computerShape: "Scissors" }])
  })
})
