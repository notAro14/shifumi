import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import { configureAppStore } from "src/core/store/configureAppStore"
import { playShape } from "src/core/usecases/playShape"
import { winnerSelector } from "./winner.selector"
import type { WinnerVM } from "./winnerVM"

describe("winner selector", () => {
  test("initially there is no winner", () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    const state = store.getState()
    expect(winnerSelector(state)).toEqual<WinnerVM>({
      winner: null,
      congratsWord: null,
    })
  })
  test("player wins after 3 rounds", async () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Rock"))
    await store.dispatch(playShape("Rock"))
    await store.dispatch(playShape("Rock"))
    const state = store.getState()
    expect(winnerSelector(state)).toEqual<WinnerVM>({
      winner: "Player",
      congratsWord: "You won !",
    })
  })
  test("player loses after 3 rounds", async () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    shifumiGateway.shape = "Paper"
    await store.dispatch(playShape("Rock"))
    await store.dispatch(playShape("Rock"))
    await store.dispatch(playShape("Rock"))
    const state = store.getState()
    expect(winnerSelector(state)).toEqual<WinnerVM>({
      winner: "Computer",
      congratsWord: "You lost",
    })
  })
  test("draw after 3 rounds", async () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({ shifumiGateway })
    shifumiGateway.shape = "Paper"
    await store.dispatch(playShape("Paper"))
    await store.dispatch(playShape("Paper"))
    await store.dispatch(playShape("Paper"))
    const state = store.getState()
    expect(winnerSelector(state)).toEqual<WinnerVM>({
      winner: "Draw",
      congratsWord: "It's a tie",
    })
  })
})
