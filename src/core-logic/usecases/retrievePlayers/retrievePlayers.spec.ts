import { InMemoryPlayerGateway } from "src/adapters/secondary/inMemoryPlayerGateway"
import { createStore, Store, RootState } from "src/store"
import { retrievePlayers } from "./retrievePlayers"

describe("retrieve players", () => {
  let store: Store
  let initialState: RootState
  const players = [{ id: "123abc", name: "Jane Doe" }]

  beforeEach(() => {
    store = createStore({
      playerGateway: new InMemoryPlayerGateway(players),
    })
    initialState = store.getState()
  })

  it("should not retrieve any players initially", () => {
    expect(initialState).toEqual({
      retrievePlayers: null,
    })
  })
  it("should retrieve a list of players", async () => {
    await store.dispatch(retrievePlayers())
    expect(store.getState()).toEqual({
      retrievePlayers: players,
    })
  })
})
