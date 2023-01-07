import { configureAppStore } from "src/core/store/configureAppStore"
import type { AppStore, AppState } from "src/core/store"
import type { Shape } from "src/core/models/shape"
import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import { playShape } from "src/core/usecases/playShape"

describe("initial score", () => {
  let store: AppStore
  let initialState: AppState
  let shifumiGateway: InMemoryShifumiGateway

  beforeEach(() => {
    shifumiGateway = new InMemoryShifumiGateway()
    store = configureAppStore({ shifumiGateway })
    initialState = store.getState()
  })
  test("initially both player and computer begins with 0", () => {
    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      countScore: {
        player: 0,
        computer: 0,
      },
    })
  })
})

describe("count score for first round", () => {
  let store: AppStore
  let initialState: AppState
  let shifumiGateway: InMemoryShifumiGateway

  beforeEach(() => {
    shifumiGateway = new InMemoryShifumiGateway()
    store = configureAppStore({ shifumiGateway })
    initialState = store.getState()
  })

  const table: {
    computerShape: Shape
    playerShape: Shape
    score: { player: number; computer: number }
  }[] = [
    {
      playerShape: "Rock",
      computerShape: "Rock",
      score: {
        player: 1,
        computer: 1,
      },
    },
    {
      playerShape: "Paper",
      computerShape: "Rock",
      score: {
        player: 3,
        computer: 0,
      },
    },
    {
      playerShape: "Scissors",
      computerShape: "Rock",
      score: {
        player: 0,
        computer: 3,
      },
    },
    {
      playerShape: "Rock",
      computerShape: "Paper",
      score: {
        player: 0,
        computer: 3,
      },
    },
    {
      playerShape: "Scissors",
      computerShape: "Paper",
      score: {
        player: 3,
        computer: 0,
      },
    },
    {
      playerShape: "Rock",
      computerShape: "Scissors",
      score: {
        player: 3,
        computer: 0,
      },
    },
    {
      playerShape: "Paper",
      computerShape: "Scissors",
      score: {
        player: 0,
        computer: 3,
      },
    },
  ]
  test.each(table)(
    "Player($playerShape) VS Computer($computerShape), player: $score.player computer: $score.computer",
    async ({ playerShape, computerShape, score }) => {
      shifumiGateway.shape = computerShape
      await store.dispatch(playShape(playerShape))

      expect(store.getState()).toEqual<AppState>({
        ...initialState,
        playShape: {
          playerShape,
          computerShape,
        },
        countScore: score,
      })
    }
  )
})
