import { createStore, Store, RootState } from "src/store"
import { retrievePlayers } from "./retrievePlayers"

describe("retrieve players", () => {
  let store: Store
  let initialState: RootState

  beforeEach(() => {
    store = createStore()
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
      retrievePlayers: [{ id: "123abc", name: "Jane Doe" }],
    })
  })
})
