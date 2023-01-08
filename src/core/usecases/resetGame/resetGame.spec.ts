import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import type { AppState } from "src/core/store"
import { configureAppStore } from "src/core/store/configureAppStore"
import { playShape } from "src/core/usecases/playShape"
import { resetGame } from "./actions"

describe("reset game", () => {
  it("should reset game to its initial state", async () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    const initialState = store.getState()
    shifumiGateway.shape = "Paper"
    await store.dispatch(playShape("Paper"))
    await store.dispatch(playShape("Paper"))
    await store.dispatch(playShape("Paper"))
    store.dispatch(resetGame())
    expect(store.getState()).toEqual<AppState>(initialState)
  })
})
