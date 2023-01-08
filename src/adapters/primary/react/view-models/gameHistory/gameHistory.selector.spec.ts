import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import { configureAppStore } from "src/core/store/configureAppStore"
import { playersShapesFormed } from "src/core/usecases/playShape/actions"
import { GameHistoryVM } from "./gameHistoryVM"
import { gameHistorySelector } from "./gameHistory.selector"

describe("game history selector", () => {
  it("should initially retrieve empty game history", () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    expect(gameHistorySelector(store.getState())).toEqual<GameHistoryVM>([])
  })
  it("should retrieve game history after one round", () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    store.dispatch(
      playersShapesFormed({ playerShape: "Rock", computerShape: "Scissors" })
    )
    expect(gameHistorySelector(store.getState())).toEqual<GameHistoryVM>([
      "Player (Rock) VS Computer (Scissors)",
    ])
  })
  it("should retrieve game history in descending order after 2 rounds", () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    store.dispatch(
      playersShapesFormed({ playerShape: "Rock", computerShape: "Scissors" })
    )
    store.dispatch(
      playersShapesFormed({ playerShape: "Paper", computerShape: "Rock" })
    )
    expect(gameHistorySelector(store.getState())).toEqual<GameHistoryVM>([
      "Player (Paper) VS Computer (Rock)",
      "Player (Rock) VS Computer (Scissors)",
    ])
  })
})
