import { ACTIONS } from "src/core-logic/events"
import { createStore, Store } from "src/store"
import { playersSelector } from "./playersVM.selector"

describe("Players not retrieved yet", () => {
  let store: Store
  beforeEach(() => {
    store = createStore({})
  })

  it("should not retrieve any players", () => {
    expect(playersSelector(store.getState())).toEqual(null)
  })
})

describe("Players retrieved", () => {
  let store: Store
  beforeEach(() => {
    store = createStore({})
  })

  it("should retrieve all players", () => {
    const retrievedPlayers = [{ id: "123abc", name: "Jane Doe" }]
    store.dispatch({
      type: ACTIONS["retrievePlayers/fullfilled"],
      payload: retrievedPlayers,
    })
    expect(playersSelector(store.getState())).toEqual(retrievedPlayers)
  })
})
