import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import { configureAppStore } from "src/core/store/configureAppStore"
import type { ScoreVM } from "./scoreVM"
import { scoreSelector } from "./score.selector"
import { playShape } from "src/core/usecases/playShape"

describe("score selector", () => {
  it("should retrieve all initial scores", async () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({
      shifumiGateway,
    })
    expect(scoreSelector(store.getState())).toEqual<ScoreVM>(
      "Player 0 - Computer 0"
    )
  })
  it("should retrieve scores after a round", async () => {
    const shifumiGateway = new InMemoryShifumiGateway()
    const store = configureAppStore({
      shifumiGateway,
    })
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Rock"))
    expect(scoreSelector(store.getState())).toEqual<ScoreVM>(
      "Player 3 - Computer 0"
    )
  })
})
