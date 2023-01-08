import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import { configureAppStore } from "src/core/store/configureAppStore"
import { playShape } from "src/core/usecases/playShape"
import { GameHistoryVM } from "./gameHistoryVM"
import { gameHistorySelector } from "./gameHistory.selector"

describe("game history selector", () => {
  it("should initially retrieve empty game history", () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    expect(gameHistorySelector(store.getState())).toEqual<GameHistoryVM>([])
  })
  it("should retrieve game history after one round", async () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Rock"))
    expect(gameHistorySelector(store.getState())).toEqual<GameHistoryVM>([
      "Player (Rock) VS Computer (Scissors)",
    ])
  })
  it("should retrieve game history in descending order after 2 rounds", async () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Rock"))
    shifumiGateway.shape = "Rock"
    await store.dispatch(playShape("Paper"))
    expect(gameHistorySelector(store.getState())).toEqual<GameHistoryVM>([
      "Player (Paper) VS Computer (Rock)",
      "Player (Rock) VS Computer (Scissors)",
    ])
  })
})
